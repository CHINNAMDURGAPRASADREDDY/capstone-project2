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
// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Cypress.Commands.add('logout', () => {
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
  });

  import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// Add the visual testing command
addMatchImageSnapshotCommand();

  