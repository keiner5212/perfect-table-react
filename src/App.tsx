import { TableContainer } from "./components/TableContainer"
import { TableHeaderType, TableRowType } from "./components/TableTypes"

function App() {
  const headers: TableHeaderType[] = [
    {
      content: {
        Label: "opa",
      },
      sortable: true,
      align: "left",
      hoverEffect: true,
      background: "#fff",
      color: "#000",
      bold: false,
      icon: null,
      iconPosition: "left",
      classname: "",
      tooltip: "",
    }
  ]

  const rows: TableRowType[] = [
    {
      columns: [
        {
          content: {
            Label: "opa",
            data: {},
          },
          onClick(event) {
              console.log(event);
          },
          background: "#fff",
          color: "#000",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    }
  ]

  return (
    <>
      <div className="table-wrapper">
        <TableContainer
          headers={headers}
          rows={rows}
          indexed={true}
          isSticky={true}
          loading={false}
         />
      </div>
    </>
  )
}

export default App
