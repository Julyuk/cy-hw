/// <reference types="Cypress"/>
import { texts } from "../test-data/text";
import { navbarLinks } from "../test-data/navbar_links";
import { products } from "../test-data/products";
import 'cypress-xpath';

 export class ProductPage {



  //????
  //   //a[@id="nav-title"]
  static get getContactUsHeader() {
    return cy.get(".navbar-header");
  }

  // //a[contains(text(), "Home")]
  static get clickHomeLink() {
    return cy.contains(navbarLinks.homeLink).should("have.text", navbarLinks.homeLink).click();
  }

  //????
  //  (//div[@class="section-title"]/p[@class="sub-heading"])[1]
  static get getHomeText() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?").should('exist');
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Our Products")]
  static get getOurProductsLink() {
    return cy.contains(navbarLinks.productsLink).should("have.text", navbarLinks.productsLink).click();
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Contact Us")]
  static get getContactUsLink() {
    return cy.contains(navbarLinks.contactsLink).should("have.text", navbarLinks.contactsLink).click();
  }

 /* getElementsById(id){
    return cy.get(`#${id}`)
  }*/

  static get getLastName() {
    return cy.get("input[name=last_name]").should("exist");
  }

  //????
  // //h4[@class="modal-title"]
  static get getAppearingMessage() {
    return cy.get("h4.modal-title").should("exist");
  }

  //????
  // //button[@class="close"]
  static get getXClose() {
    return cy.get("button.close");
  }

  static get clickXClose() {
    return cy.get("button.close").click();
  }

  //????
  // (//div[@class="modal-footer"]//button)[1]
  static get getCloseButton() {
    return cy.contains("button.btn.btn-default", "Close");
  }

  static get clickCloseButton() {
    return cy.contains("button.btn.btn-default", "Close").click();
  }

  //????
  // (//div[@class="modal-footer"]//button)[2]
  static get getProceedButton() {
    return cy.contains("button.btn.btn-default", "Proceed");
  }

  static get clickProceedButton() {
    return cy.contains("button.btn.btn-default", "Proceed").click();
  }

  // //div[@class="modal-body"]/p
  static get getMessageContent() {
    return cy.contains(
      "div.modal-body",
      texts.productsAppearingMessage
    );
  }

  
}

export const productPage=new ProductPage();