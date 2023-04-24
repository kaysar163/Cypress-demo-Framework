const { describe } = require("mocha");

describe('Login Test',function(){
    it('Success login',()  =>{
        cy.visit ('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();

    });
})