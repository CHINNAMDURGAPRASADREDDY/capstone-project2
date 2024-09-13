describe('Add Employee', () => {
    it('should add a new employee successfully', () => {
      cy.login('Admin', 'admin123'); 
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('button[type="submit"]').click();
      cy.get('.oxd-toast-content').should('contain', 'Success');
    });
  });
  