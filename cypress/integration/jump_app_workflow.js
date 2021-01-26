describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit(Cypress.env('jump_app_url'));

    // Check Jump App header
    cy.contains('Jump App').click();

    // Click on Jump Button
    cy.get('[class^=Home_jumps-actions-button-img]').click();

    // Test Button Result
    cy.contains('/jump - Greetings from ').click();
  });
});
