/// <reference types="Cypress"/>
import { AccordionItems } from "../test-data/accordion-items";
import { accordionTexts } from "../test-data/text";
import "cypress-xpath";

export class AccordionPage {
  static get getFooter() {
   return cy.xpath(`//div[@class='row']//div[@class='col-lg-12']/p`)
      .should("have.text", accordionTexts.copyright)
      .should("be.visible");
  }
  static get getHead() {
   return cy.xpath(`//div[@id='main-header']/h1`).should(
      "have.text",
      accordionTexts.HeadAccordion
    );
  }
  static get getLoadingField() {
    return cy.xpath(`//div[@id='text-appear-box']/p`,{ timeout: 10000 })
      .should("have.text", "LOADING COMPLETE.")
      .should("be.visible");
  }
  static get getWaitLoadingField() {
    return cy.xpath(`//div[@id='text-appear-box']/p`)
      .should("have.text", "LOADING.. PLEASE WAIT..")
      .should("be.visible");
  }
 
}

export const accordionPage = new AccordionPage();
