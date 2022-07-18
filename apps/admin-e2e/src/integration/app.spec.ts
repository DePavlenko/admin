describe('app', () => {
  it('should redirect unauthorized user to the login page', () => {
    cy.visit('/');
    cy.location('pathname').should('include', '/login');
    cy.contains('Log in').should('exist');
  });
  it('should login user', () => {
    cy.login('testemail@gmail.com', '12345!@#');
    cy.location('pathname').should('eq', '/dashboard');
  });
  it('should display universities table', () => {
    cy.contains('Some universities').should('exist');
    cy.contains('Display name and domain').should('exist');
    cy.contains('Country').should('exist');
    cy.get('table tbody tr').should((t) => expect(t.length).greaterThan(0));
  });
  it('should load new universities on tab click', () => {
    cy.contains('France').click();
    cy.get('table tbody tr td').should((t) => expect(t).contain('France'));
  });
  it('should be able to switch to the settings page', () => {
    cy.contains('Settings').click();
    cy.location('pathname').should('include', '/settings');
  });
});
