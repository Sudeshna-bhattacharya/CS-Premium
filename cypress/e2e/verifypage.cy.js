/// <reference types = "cypress" />
it('visit the client share page', function(){
    cy.visit('https://staging.myclientshare.com/login')
})





it('login to client share',function(){
    cy.get('[name=email] ').type('sudeshna@founderandlightning.com');
    cy.get('[name=password]').type('Test@1234!');
    cy.get('button[type="button"]').click()

    

    
})

