describe('Login and Logout Test', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevents test failure due to uncaught exceptions
      });
    });
  
    it('should log in and log out successfully', () => {
      
      cy.login('Admin', 'admin123');

      cy.url().should('include', '/dashboard');

      cy.logout();

      cy.url().should('include', '/auth/login');

      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
    });
  });
  
  
  