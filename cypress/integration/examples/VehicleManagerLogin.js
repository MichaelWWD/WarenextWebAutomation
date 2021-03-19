/// <reference types= "cypress" />

describe(' Regression TestSuite', function()
{



it('Validate that Vehicle Manager  can login to Warenext successfully', function() {

//Opens the Warenext url
cy.visit('https://app-dev.warenext.ng/')
  

//Imputs Warenext Vehicle Manager username
cy.get('[name="username"]').type('vehiclemanager@warenext.com')

//Imputs Warenext Vehicle Manager  password
cy.get('[style="position: relative; width: 100%;"] > .input').type('test1234')

//Clicks the Log in button
cy.get('.sc-emmjRN').click()


//Assertions for warenext Vehicle Manager login AC :
if(
  //Dashboard 
  cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),

  //Shipments 
  cy.get(':nth-child(2) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),

  //Drivers
  cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),

  //Vehicles
  cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),

  //Pricing sheets
  cy.get(':nth-child(5) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),

  //Delivery Zones
  cy.get(':nth-child(6) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  

  // Add New Vehicle   Steps: (Click Vehicles --> Add New Vehicle )
  cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').click()
  .get('.kCRkdH')
  .contains('Add New Vehicle')
  .should('be.visible'),


  // Add New Driver   Steps: (Click Drivers --> Add New Driver)
  cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').click()
  .get('.kCRkdH')
  .contains('Add New Driver')
  .should('be.visible'),


  //Add New Vehicle    Steps:(Click Dashboard --> under Quick Tasks --> Add New Vehicle )
  cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').click()
  .get('.sc-cEvuZC > :nth-child(2) > .sc-gzVnrw')
  .contains('Add New Vehicle')
  .should('exist'),

  //Add New Driver   Steps:(Click Dashboard --> under Quick Tasks --> Add New Driver )
  cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').click()
  .get(':nth-child(3) > .sc-gzVnrw')
  .contains('Add New Driver')
  .should('exist'),

  //Manage Users    Steps:(Click Dashboard --> under Quick Tasks --> Manage Users)
  cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').click()
  .get(':nth-child(4) > .sc-gzVnrw')
  .contains('Manage Users')
  .should('exist'),


  //Vehicle Manager image
  cy.get('.sc-dUjcNx').should('be.visible'),

  //Vehicle Manager user name
  cy.get('.fRGiWk > .sc-gzVnrw').should('be.visible'),


  //Settings
  cy.get(':nth-child(7) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible')
)
{
  cy.log('Test passed')
} 
else {
  cy.log('Test failed')
}


})

})