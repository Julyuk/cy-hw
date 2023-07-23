import "cypress-xpath";
/// <reference types="Cypress"/>
import { accordionTexts } from "../../test-data/text";

export  class GeneralStep {
  openContactUs() {
    cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
  }

  openHomePage() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }
  openProductsPage() {
    cy.visit(
      `http://www.webdriveruniversity.com/Page-Object-Model/products.html#`
    );
  }
  openAccordionPage() {
    cy.visit(`http://www.webdriveruniversity.com/Accordion/index.html`);
  }
  openDropdownPage() {
    cy.visit(
      `http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html`
    );
  }

  openHiddenElementspage() {
    cy.visit(`http://www.webdriveruniversity.com/Hidden-Elements/index.html`);
  }

openDataTablespage(){
  cy.visit(`http://www.webdriveruniversity.com/Data-Table/index.html`);
}

  verifyThatHeaderIsDisplayed() {
    return cy.xpath('//a[@id="nav-title"]').should("be.visible");
  }
  verifyThatFooterIsDisplayed(screen) {
    cy.xpath(`//div[@class='row']//div[@class='col-${screen}-12']/p`)
      .should("have.text", accordionTexts.copyright)
      .should("be.visible");
  }
}
//it can store data
export const generalStep = new GeneralStep();
