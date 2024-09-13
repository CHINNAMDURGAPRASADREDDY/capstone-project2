describe('Navigation Bar', () => {
    it('should display the navigation bar on all pages', () => {
      cy.login('Admin', 'admin123'); // Custom command
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
      cy.get('nav').should('be.visible');
      cy.get('nav').contains('PIM').should('be.visible');
      cy.get('nav').contains('Leave').should('be.visible');
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  