const selectors = require('../locators/practiceFormLocators');

class PracticeFormPage {
  selectors = selectors;

  visit() {
    cy.visit('/automation-practice-form');
  }

  fillStudentForm(student) {
    cy.get(this.selectors.firstNameInput).type(student.firstName);
    cy.get(this.selectors.lastNameInput).type(student.lastName);
    cy.get(this.selectors.emailInput).type(student.email);
    cy.get(this.selectors.maleGenderRadio).click();
    cy.get(this.selectors.mobileInput).type(student.mobile);
  }

  submitForm() {
    cy.get(this.selectors.submitButton).click();
  }

  validateSuccessfulSubmission() {
    cy.get(this.selectors.successModal)
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form');
  }
}

module.exports = new PracticeFormPage()