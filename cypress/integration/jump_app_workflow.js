describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit(
      'https://front-javascript-jump-app-dev.apps.acidonpe.sandbox1736.opentlc.com'
    );

    // Check Jump App header
    cy.contains('Jump App').click();

    // Click on Jump Button
    cy.get('[class^=Home_jumps-actions-button-img]').click();

    // Test Button Result
    cy.contains('/jump - Greetings from ').click();
  });
});
