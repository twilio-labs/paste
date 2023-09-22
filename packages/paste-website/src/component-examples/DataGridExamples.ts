export const TableHeaderData = ["First Name", "Last Name", "Country", "Email", "Phone"];
export const TableBodyData = [
  ["Lottie", "Hintz", "Republic of Korea", "John.Zulauf@gmail.com", "1-652-451-4330"],
  [
    "Paige",
    "Kshlerin",
    "British Indian Ocean Territory (Chagos Archipelago)",
    "Natalie.Klein@yahoo.com",
    "668.667.3238 x27714",
  ],
  ["Kadin", "Will", "Haiti", "Ora_Bartoletti@yahoo.com", "446.666.1937 x759"],
  ["Troy", "McDermott", "Qatar", "Richmond34@hotmail.com", "(209) 774-9227 x5109"],
  ["Devyn", "Weimann", "Congo", "Matilde86@gmail.com", "652-441-1766 x377"],
  ["Triston", "Dickinson", "French Southern Territories", "Violette.Kihn97@yahoo.com", "939.571.3994"],
  ["Maeve", "West", "Norway", "Mittie80@yahoo.com", "395.983.4598 x8023"],
  ["Tracey", "Farrell", "Macao", "Barrett72@yahoo.com", "1-805-781-6325"],
  ["Jovanny", "Mante", "Pitcairn Islands", "Fausto_Vandervort15@gmail.com", "(629) 375-5743 x726"],
  ["Fritz", "Bashirian", "France", "Magali.Harber@hotmail.com", "1-229-278-7567"],
];

export const standardDataGrid = `
const StandardDataGrid = ({element = 'DATA_GRID'}) => {
  return (
    <DataGrid aria-label="User information table" striped>
      <DataGridHead >
        <DataGridRow >
          <DataGridHeader>{TableHeaderData[0]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[1]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[2]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[3]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[4]}</DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {TableBodyData.map((row, rowIndex) => (
          <DataGridRow key={"row-" + rowIndex}>
            {row.map((col, colIndex) => (
              <DataGridCell key={"cell-" + rowIndex + "-" + colIndex}>
                {col}
              </DataGridCell>
            ))}
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
};

render(
  <StandardDataGrid />
)
`.trim();
