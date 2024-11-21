import {
  FunctionComponent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { renderTooltip } from "./renderTooltip";

interface TableCellWithTooltipProps {
  content: string;
  tooltip: string;
  color?: string;
  align?: "left" | "center" | "right";
  onClick?: (event: MouseEvent<HTMLTableCellElement>) => void;
  hoverEffect: boolean;
  hoverType?: "row" | "individual";
  index: number;
}

const TableCellWithTooltip: FunctionComponent<TableCellWithTooltipProps> = ({
  content,
  tooltip,
  color,
  align,
  onClick,
  hoverEffect,
  hoverType = "row",
  index,
}) => {
  const cellRef = useRef<HTMLTableCellElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (showTooltip && cellRef.current) {
      setRect(cellRef.current.getBoundingClientRect());
    }
  }, [showTooltip, index]);

  return (
    <td
      ref={cellRef}
      style={{
        color,
        textAlign: align,
        position: "relative",
      }}
      className={
        hoverEffect && hoverType === "individual" ? "hover-effect" : ""
      }
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span style={{ width: "100%", textAlign: align || "left" }}>
        {content}
      </span>
      {renderTooltip(tooltip, showTooltip, rect)}
    </td>
  );
};

export default TableCellWithTooltip;
