import{Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";


Given('A user opens the login page',()=>{
    cy.visit('http://magentoqa2.unitedcoder.com/index.php/admin')
})
When('A user enter the username {string}',(username)=>{
   cy.get('#username').type(username)
})
And('A user enter the password {string}',(password)=>{
    cy.get('#login').type(password)


});

