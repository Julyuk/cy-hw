/// <reference types="Cypress"/>
import { Homepage } from "../../pages/homepage";
const homepage = new Homepage();

describe("Testing the Home page", () => {
  it("Checking the amount of stars in the 'Great service' section", () => {
    homepage.visit();
    homepage.getStarsinGreatService();
  });
  it("Checking the amount of stars in the 'Excellent customer service' section", () => {
    homepage.visit();
    homepage.getStarsinExService();
  });
  it("Checking the find out more button on the product page and the existence of the message appearing", () => {
    homepage.visit();
    homepage.getFindOutMoreButton().click();
    homepage.getMessageHead().should("exist");
    homepage.getMessageText().should("exist");
    homepage.getMessageXButton().should("exist");
    homepage.getMessageCloseButton().should("exist");
    homepage.getMessageFindOutMoreButton().should("exist");
  });

  it("Checking the buttons on the message appearing after click the find out more button", () => {
    homepage.visit();
    homepage.getFindOutMoreButton().should("exist");
    homepage.getFindOutMoreButton().click();
    homepage.getMessageXButton().click();
    homepage.getRightArrow().should("exist");
    homepage.getFindOutMoreButton().click();
    homepage.getMessageCloseButton().click();
    homepage.getRightArrow().should("exist");
    homepage.getFindOutMoreButton().click();
    homepage.getMessageFindOutMoreButton().click();
    homepage.getRightArrow().should("exist");
  });

  it("Checking the link in the header", () => {
    homepage.visit();
    homepage.getPOHeader().should("exist");
    homepage.getPOHeader().click();
    homepage.getMyCoursesText().should("exist");
  });

  it("Checking the slidebar", () => {
    homepage.visit();
    homepage.getSlide1().should("exist");
    homepage.getSlide1().should("be.visible");
    homepage.getRightArrow().should("exist");
    homepage.getLeftArrow().should("exist");
    homepage.getRightArrow().click();
    homepage.getSlide2().should("be.visible");
    homepage.getLeftArrow().click();
    homepage.getSlide1().should("be.visible");
    homepage.getLeftArrow().click();
    homepage.getSlide3().should("exist");
  });
  it("Checking the visibility of the content below the navbar on the page", () => {
    homepage.visit();
    homepage.getWhoAreWeHead().should("be.visible");
    homepage.getWhoAreWeText().should("be.visible");
    homepage.getWhyChooseUsHead().should("be.visible");
    homepage.getWhyChooseUsText().should("be.visible");
    homepage.getGreatServiceHead().should("be.visible");
    homepage.getGreatServiceText().should("be.visible");
    homepage.getExServiceHead().should("be.visible");
    homepage.getExServiceText().should("be.visible");
  });
  it("Checking the amount of stars on the page", () => {
    homepage.visit();
  homepage.getStars();
   
  });
});
