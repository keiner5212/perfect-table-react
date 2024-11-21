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
    <tr
      className={
        "table-row " +
        (hoverEffect && hoverType === "row" ? "hover-effect" : "")
      }
    >
      {indexed && (
        <td
          className={
            "table-index-col " +
            (hoverEffect && hoverType === "individual" ? "hover-effect" : "")
          }
          style={{
            color: columns[0].color,
            textAlign: columns[0].align,
          }}
        >
          <span
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {index + 1}
          </span>
        </td>
      )}
      {columns.map((column, index) => {
        return (
          <td
            className={
              hoverEffect && hoverType === "individual" ? "hover-effect" : ""
            }
            key={index + id + "table-item" + generateRamdomString(5)}
            style={{
              color: column.color,
              textAlign: column.align,
            }}
            onClick={column.onClick}
          >
            <span
              style={{
                width: "100%",
                textAlign: column.align || "left",
              }}
            >
              {column.content.Label}
            </span>
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
