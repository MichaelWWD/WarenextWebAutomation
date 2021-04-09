/// <reference types= "cypress" />

describe(' Regression TestSuite', function()
{
it('Validate that a user can sign up as a Warenext customer successfully', function() {

//a function that accepts an email domain and email name length as input to generate a random email
function getRandomEmail(mail_domain,length)
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + mail_domain;
}
// Function generates 8 digits of random numbers 
function getRandomPhone()
{
    var text = "";
    var possible = "0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


//Opens the Warenext Sign up page
cy.visit('https://app-dev.warenext.ng/join')
  
// Clicks sign up as a Customer 
cy.get(':nth-child(1) > a > .sc-hAcydR').click()

cy.wait(2000)
// Enters first Name 
cy.get('.form > :nth-child(2) > :nth-child(1) > .input').type('John ')

// Enters last Name 
cy.get(':nth-child(2) > :nth-child(2) > .input').type('Doe')

// Enters an Email 
cy.get(':nth-child(3) > :nth-child(1) > .input').type(getRandomEmail('@gmail.com',8))

// Enters a phone number 
cy.get(':nth-child(3) > :nth-child(2) > .input').type('80'+ getRandomPhone())

//Selects a location 
cy.get(':nth-child(4) > :nth-child(1) > .input').select('Nigeria')

//Enters password, repeats password
cy.get(':nth-child(1) > div > .input').type('Test1234')
cy.get(':nth-child(5) > :nth-child(2) > .input').type('Test1234')

//Selects an option under 'How did you hear about us'
cy.get('[name="source"]').select('Other')

//Clicks sign up button
cy.get('.sc-emmjRN').click()


//Assertions for a successful customer sign up process
if(
    //Checks for success message 
    cy.get('.Toastify__toast-body').should('be.visible'),

    //Checks for Customer's profile name 
    cy.get('.eynJfY > .sc-iwsKbI > .sc-gzVnrw').should('be.visible')
)
{
  cy.log('Test passed')
} 
else {
  cy.log('Test failed')
}


})

})