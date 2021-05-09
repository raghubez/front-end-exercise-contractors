describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })

    it('should have five comments', () => {
        cy.get('[data-cy=comment]').should('have.length', 5)
    })
  })