import { TableContainer } from "./components/TableContainer";
import { TableContextProvider } from "./components/TableService";
import { TableHeaderType, TableRowType } from "./components/TableTypes";

function App() {
  const headers: TableHeaderType[] = [
    {
      content: {
        Label: "opa lorem",
      },
      sortable: true,
      align: "center",
      hoverEffect: true,
      background: "#b7b7b7",
      color: "#000",
      bold: false,
      icon: null,
      iconPosition: "left",
      classname: "",
      tooltip: "",
    },
    {
      content: {
        Label: "opa2",
      },
      sortable: true,
      align: "center",
      hoverEffect: true,
      background: "#b7b7b7",
      color: "#000",
      bold: false,
      icon: null,
      iconPosition: "left",
      classname: "",
      tooltip: "",
    },
  ];

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
          align: "right",
        },
        {
          content: {
            Label: "yo que se",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "right",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ey carajo ",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ey carajo",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "individual",
      actions: [],
      id: "",
    },
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
          align: "right",
        },
        {
          content: {
            Label: "yo que se",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "right",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ey carajo ",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ey carajo",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "individual",
      actions: [],
      id: "",
    },
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
          align: "right",
        },
        {
          content: {
            Label: "yo que se",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "right",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ey carajo ",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ey carajo",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "individual",
      actions: [],
      id: "",
    },
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
          align: "right",
        },
        {
          content: {
            Label: "yo que se",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "right",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ey carajo ",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ey carajo",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "individual",
      actions: [],
      id: "",
    },
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
          align: "right",
        },
        {
          content: {
            Label: "yo que se",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "right",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ey carajo ",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ey carajo",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "individual",
      actions: [],
      id: "",
    },
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
          align: "right",
        },
        {
          content: {
            Label: "yo que se",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "right",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ey carajo ",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "row",
      actions: [],
      id: "",
    },
    {
      columns: [
        {
          content: {
            Label: "ey carajo",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
        {
          content: {
            Label: "ay caramba",
            data: {},
          },
          onClick(event) {
            console.log(event);
          },
          background: "#fff",
          color: "#000",
          align: "center",
        },
      ],
      hoverEffect: true,
      hoverType: "individual",
      actions: [],
      id: "",
    },
  ];

  return (
    <TableContextProvider>
      <TableContainer
        headers={headers}
        rows={rows}
        isSticky={true}
        maxHeight="200px"
        indexed={true}
        loading={false}
        indexColHeaderColor="#000"
        indexColHeaderBackgroundColor="#b7b7b7"
        roundedCorners={true}
      />
    </TableContextProvider>
  );
}

export default App;
