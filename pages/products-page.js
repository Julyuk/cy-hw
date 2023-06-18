/// <reference types="Cypress"/>

export class ProductPage {
  visit() {
    cy.visit(
      "http://www.webdriveruniversity.com/Page-Object-Model/products.html#"
    );
  }
  getContactUsHeader() {
    return cy.get(".navbar-header");
  }
  getHomeLink() {
    return cy.contains("Home").should("have.text", "Home");
  }
  getHomeText() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }
  getOurProductsLink() {
    return cy.contains("Our Products").should("have.text", "Our Products");
  }
  getContactUsLink() {
    return cy.contains("Contact Us").should("have.text", "Contact Us");
  }
  getSpecialOffersLink() {
    return cy.contains("div#container-special-offers", "Special Offers");
  }
  getSpecialOffersImage() {
    return cy.get("img#amp-img");
  }
  getCamerasLink() {
    return cy.contains("div#container-product1", "Cameras");
  }
  getCamerasImage() {
    return cy.get("img#camera-img");
  }
  getNewLaptopsLink() {
    return cy.contains("div#container-product2", "New Laptops");
  }
  getNewLaptopsImage() {
    return cy.get("img#laptop1");
  }

  getUsedLaptopsLink() {
    return cy.contains("div#container-product3", "Used Laptops");
  }
  getUsedLaptopsImage() {
    return cy.get("img#laptop2");
  }

  getGameConsolesLink() {
    return cy.contains("div#container-product4", "Game Consoles");
  }
  getGameConsolesImage() {
    return cy.get("img#nintendo");
  }

  getComponentsLink() {
    return cy.contains("div#container-product5", "Components");
  }
  getComponentsImage() {
    return cy.get("img#graphic-card");
  }

  getDesktopSystemsLink() {
    return cy.contains("div#container-product6", "Desktop Systems");
  }
  getDesktopSystemsImage() {
    return cy.get("img#computer");
  }

  getAudioLink() {
    return cy.contains("div#container-product7", "Audio");
  }
  getAudioImage() {
    return cy.get("img#boombox");
  }
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
      "Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket: NEWCUSTOMER773322 ."
    );
  }
}
