describe('Visual Testing Example', () => {
    it('should match the snapshot of the login page', () => {
      // Visit the OrangeHRM demo website
      cy.visit('https://opensource-demo.orangehrmlive.com/');
  
      // Take a full-page screenshot and compare it with the baseline
      cy.matchImageSnapshot({
        failureThreshold: 0.05, // threshold for detecting changes
        failureThresholdType: 'percent', // can be 'percent' or 'pixel'
      });
    });
  });
  