
/// <reference types="cypress" />

context('Login Test', () => {
    beforeEach(() => {
      //cy.visit('https://www.saucedemo.com')
      cy.visit('http://magentoqa2.unitedcoder.com/index.php/admin')
    })
  it('Success login',()  =>{
        cy.get('#username').type('catalogmanager')
        cy.get('#login').type('automation123!')
        cy.get('.form-button').click();
       // cy.url().should('contains','/inventory.html/')
    });

    });



