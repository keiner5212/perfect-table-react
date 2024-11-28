import { TableContainer } from "./components/TableContainer";
import { TableContextProvider } from "./components/TableService";
import { TableHeaderType, TableRowType } from "./components/TableTypes";

function App() {
  const columnas = [
    "ID",
    "Nombre",
    "Edad",
    "Correo Electrónico",
    "Teléfono",
    "Dirección",
    "Fecha de Registro",
    "Estado",
    "Saldo",
    "Última Actividad"
  ];
  
  const headers: TableHeaderType[] = columnas.map((columna, index) => ({
    content: {
      Label: columna,
    },
    index,
    sortable: true,
    align: "center",
    hoverEffect: true,
    background: "#b7b7b7",
    color: "#000",
    bold: false,
    sortMethod: undefined, //defaultSortMethod
    icon: undefined,
    iconPosition: undefined,
    classname: "",
    tooltip: "dice: "+ columna,
  }))

  const filas = [
    ["1", "Juan Pérez", 28, "juan.perez@example.com", "3001234567", "Calle 123", "2023-01-01", "Activo", 1200.50, "2024-11-15"],
    ["2", "María Gómez", 35, "maria.gomez@example.com", "3109876543", "Carrera 45", "2022-10-15", "Inactivo", 850.00, "2024-10-12"],
    ["3", "Carlos López", 42, "carlos.lopez@example.com", "3204567890", "Av. Siempre Viva", "2023-03-20", "Activo", 500.75, "2024-11-01"],
    ["4", "Ana Torres", 29, "ana.torres@example.com", "3156784321", "Diagonal 12", "2023-07-12", "Activo", 2000.00, "2024-11-18"],
    ["5", "Luis Ramírez", 40, "luis.ramirez@example.com", "3123459876", "Transversal 98", "2022-11-25", "Inactivo", 100.25, "2024-09-30"],
    ["6", "Elena Martínez", 24, "elena.martinez@example.com", "3008765432", "Callejón 5", "2023-05-01", "Activo", 300.00, "2024-10-25"],
    ["7", "Pedro Castillo", 50, "pedro.castillo@example.com", "3191237890", "Cra. 78B", "2023-02-14", "Activo", 800.50, "2024-11-11"],
    ["8", "Laura Hernández", 33, "laura.hernandez@example.com", "3104561230", "Av. Caracas", "2023-06-19", "Inactivo", 0.00, "2024-09-10"],
    ["9", "Jorge Morales", 27, "jorge.morales@example.com", "3019876543", "Calle 72", "2023-09-30", "Activo", 1500.00, "2024-11-10"],
    ["10", "Sofía Cruz", 31, "sofia.cruz@example.com", "3187654321", "Carrera 9", "2023-04-25", "Activo", 700.25, "2024-10-05"],
    ["11", "Andrés Rojas", 36, "andres.rojas@example.com", "3006543210", "Diagonal 23", "2023-03-10", "Activo", 1250.50, "2024-11-20"],
    ["12", "Carmen Reyes", 45, "carmen.reyes@example.com", "3112345678", "Av. 68", "2022-12-22", "Inactivo", 350.00, "2024-08-15"],
    ["13", "Miguel Torres", 39, "miguel.torres@example.com", "3224567891", "Cra. 50", "2023-01-18", "Activo", 600.00, "2024-11-17"],
    ["14", "Julia Díaz", 26, "julia.diaz@example.com", "3149871234", "Calle 56", "2023-08-05", "Activo", 1100.75, "2024-11-19"],
    ["15", "Diego Vargas", 32, "diego.vargas@example.com", "3136549872", "Transv. 29", "2023-10-03", "Inactivo", 400.00, "2024-09-12"],
    ["16", "Valentina Ortiz", 21, "valentina.ortiz@example.com", "3165432198", "Calle 19", "2023-11-01", "Activo", 1800.00, "2024-11-15"],
    ["17", "Tomás Medina", 47, "tomas.medina@example.com", "3007654321", "Carrera 22", "2022-09-15", "Inactivo", 900.50, "2024-10-28"],
    ["18", "Gabriela Silva", 30, "gabriela.silva@example.com", "3198765432", "Diagonal 45", "2023-12-05", "Activo", 2200.25, "2024-11-09"],
    ["19", "Rafael Peña", 34, "rafael.pena@example.com", "3121234567", "Cra. 88", "2023-06-01", "Activo", 0.00, "2024-09-05"],
    ["20", "Isabella Acosta", 29, "isabella.acosta@example.com", "3117896543", "Av. Suba", "2023-07-22", "Activo", 1450.00, "2024-11-20"]
  ];
  

  const rows: TableRowType[] = filas.map((fila) => ({
    columns: fila.map((columna) => ({
      content: {
        Label: columna.toString(),
        data: {},
      },
      onClick(event) {
        console.log(event);
      },
      background: "#fff",
      color: "#000",
      align: "left",
      tooltip: columna.toString(),
    })),
    hoverEffect: true,
    hoverType: "individual",
    actions: [],
    id: fila[0].toString(),
  }))

  return (
    <TableContextProvider>
      <TableContainer
        headers={headers}
        rows={rows}
        isSticky={true}
        maxHeight="200px"
        indexed={true}
        loading={false}
        loader={null} 
        // roundedCorners={true}
      />
    </TableContextProvider>
  );
}

export default App;
