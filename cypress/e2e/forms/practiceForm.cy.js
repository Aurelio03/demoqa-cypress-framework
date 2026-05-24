const practiceFormPage = require('../../pages/practiceFormPage')
const studentData = require('../../fixtures/studentData.json')

describe('Practice Form', () => {

  beforeEach(() => {
    practiceFormPage.visit()
  })

  it('should submit the student form successfully', () => {

    practiceFormPage.fillStudentForm(studentData.validStudent)

    practiceFormPage.submitForm()

    practiceFormPage.validateSuccessfulSubmission()

  })

  it('should keep the form open when required fields are missing', () => {

    practiceFormPage.submitForm()

    cy.get(practiceFormPage.selectors.successModal)
      .should('not.exist')

    cy.get(practiceFormPage.selectors.firstNameInput)
      .should('have.css', 'border-color')

  })

})