describe("Reviewing cy.task()",()=>{
    it("Cy Task",()=>{
        
        //event name, argument
        cy.task("mylog","hello master").then((message)=>cy.log(message));
    });
    it('Counting number of files',()=>{
        cy.task('countFiles', 'cypress/downloads').then((count) => {
            cy.log(count);
            expect(count).to.be.eq(0);
         });
    });
    it("saving an HREF",()=>{
        cy.task('setHref', "https://www.anotherwebapp.com")
    })
    it("Get the saved HREF",()=>{
        cy.task('getHref').then((href) => {
            // visit non same-origin url https://www.anotherwebapp.com
            cy.log(href)
    });
});
});

