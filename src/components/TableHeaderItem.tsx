import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./TableHeaderItem.css";
import { TableContentIndvidual, TableHeaderType } from "./TableTypes";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import TableContext from "./TableService";
import { renderTooltip } from "./renderTooltip";

const TableHeaderItem: FunctionComponent<
  {
    index: number;
    sortActionInject: (
      sortMethod: (
        dataA: TableContentIndvidual[],
        dataB: TableContentIndvidual[]
      ) => number,
      mode: "asc" | "desc" | "none"
    ) => 1 | -1 | 0;
    isSticky?: boolean;
  } & TableHeaderType
> = ({
  content = {
    Label: "",
  },
  index,
  icon = null,
  iconPosition = "left",
  classname = "",
  bold = false,
  sortable = false,
  color = "#000",
  background = "#fff",
  align = "left",
  tooltip = "",
  sortMethod = null,
  hoverEffect = false,
  sortActionInject,
  isSticky = false,
}) => {
  const { tableState, setTableState } = useContext(TableContext);
  const [sortMode, setSortMode] = useState<"asc" | "desc" | "none">("none");
  const [showTooltip, setShowTooltip] = useState(false);
  const cellRef = useRef<HTMLTableCellElement | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (showTooltip && cellRef.current) {
      setRect(cellRef.current.getBoundingClientRect());
    }
  }, [showTooltip]);

  const defaultSortMethod = (
    a: TableContentIndvidual[],
    b: TableContentIndvidual[]
  ) => {
    const getColumnValue = (item: TableContentIndvidual[], idx: number) => {
      const value = item[idx]?.content?.Label;
      return value ? value : "";
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const detectType = (value: any) => {
      if (!value) return "string"; 
      if (!isNaN(value)) return "number"; 
      const date = new Date(value);
      if (!isNaN(date.getTime())) return "date"; 
      return "string"; 
    };

    const valueA = getColumnValue(a, index);
    const valueB = getColumnValue(b, index);

    const typeA = detectType(valueA);
    const typeB = detectType(valueB);

    if (typeA === "number" && typeB === "number") {
      return Number(valueA) > Number(valueB)
        ? 1
        : Number(valueA) < Number(valueB)
        ? -1
        : 0;
    }

    if (typeA === "date" && typeB === "date") {
      const dateA = new Date(valueA);
      const dateB = new Date(valueB);
      return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
    }

    return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
  };

  useEffect(() => {
    if (
      tableState.sortedIndex !== undefined &&
      tableState.sortedIndex !== index
    )
      setSortMode("none");
  }, [tableState, index]);

  const handleSort = () => {
    if (!sortable || index === -1) return;
    setTableState({
      ...tableState,
      sortedIndex: index,
    });
    const temp =
      sortMode === "asc" ? "desc" : sortMode === "desc" ? "none" : "asc";
    setSortMode(temp as "asc" | "desc" | "none");
    sortActionInject(
      sortMethod || defaultSortMethod,
      temp as "asc" | "desc" | "none"
    );
  };

  const styckyStyles: React.CSSProperties = isSticky
    ? { position: "sticky", top: "-0.1px" }
    : {};

  return (
    <th
      ref={cellRef}
      className={`table-header-item ${classname} ${bold ? "bold" : ""} ${
        hoverEffect ? "hover-effect" : ""
      } ${sortable ? "has-sort" : ""}`}
      style={{ backgroundColor: background, ...styckyStyles }}
      onClick={handleSort}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon && iconPosition === "left" && icon}
      <span style={{ color, textAlign: align }}>{content.Label}</span>
      {icon && iconPosition === "right" && icon}
      <span>
        {sortMode === "asc" ? (
          <FaAngleUp color="black" />
        ) : sortMode === "desc" ? (
          <FaAngleDown color="black" />
        ) : null}
      </span>
      {renderTooltip(tooltip, showTooltip, rect)}
    </th>
  );
};

export default TableHeaderItem;
