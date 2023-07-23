import "cypress-xpath";
/// <reference types="Cypress"/>
import {
  AccordionItems,
  AccordionItemsTimeout,
} from "../../test-data/accordion-items";
import {GeneralStep }from "./general-step";


import {AccordionPage} from '../../pages/accordion-page';

export  class AccordionStep extends GeneralStep{ 
  visit() {
    this.openAccordionPage();
    cy.url().should("include", "Accordion");
  }
  verifyHeaderFooterExist() {
    this
      .verifyThatHeaderIsDisplayed()
      .should("have.text", "WebDriver (Accordion Items & Text Appear)");
    AccordionPage.getFooter;
  }
  verifyAppearingTextAfterClickingFirst3Items() {
    AccordionItems.forEach((item) => {
      cy.xpath(item.namePath)
        .should("have.text", item.name)
        .should("be.visible")
        .click();
      cy.xpath(item.textPath)
        .should("have.text", item.text)
        .should("be.visible");
    });
  }
  checkLoadingAndTimeout(item) {
   AccordionPage.getWaitLoadingField;
   AccordionPage.getLoadingField;
    cy.xpath(item.namePath)
      .should("have.text", item.name)
      .should("be.visible")
      .click();
    cy.xpath(item.textPath, { timeout: 5000 }).should("be.visible");
    cy.xpath(item.textPath, { timeout: 10000 }).should("have.text", item.text);
    /*
    cy.clock(); // Enable the ability to control time
    cy.xpath(item.namePath)
      .should("have.text", item.name)
      .should("be.visible")
      .click();
    cy.tick(7000);

    cy.xpath(item.textPath).should("be.visible");
    cy.clock().invoke("restore");
    cy.xpath(item.textPath).should("have.text", item.text); /
    
    */
    // Restore the clock to its default behavior
    // cy.xpath(item.textPath, { timeout: 5000 }).should("be.visible");
    //.should("have.text", item.text);
  }
  checkText() {
    cy.xpath(AccordionItemsTimeout.textPath).should(
      "have.text",
      AccordionItemsTimeout.text
    );
  }
}
export const accordionStep = new AccordionStep();
