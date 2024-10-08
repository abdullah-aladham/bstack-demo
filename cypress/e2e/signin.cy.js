describe('Sign in TestSuite',()=>{
    it('logs in with demouser account',()=>{
        cy.login("demouser","testingisfun99")
    })
})