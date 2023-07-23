/// <reference types="Cypress"/>
import { Homepage, homepage } from "../../pages/homepage";
import { homepage_sections } from "../../test-data/text";
import { homepageStep } from "../steps/homepage-step";


//homepage.getButtonByName(`Hello, ${test.name}`)

describe("Testing the Home page", () => {
  beforeEach(() => {
    homepageStep.visit();
  });

  it("Checking the amount of stars in the 'Great service' section", () => {
    homepage.getStarsinGreatService;
  });

  it("Checking the amount of stars in the 'Excellent customer service' section", () => {
    homepage.getStarsinExService;
  });

  it("Checking the find out more button on the product page and the existence of the message appearing", () => {
    homepageStep.checkappAppearingMessageElementsExist(); //open+(check-elements)
  });
//
  it("Checking the buttons on the message appearing after click the find out more button", () => {
    homepageStep.checkAppearingMessageButtons();
  });

  //header check
  it("Checking the link in the header", () => {
  homepageStep.checkHeaderLink();
  });

  //function
  it("Checking the slidebar", () => {
    homepageStep.checkSlidebar();
  });

  homepage_sections.forEach((homepage_section) => {
    it(`Checking the visibility of the content below the navbar on the page for the section ${homepage_section.itemName}`, () => {
      homepageStep.checkVisibilityContentBelowNavbar(homepage_section);
    });
  });

  it("Checking the general amount of stars on the page", () => {
    homepageStep.getRightAmountOfStars();
  });
});
