import { FunctionComponent } from "react";
import { TableHeaderType } from "./TableContainer";
import "./TableHeaderItem.css"
 
const TableHeaderItem: FunctionComponent<TableHeaderType> = ({
    name,
    classname,
    bold,
    onClick,
    sortable,
    color
}) => {
    return ( <th></th> );
}
 
export default TableHeaderItem;