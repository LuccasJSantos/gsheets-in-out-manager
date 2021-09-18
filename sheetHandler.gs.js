function getItens() {
  // @ts-ignore
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName('Itens')

  const range = ws.getRange(2, 1, ws.getLastRow() - 1, 3)

  return range.getValues()
}

function getParts() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName('Peças')

  const range = ws.getRange(2, 1, ws.getLastRow() - 1, 2)

  return range.getValues()
}

function addRow(data) {
  // @ts-ignore
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName(data.sheet)
  ws.appendRow(data.values)
}

function addRows(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName(data.sheet)

  const lastRow = ws.getLastRow() + 1
  const range = ws.getRange(lastRow, 1, data.values.length, 5) // 621

  range.setValues(data.values)
}

function addToPrint(data) {
  // @ts-ignore
  const ss = SpreadsheetApp.getActiveSpreadsheet()

  const printRange = ss.getRangeByName('products_print_range')
  const employeeRange = ss.getRangeByName('employee_print_range')

  const firstRow = printRange.getRow()
  const lastRow = printRange.getLastRow()

  const { amount, description, value, employee } = data.values

  // set row
  for (let i = 1; i <= lastRow - firstRow + 1; i++) {
    const amountCell = printRange.getCell(i, 1)
    const descriptionCell = printRange.getCell(i, 2)
    const valueCell = printRange.getCell(i, 3)
    if (descriptionCell.getValue() !== '') continue

    amountCell.setValue(amount)
    descriptionCell.setValue(description)
    valueCell.setValue(value)

    break
  }

  // set employee
  employeeRange
    .getCell(1, 1)
    .setValue(employee)
}
