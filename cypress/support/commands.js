Cypress.Commands.add('clickElement', (selector) => {
  cy.get(selector)
    .scrollIntoView()
    .should('be.visible')
    .click()
})