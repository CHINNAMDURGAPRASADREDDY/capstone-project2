describe('Home Page', () => {
  it('should load the home page and display the correct title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('include', 'OrangeHRM');
    cy.get('div[class="orangehrm-login-logo"]').should('be.visible');
  });
});

