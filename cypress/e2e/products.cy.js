/// <reference types="Cypress"/>
import { ProductPage } from "../../pages/products-page";
const productPage = new ProductPage();
describe("Products page testing", () => {
  it("Check the visibility of the images and sub-headings of the products", () => {
    productPage.visit();
    productPage.getAudioImage().should("be.visible");
    productPage.getSpecialOffersImage().should("be.visible");
    productPage.getCamerasImage().should("be.visible");
    productPage.getNewLaptopsImage().should("be.visible");
    productPage.getUsedLaptopsImage().should("be.visible");
    productPage.getGameConsolesImage().should("be.visible");
    productPage.getComponentsImage().should("be.visible");
    productPage.getDesktopSystemsImage().should("be.visible");

    productPage.getAudioLink().should("be.visible");
    productPage.getSpecialOffersLink().should("be.visible");
    productPage.getCamerasLink().should("be.visible");
    productPage.getNewLaptopsLink().should("be.visible");
    productPage.getUsedLaptopsLink().should("be.visible");
    productPage.getGameConsolesLink().should("be.visible");
    productPage.getComponentsLink().should("be.visible");
    productPage.getDesktopSystemsLink().should("be.visible");
  });
  it("Check the links in the navbar", () => {
    productPage.visit();
    productPage.getHomeLink().click();
    productPage.getHomeText().should("exist");
    productPage.getOurProductsLink().click();
    productPage.getDesktopSystemsLink().should("exist");
    productPage.getOurProductsLink().click();
    productPage.getSpecialOffersLink().should("exist");
    productPage.getContactUsLink().click();
    productPage.getLastName().should("exist");
  });

  it("Check the message  appearing on the product page and the 'x' button on it for after clicking the heading of every item", () => {
    function checkMessage() {
      productPage.getAppearingMessage().should("exist");
      productPage.getXClose().click();
    }

    productPage.visit();

    productPage.getSpecialOffersLink().click();
    checkMessage();

    productPage.getAudioLink().click();
    checkMessage();

    productPage.getCamerasLink().click();
    checkMessage();

    productPage.getNewLaptopsLink().click();
    checkMessage();

    productPage.getUsedLaptopsLink().click();
    checkMessage();

    productPage.getGameConsolesLink().click();
    checkMessage();

    productPage.getComponentsLink().click();
    checkMessage();

    productPage.getDesktopSystemsLink().click();
    checkMessage();
  });

  it("Check the close button and the content of the message which appears after clicking the heading of every item", () => {
    function checkCloseButton() {
      productPage.getMessageContent().should("exist");
      productPage.getCloseButton().click();
    }

    productPage.visit();

    productPage.getSpecialOffersLink().click();
    checkCloseButton();

    productPage.getAudioLink().click();
    checkCloseButton();

    productPage.getCamerasLink().click();
    checkCloseButton();
    productPage.getNewLaptopsLink().click();
    checkCloseButton();

    productPage.getUsedLaptopsLink().click();
    checkCloseButton();

    productPage.getGameConsolesLink().click();
    checkCloseButton();

    productPage.getComponentsLink().click();
    checkCloseButton();

    productPage.getDesktopSystemsLink().click();
    checkCloseButton();
  });

  it("Check the proceed button of the message which appears after clicking the heading of every item", () => {
    function checkProceedButton() {
      productPage.getProceedButton().click();
      productPage.getDesktopSystemsLink().should("exist");
    }

    productPage.visit();

    productPage.getSpecialOffersLink().click();
    checkProceedButton();

    productPage.getAudioLink().click();
    checkProceedButton();

    productPage.getCamerasLink().click();
    checkProceedButton();
    productPage.getNewLaptopsLink().click();
    checkProceedButton();

    productPage.getUsedLaptopsLink().click();
    checkProceedButton();

    productPage.getGameConsolesLink().click();
    checkProceedButton();

    productPage.getComponentsLink().click();
    checkProceedButton();

    productPage.getDesktopSystemsLink().click();
    checkProceedButton();
  });
});
