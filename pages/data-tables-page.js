import "cypress-xpath";
/// <reference types="Cypress"/>
import { textData,badges } from "../test-data/data-tables-data";
import { dataTablesStep } from "../cypress/steps/data-tables-step";

export class DataTablesPage{

static get getHeading(){
   return dataTablesStep.getUniversalTextCheckViaXpath(textData.headingPath,textData.headingText)
}

static get getMarkedTextinRandomTextSection(){
   return this.getAllTextinPAboveinRandomTextSection.find('mark').should('have.css',"background-color",'rgb(252, 248, 227)').should('be.visible');//?
}

static get getAllTextinPAboveinRandomTextSection(){
return cy.xpath(`//div[@class='traversal-marked-text']//p`).should('be.visible');
}

static get getBlockquote(){
   return  cy.xpath(`//div[@class='traversal-cite-text']/blockquote`).should('be.visible');
}
static get getHeadInsideinRandomTextSection(){
    return this.getBlockquote.find('p').should('be.visible');
}

static get gettextWithLowerOpacityinRandomTextSection(){
    return this.getBlockquote.find('footer').should('not.have','opacity',1).should('be.visible');
}

static get getItalicsTextInFooterinRandomtextSection(){
    return this.gettextWithLowerOpacityinRandomTextSection
    .find(`cite`)
    .should('have.css','font-style','italic')
    .should('be.visible');
}

static get getWholeList(){
    return cy.xpath(`//ul[@class='list-group']/*`).should('be.visible');
}

static get getNavbar(){
    return cy.xpath(`//nav[@aria-label='breadcrumb']/ol`).should('be.visible');
}
static get getFormwithInputs(){
    return cy.xpath(`//form[@id='form-textfield']`).should('be.visible');
}

static get getInputMessageLabel(){
    return cy.xpath(`//form[@id='form-textfield']/p`).should('have.text','Input Text Below:').should('be.visible')
}


static get getlabelFirstName(){
    cy.xpath(`//*[@id="form-textfield"]/text()[1]`)//.should('be.visible');
}

static get getlabelLastName(){
    return  cy.xpath(`//*[@id="form-textfield"]/text()[2]`)//.should('be.visible');
}
static get verifyTextsInInputs(){
  this.getFormwithInputs;
    this.getlabelFirstName;
    this.getlabelLastName;
    this.getInputMessageLabel;
}

static get getSmallTable(){
    cy.xpath(`//h2/../table/*`).should('be.visible');
}

}

export const dataTablesPage=new DataTablesPage();