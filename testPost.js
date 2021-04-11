context('Test Facebook', () => {

  describe('Test Post Status on Facebook', () => {

    it('Post Status on Facebook ', () => {
      cy.visit('https://www.facebook.com/')
      cy.get('[data-testid="royal_email"]').type('{myUser}')
      cy.get('[data-testid="royal_pass"]').type('{myPassword}')
      cy.get('[data-testid="royal_login_button"]').click()
      cy.get('textarea[title*="คุณกำลังคิดอะไรอยู่ Mint"]').type('TEST :)')
      cy.get('[data-testid="react-composer-post-button"]').click()
    })

  })

})