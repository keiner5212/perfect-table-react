import { createContext, FunctionComponent, ReactNode, useState } from "react";

export interface TableContextDataType {
  sortedIndex?: number;
}

interface TableContextInterface {
  tableState: TableContextDataType;
  setTableState: (state: TableContextDataType) => void;
}

const TableContext = createContext<TableContextInterface>({
  tableState: {},
  setTableState: () => {},
});

export const TableContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [tableState, setTableState] = useState<TableContextDataType>({
    sortedIndex: undefined,
  });

  return (
    <TableContext.Provider value={{ tableState, setTableState }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
