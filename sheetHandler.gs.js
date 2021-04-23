function getItens() {
  // @ts-ignore
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName('Itens')
  
  return ws.getRange(2, 1, ws.getLastRow() - 1, 3).getValues()
}

function addRow(data) {
  // @ts-ignore
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName(data.sheet)
  ws.appendRow(data.values)
}

function addToPrint(data) {
  // @ts-ignore
  const ss = SpreadsheetApp.getActiveSpreadsheet()

  const printRange = ss.getRangeByName('products_print_range')
  const employeeRange = ss.getRangeByName('employee_print_range')

  const firstRow = printRange.getRow()
  const lastRow = printRange.getLastRow()

  // set row
  for (let i = 1; i <= lastRow - firstRow + 1; i++) {
    const amountCell = printRange.getCell(i, 1)
    const descriptionCell = printRange.getCell(i, 2)
    const valueCell = printRange.getCell(i, 3)
    if (descriptionCell.getValue() !== '') continue
    
    amountCell.setValue(1)
    descriptionCell.setValue(data.values.description)
    valueCell.setValue(data.values.value)

    break
  }

  // set employee
  employeeRange
    .getCell(1, 1)
    .setValue(data.values.employee)
}
