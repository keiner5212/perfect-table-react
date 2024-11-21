import { createPortal } from "react-dom";

export const renderTooltip = (
  tooltip: string,
  showTooltip: boolean,
  rect: DOMRect | null
) => {
  if (!tooltip || !tooltip.trim()) return null;
  if (!showTooltip || !rect) return null;

  const tooltipStyle: React.CSSProperties = {
    position: "fixed",
    top: rect.bottom + 5,
    left: rect.left + rect.width / 2,
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    padding: "0.2rem 0.75rem",
    borderRadius: "0.25rem",
    fontSize: "0.875rem",
    zIndex: 1000,
    whiteSpace: "nowrap",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return createPortal(<div style={tooltipStyle}>{tooltip}</div>, document.body);
};
