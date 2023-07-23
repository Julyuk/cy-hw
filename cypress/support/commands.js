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

//custom commands

// Cypress.Commands.add('getIframeBody', (locator)=>{
// cy.log('getIframeBody');

//     return cy
//     .get(locator,{log:false})
//     .its('0.contentDocument')
//     .should('exist')
//     .its('body')
//     .should('not.be.undefined')
//     .then(cy.wrap,{log:false});
// })