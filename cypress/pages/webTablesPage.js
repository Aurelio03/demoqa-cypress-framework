const selectors = require('../locators/webTablesLocators');

class WebTablesPage {
  selectors = selectors;

  visit() {
    cy.visit('/webtables');
  }

  addNewRecord(employee) {
    cy.clickElement(this.selectors.addButton);

    cy.get(this.selectors.firstNameInput).type(employee.firstName);
    cy.get(this.selectors.lastNameInput).type(employee.lastName);
    cy.get(this.selectors.emailInput).type(employee.email);
    cy.get(this.selectors.ageInput).type(employee.age);
    cy.get(this.selectors.salaryInput).type(employee.salary);
    cy.get(this.selectors.departmentInput).type(employee.department);

    cy.get(this.selectors.submitButton).click();
  }

  validateRecordExists(email) {
    cy.contains(email)
      .should('be.visible');
  }

  deleteRecord() {
    cy.get(this.selectors.deleteButton)
      .first()
      .click();
  }

  validateRecordDeleted(email) {
    cy.contains(email)
      .should('not.exist');
  }
  
}

module.exports = new WebTablesPage()