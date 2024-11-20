import { FunctionComponent, useState } from "react";
import "./TableRowItem.css";
import { TableRowType } from "./TableTypes";
import { SlOptionsVertical } from "react-icons/sl";

const TableRowItem: FunctionComponent<
  {
    index?: number;
  } & TableRowType
> = ({
  id = "",
  columns,
  hoverEffect = false,
  hoverType = "row",
  actions = [],
  indexed = false,
  index = 0,
}) => {
  const [actionsVisible, setActionsVisible] = useState(false);
  return (
    <tr className={hoverEffect && hoverType === "row" ? "hover" : ""}>
      {indexed && (
        <td
          className={hoverEffect && hoverType === "individual" ? "hover" : ""}
        >
          {index}
        </td>
      )}
      {columns.map((column, index) => {
        return (
          <td
            className={hoverEffect && hoverType === "individual" ? "hover" : ""}
            key={index + id}
            style={{
              color: column.color,
              backgroundColor: column.background,
              textAlign: column.align,
            }}
          >
            {column.content.Label}
          </td>
        );
      })}
      <td className={hoverEffect && hoverType === "individual" ? "hover" : ""}>
        <span
          className="actions-button"
          onClick={() => {
            setActionsVisible(!actionsVisible);
          }}
        >
          <SlOptionsVertical />
        </span>
        {actionsVisible && (
          <div className="actions">
            {actions.map((action, index) => {
              return <div key={index}>{action.label}</div>;
            })}
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRowItem;
