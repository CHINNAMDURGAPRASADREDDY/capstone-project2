
describe('Invalid Login', () => {
  it('should display an error for invalid login credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});

  