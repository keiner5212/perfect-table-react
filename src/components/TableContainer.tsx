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
}

export const TableContainer: FunctionComponent<TableContainerProps> = ({
  headers,
  rows,
  isSticky,
  indexed,
  loading,
  loader,
}) => {
  const [rowsOrdered, setRowsOrdered] = useState<TableRowType[]>(rows);

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

  const sortItemsHandler = (
    callback: (
      dataA: TableContentIndvidual[],
      dataB: TableContentIndvidual[]
    ) => number,
    mode: "asc" | "desc" | "none" = "none"
  ) => {
    if (mode === "none") setRowsOrdered(rows);
    if (mode === "asc")
      setRowsOrdered(rows.sort((a, b) => callback(b.columns, a.columns)));
    if (mode === "desc")
      setRowsOrdered(rows.sort((a, b) => callback(a.columns, b.columns)));
  };

  return (
    <div className="table-container">
      {isSticky && (
        <table className="table-header">
          <thead>
            <tr>
              {indexed && (
                <TableHeaderItem
                  index={-1}
                  content={{ Label: "#" }}
                  sortActionInject={sortItemsHandler}
                  sortable={false}
                />
              )}
              {headers.map((header, index) => (
                <TableHeaderItem
                  index={index}
                  key={index}
                  {...header}
                  sortActionInject={sortItemsHandler}
                />
              ))}
              {rows.some((row) => row.actions !== null) && (
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
                />
              )}
            </tr>
          </thead>
        </table>
      )}
      <table className="table-body">
        {!isSticky && (
          <thead>
            <tr>
              {indexed && (
                <TableHeaderItem
                  index={-1}
                  content={{ Label: "#" }}
                  sortActionInject={sortItemsHandler}
                  sortable={false}
                />
              )}
              {headers.map((header, index) => (
                <TableHeaderItem
                  index={index}
                  key={index}
                  {...header}
                  sortActionInject={sortItemsHandler}
                />
              ))}
              {rows.some((row) => row.actions !== null) && (
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
                />
              )}
            </tr>
          </thead>
        )}
        {loading ? (
          <>{loader ?? <tr>Loading...</tr>}</>
        ) : (
          <tbody>
            {rows.length > 0 ? (
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
                <td colSpan={headers.length}>No data</td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};
