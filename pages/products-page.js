/// <reference types="Cypress"/>
import { texts } from "../test-data/text";
import { navbarLinks } from "../test-data/navbar_links";
import { products } from "../test-data/products";
import 'cypress-xpath';

 export class ProductPage {
  visit() {
    cy.visit(
      "http://www.webdriveruniversity.com/Page-Object-Model/products.html#"
    );
  }

  getAnySelector(selector){
    return cy.get(selector)
  }

  //????
  //   //a[@id="nav-title"]
  getContactUsHeader() {
    return cy.get(".navbar-header");
  }

  // //a[contains(text(), "Home")]
  getHomeLink() {
    return cy.contains(navbarLinks.homeLink).should("have.text", navbarLinks.homeLink);
  }

  //????
  //  (//div[@class="section-title"]/p[@class="sub-heading"])[1]
  getHomeText() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Our Products")]
  getOurProductsLink() {
    return cy.contains(navbarLinks.productsLink).should("have.text", navbarLinks.productsLink);
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Contact Us")]
  getContactUsLink() {
    return cy.contains(navbarLinks.contactsLink).should("have.text", navbarLinks.contactsLink);
  }

 /* getElementsById(id){
    return cy.get(`#${id}`)
  }*/

  getLastName() {
    return cy.get("input[name=last_name]");
  }

  //????
  // //h4[@class="modal-title"]
  getAppearingMessage() {
    return cy.get("h4.modal-title");
  }

  //????
  // //button[@class="close"]
  getXClose() {
    return cy.get("button.close");
  }

  //????
  // (//div[@class="modal-footer"]//button)[1]
  getCloseButton() {
    return cy.contains("button.btn.btn-default", "Proceed");
  }

  //????
  // (//div[@class="modal-footer"]//button)[2]
  getProceedButton() {
    return cy.contains("button.btn.btn-default", "Close");
  }

  // //div[@class="modal-body"]/p
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

