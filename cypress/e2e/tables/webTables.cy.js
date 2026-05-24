const webTablesPage = require('../../pages/webTablesPage')
const testData = require('../../fixtures/studentData.json')

describe('Web Tables', () => {

  beforeEach(() => {
    webTablesPage.visit()
  })

  it('should add a new record successfully', () => {

    webTablesPage.addNewRecord(testData.employeeData)

    webTablesPage.validateRecordExists(testData.employeeData.email)

  })

  
  it('should delete an existing record', () => {

    webTablesPage.deleteRecord()

    webTablesPage.validateRecordDeleted('cierra@example.com')

  })
  
})