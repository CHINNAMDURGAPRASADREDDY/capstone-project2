describe('Responsive Design', () => {
    const sizes = [[320, 480], [768, 1024], [1280, 800]]; 

    sizes.forEach(size => {
      it(`should display correctly`, () => {
        cy.viewport(size[0], size[1]);
        cy.login('Admin', 'admin123'); 
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('header').should('be.visible');
         
      });
    });
  });
  
  