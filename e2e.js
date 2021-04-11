context('E2E_001 Verify that user can apply "IPD/OPD" by selected plan: "Salary man" success', () => {

  describe('To verify functional of  "IPD/OPD" by selected plan: "Salary man" must be working fine as expected', () => {

    it('1). open Rabbit Finance website then direct to "Insurance" page', () => {
      cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions')
    })

    it('2). select Insurance', () => {
      cy.get('input[id="product_category-ipdOpd"]').click({force: true})
      cy.get('input[id="product_ipdopd_subcategory-salaryMan"]').click({force: true})
    })

    it('3). input Personal information', () => {
      cy.get('input[name="customer_phone"]').type('0947586362')
      cy.get('#customer_phone > :nth-child(2) > .col-12 > .btn').click()

      cy.get('input[name="customer_first_name"]').type('thitichaya_a')
      cy.get('input[name="customer_last_name"]').type('changsinkha_a')
      cy.get(':nth-child(3) > .col-12 > .btn').click()

      cy.get('input[id="email"]').type('c.thitichaya_a@hotmail.com')
      cy.get('#customer_email > :nth-child(2) > .col-12 > .btn').click()

      cy.get('input[id="customer_gender-F"]').click({force: true})
      cy.get('input[name="customer_dob"]').type('22/03/1992')
      cy.get('#customer_dob > :nth-child(2) > .col-12 > .btn').click()
    })

    it('4). clicking on "Yes, I accept" button for accept privacy policy and terms of use', () => {
      cy.get('input[id="tc-1"]').click({force: true})
    })

    it('5). clicking on "Show Quotes" button for submit and redirect to Health Insurance Quotes page', () => {
      cy.get('button[id="btn-marketing-consent"]').click()
      cy.get("body").then($body => {
        if ($body.find('div[class="SummaryCard_summary-card"]').length > 0) {
            //evaluates as true
        }
    })
    })

  })

})