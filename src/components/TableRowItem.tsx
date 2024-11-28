import { FunctionComponent } from "react";
import "./TableRowItem.css";
import { TableRowType } from "./TableTypes";
import TableCellWithTooltip from "./TableDataItem";
import ActionsButton from "./ActionsButton";

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

    function generateRandomString(number: number) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < number; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

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
              backgroundColor: columns[0].background,
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
        {columns.map((column, idx) => (
          <TableCellWithTooltip
            key={id + generateRandomString(5)}
            content={column.content.Label}
            background={column.background}
            tooltip={column.tooltip || ""}
            color={column.color}
            align={column.align}
            onClick={column.onClick}
            hoverEffect={hoverEffect}
            hoverType={hoverType}
            index={idx}
          />
        ))}
        {actions.length > 0 && (
          <ActionsButton actions={actions} hoverEffect={hoverEffect} hoverType={hoverType}
            background={columns[0].background}
            color={columns[0].color}
          />
        )}
      </tr>
    );
  };

export default TableRowItem;
