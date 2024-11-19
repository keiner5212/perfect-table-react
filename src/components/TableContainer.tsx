import { FunctionComponent } from "react";
import "./TableContainer.css";

export interface TableHeaderType {
  name: string;
  classname?: string;
  bold?: boolean;
  onClick?: () => void;
  sortable?: boolean;
  color?: string;
}

export interface TableRowType {
  content: string;
  classname?: string;
  onClick?: () => void;
  bold?: boolean;
  color?: string;
}

interface TableContainerProps {
  headers: TableHeaderType[];
  rows: TableRowType[];
}

export const TableContainer: FunctionComponent<TableContainerProps> = ({
  headers,
  rows,
}) => {
  if (!headers || !rows) return <>No data</>;
  if (headers.length === 0 && rows.length === 0)
    return <>Empty arrays of headers and rows</>;

  return (
    <div className="table-container">
      <table className="table-header">
        <thead></thead>
      </table>
      <table className="table-body">
        <tbody></tbody>
      </table>
    </div>
  );
};
