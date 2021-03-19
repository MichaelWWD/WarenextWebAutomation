/// <reference types= "cypress" />

describe(' Regression TestSuite', function()
{



it('Validate that user can navigate to the Shipments page and view the contents successfully', function() {

//Opens the Warenext url
cy.visit('https://app-dev.warenext.ng/')
  

//Imputs Warenext username
cy.get('[name="username"]').type('merchant@test.com')

//Imputs Warenext password
cy.get('[style="position: relative; width: 100%;"] > .input').type('test1234')

//Clicks the Log in button
cy.get('.sc-emmjRN').click()

//Navigates to Shipments 
cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').click()


//Assertions for Shipments page acceptance criteria :
if(
  //All Shipments 
  cy.get('.sc-dphlzf > :nth-child(2)',)
  .select('All Shipments')
  .should('have.value', 'All Shipments')
  .should('be.visible'),

  //Pending Shipments 
  cy.get('.sc-dphlzf > :nth-child(2)',)
  .select('Pending Shipments')
  .should('have.value', 'Pending Shipments')
  .should('be.visible'),

  //In-transit
  cy.get('.sc-dphlzf > :nth-child(2)',)
  .select('In-transit',)
  .should('have.value', 'In-transit')
  .should('be.visible'),

  //Cancelled 
  cy.get('.sc-dphlzf > :nth-child(2)',)
  .select('Cancelled',)
  .should('have.value', 'Cancelled')
  .should('be.visible'),
  
  //Completed 
  cy.get('.sc-dphlzf > :nth-child(2)',)
  .select('Completed')
  .should('have.value', 'Completed')
  .should('be.visible'),

  //Search box 
  cy.get('.sc-ibxdXY > .input',).should('be.visible'),

  //Filter icon 
  cy.get('.sc-iwsKbI > .input',).should('be.visible')
)
{
  cy.log('Test passed')
} 
else {
  cy.log('Test failed')
}

})

})