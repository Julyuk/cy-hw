/// <reference types="Cypress"/>
import 'cypress-xpath';
import { pageObjectTest } from '../../pages/pageobject-test';
describe('Page Object Test', () => {
  it.only('Click the Find Out More Button', () => {
    cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
    //pageObjectTest.getFindOutMoreButton().click();
  pageObjectTest.getIframeDoc().find('button').contains('Find Out More').click();
   //pageObjectTest.getIframeBody();

//  pageObjectTest.getIframeFindOutMoreButton().click();
   
  //  cy.document().then((doc)=>{  
  //   const iframe=doc.querySelector('iframe');  
  //   const iframeDoc=iframe.contentDocument||iframe.contentWindow.document;   
  //  // cy.wrap(iframeDoc).find('button').contains('Find Out More').click({force:true}); 
  //   const findOutMoreButton=iframeDoc.querySelector(`#button-find-out-more`);
  //   cy.wrap(findOutMoreButton).click();
  //  })
   

   //or 
 
//cy.getIframeBody('iframe').find('button').contains('Find Out More').click();
// cy -window
  })

  it('Click on the button with the timeout',()=>{
    cy.visit('http://www.webdriveruniversity.com/Accordion/index.html');


    //adding alias
  cy.contains('LOADING.. PLEASE WAIT..').should('be.visible').as('loading');


   cy.get('@loading').should('exist');
    //cy.wait(7500);- bad way
    cy.contains('LOADING COMPLETE.',{timeout:10000}).should('exist',{timeout:10000});
cy.contains('LOADING.. PLEASE WAIT..').should('not.exist',{timeout:9000});

//cy.get('#manual-testing-accordion').invoke('val').as('manualTesting');

//cy.get('@manualTesting').then((manualTesting)=>{
 // cy.log("loading text is: "+manualTesting);
  //console.log("loading text is: "+manualTesting);
})
 
//alias lets us  to call data that we can save then we can use invoke and work with the data
//it lets us to pass data from one block to another block (ESPECIALLY IF THE DATA CHANGES EVERY TIME)
  })
//alias is a way of passing data between the blocks that is recommended by the cypress itself

//const manualTesting;
//cy.get('#manual-testing-accordion').invoke('text').then((text)=>
//manualTesting=text;)
//via alias we can also work with fixtures