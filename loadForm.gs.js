function loadInOutForm () {
  // @ts-ignore
  const template = HtmlService.createTemplateFromFile('form')
  const htmlOutput = template.evaluate()
  
  // @ts-ignore
  const ui = SpreadsheetApp.getUi()
  ui.showSidebar(htmlOutput)
}

function loadPartsForm () {
  // @ts-ignore
  const template = HtmlService.createTemplateFromFile('parts')
  const htmlOutput = template.evaluate()
  
  // @ts-ignore
  const ui = SpreadsheetApp.getUi()
  ui.showSidebar(htmlOutput)
}

function createMenu () {
  // @ts-ignore
  const ui = SpreadsheetApp.getUi()
  const menu = ui.createMenu('App')
  
  menu.addItem('Entrada/Saída', 'loadInOutForm')
  menu.addItem('Peças', 'loadPartsForm')
  menu.addToUi()
}

function onOpen () {
  createMenu()
}