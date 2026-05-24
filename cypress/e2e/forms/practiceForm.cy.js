const practiceFormPage = require('../../pages/practiceFormPage')

describe('Practice Form', () => {

  beforeEach(() => {
    practiceFormPage.visit()
  })

  it('should submit the student form successfully', () => {

    const student = {
      firstName: 'Aurelio',
      lastName: 'Gonzalez',
      email: 'aurelio@test.com',
      mobile: '5512345678'
    }

    practiceFormPage.fillStudentForm(student)

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