import { FunctionComponent, ReactNode, useState } from "react";
import "./TableContainer.css";
import {
  TableContentIndvidual,
  TableHeaderType,
  TableRowType,
} from "./TableTypes";
import TableHeaderItem from "./TableHeaderItem";
import TableRowItem from "./TableRowItem";
import { SlOptionsVertical } from "react-icons/sl";

/**
 * Table container component
 * @prop `{TableHeaderType[]} headers` - Array of header objects
 * @prop `{TableRowType[]}` rows - Array of row objects
 * @prop `{boolean} isSticky` - Whether the table should be sticky
 * @prop `{boolean} indexed` - Whether the table should be indexed or not
 * @prop `{boolean} loading` - Whether the table is loading
 */
interface TableContainerProps {
  headers: TableHeaderType[];
  rows: TableRowType[];
  isSticky?: boolean;
  indexed?: boolean;
  loading?: boolean;
  loader?: ReactNode;
  maxHeight?: string;
  indexColHeaderColor?: string;
  indexColHeaderBackgroundColor?: string;
  roundedCorners?: boolean;
}

export const TableContainer: FunctionComponent<TableContainerProps> = ({
  headers,
  rows,
  isSticky,
  indexed,
  loading,
  loader,
  maxHeight,
  indexColHeaderColor,
  indexColHeaderBackgroundColor,
  roundedCorners,
}) => {
  const [rowsOrdered, setRowsOrdered] = useState<TableRowType[]>(rows);

  const sortItemsHandler = (
    callback: (
      dataA: TableContentIndvidual[],
      dataB: TableContentIndvidual[]
    ) => number,
    mode: "asc" | "desc" | "none" = "none"
  ) => {
    if (mode === "none") {
      setRowsOrdered([...rows]);
    } else {
      const sortedRows = [...rows].sort((a, b) => {
        if (mode === "asc") return callback(b.columns, a.columns);
        if (mode === "desc") return callback(a.columns, b.columns);
        return 0;
      });
      setRowsOrdered(sortedRows);
    }
  };

  if (!headers || !rows) return <>No data</>;
  if (headers.length === 0) return <>Empty arrays of headers</>;
  if (rows.length >= 1 && headers.length !== rows[0].columns.length) {
    return (
      <>
        Array lengths of headers and columns of rows are different:{" "}
        {headers.length} vs {rows[0].columns.length}
      </>
    );
  }
  if (
    rows.length > 0 &&
    !rows.every((row) => row.columns.length === rows[0].columns.length)
  )
    return <>Not all rows have the same number of columns</>;

  return (
    <div className="table-container" style={{ maxHeight: maxHeight }}>
      <table className={"table-body" + (roundedCorners ? " rounded-corners" : "")}>
        <thead>
          <tr>
            {indexed && (
              <TableHeaderItem
                index={-1}
                classname="table-index-col"
                content={{ Label: "#" }}
                sortActionInject={sortItemsHandler}
                sortable={false}
                align="center"
                isSticky={isSticky}
                color={indexColHeaderColor}
                background={indexColHeaderBackgroundColor}
              />
            )}
            {headers.map((header, index) => (
              <TableHeaderItem
                index={index}
                key={index}
                {...header}
                sortActionInject={sortItemsHandler}
                isSticky={isSticky}
              />
            ))}
            {rows.some(
              (row) => row.actions !== null && (row.actions || []).length > 0
            ) && (
              <TableHeaderItem
                index={-1}
                content={{ Label: "Actions" }}
                sortActionInject={sortItemsHandler}
                hoverEffect={headers[0].hoverEffect}
                iconPosition={headers[0].iconPosition}
                icon={<SlOptionsVertical />}
                color={headers[0].color}
                background={headers[0].background}
                align={headers[0].align}
                tooltip={"Actions"}
                bold={headers[0].bold}
                sortable={false}
                isSticky={isSticky}
              />
            )}
          </tr>
        </thead>
        {loading ? (
          <>{loader ?? <tr>Loading...</tr>}</>
        ) : (
          <tbody>
            {rowsOrdered.length > 0 ? (
              rowsOrdered.map((row, index) => (
                <TableRowItem
                  key={row.id || index}
                  columns={row.columns}
                  actions={row.actions}
                  hoverEffect={row.hoverEffect}
                  hoverType={row.hoverType}
                  indexed={indexed}
                  index={index}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  style={{ textAlign: "center", color: headers[0].color }}
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};
