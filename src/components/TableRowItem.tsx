import { FunctionComponent, useState } from "react";
import "./TableRowItem.css";
import { TableRowType } from "./TableTypes";
import { SlOptionsVertical } from "react-icons/sl";

const TableRowItem: FunctionComponent<
  {
    index?: number;
    indexed?: boolean;
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
  function generateRamdomString(number: number) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < number; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
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
            key={index + id + "table-item" + generateRamdomString(5)}
            style={{
              color: column.color,
              backgroundColor: column.background,
              textAlign: column.align,
            }}
            onClick={column.onClick}
          >
            {column.content.Label}
          </td>
        );
      })}
      {actions.length > 0 && (
        <td
          className={hoverEffect && hoverType === "individual" ? "hover" : ""}
        >
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
      )}
    </tr>
  );
};

export default TableRowItem;
