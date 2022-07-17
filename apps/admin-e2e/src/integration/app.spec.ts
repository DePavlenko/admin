describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    cy.get('h3').contains('Some universities');
  });
});
