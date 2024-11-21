import { FunctionComponent, useContext, useEffect, useState } from "react";
import "./TableHeaderItem.css";
import { TableContentIndvidual, TableHeaderType } from "./TableTypes";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import TableContext from "./TableService";

const TableHeaderItem: FunctionComponent<
  {
    index: number;
    sortActionInject: (
      sortMethod: (
        dataA: TableContentIndvidual[],
        dataB: TableContentIndvidual[]
      ) => number,
      mode: "asc" | "desc" | "none"
    ) => void;
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

  const defaultSortMethod = (
    a: TableContentIndvidual[],
    b: TableContentIndvidual[]
  ) => {
    return a[index].content.Label > b[index].content.Label
      ? 1
      : a[index].content.Label < b[index].content.Label
      ? -1
      : 0;
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
    ? { position: "sticky", top: "-0.5px" }
    : {};

  return (
    <th
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
      {tooltip && showTooltip && (
        <div className="custom-tooltip">{tooltip}</div>
      )}
    </th>
  );
};

export default TableHeaderItem;
