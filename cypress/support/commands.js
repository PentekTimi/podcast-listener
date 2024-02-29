// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export function login() {
  Cypress.Commands.add('login', (username, password) => {
    // authTab is currently set to register and not login - will cause the login to fail
    cy.visit('/auth')
    //type in login info to input fields
    cy.get('#email').type(username, { force: true })
    cy.get('#password').type(password, { force: true })
    //get submit btn
    cy.get('#login').click({ force: true })
    cy.url().should('contain', '/')
  })
}
