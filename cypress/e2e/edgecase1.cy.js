describe('Form Validation Edge Cases', () => {
    it('should display an error when submitting the leave application form with missing fields', () => {
      cy.login('Admin', 'admin123'); 
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave');
      cy.get('button[type="submit"]').click();
      cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain', 'Required');
    });
  });
  
  