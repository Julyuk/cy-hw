/// <reference types="Cypress"/>
import { texts } from "../test-data/text";
import { navbarLinks } from "../test-data/navbar_links";
import { products } from "../test-data/products";


 export class ProductPage {
  visit() {
    cy.visit(
      "http://www.webdriveruniversity.com/Page-Object-Model/products.html#"
    );
  }

  getAnySelector(selector){
    return cy.get(selector)
  }

  getContactUsHeader() {
    return cy.get(".navbar-header");
  }
  getHomeLink() {
    return cy.contains(navbarLinks.homeLink).should("have.text", navbarLinks.homeLink);
  }
  getHomeText() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }
  getOurProductsLink() {
    return cy.contains(navbarLinks.productsLink).should("have.text", navbarLinks.productsLink);
  }
  getContactUsLink() {
    return cy.contains(navbarLinks.contactsLink).should("have.text", navbarLinks.contactsLink);
  }

 /* getElementsById(id){
    return cy.get(`#${id}`)
  }*/

  getLastName() {
    return cy.get("input[name=last_name]");
  }
  getAppearingMessage() {
    return cy.get("h4.modal-title");
  }
  getXClose() {
    return cy.get("button.close");
  }
  getCloseButton() {
    return cy.contains("button.btn.btn-default", "Proceed");
  }
  getProceedButton() {
    return cy.contains("button.btn.btn-default", "Close");
  }
  getMessageContent() {
    return cy.contains(
      "div.modal-body",
      texts.productsAppearingMessage
    );
  }

  openAllProducts(product){
    this.getAnySelector(product.imageDiv).should('be.visible');
    this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText)
    
  }

  checkCloseButton(product){
    this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText).click();
    this.getCloseButton().click();
  }

  checkAppearingMessage(product){
    this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText).click();
    this.getAppearingMessage().should("exist");
    this.getXClose().click();
  }

checkProceedButton(product) {
  this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText).click();
  this.getProceedButton().click();
    this.getAnySelector(product.linkDiv).should("exist");
  }

  checkLinksInNavbar(product){
    this.getHomeLink().click();
    this.getHomeText().should("exist");
   this.getOurProductsLink().click();
    this.getAnySelector(product).should("be.visible");
    this.getOurProductsLink().click();
    this.getAnySelector(product).should("be.visible");
   this.getContactUsLink().click();
    this.getLastName().should("exist");
  }
  
}

