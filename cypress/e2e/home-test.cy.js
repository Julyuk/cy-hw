/// <reference types="Cypress"/>
import { Homepage } from "../../pages/homepage";
import { homepage_sections } from "../../test-data/text";
const homepage = new Homepage();

describe("Testing the Home page", () => {
  beforeEach(()=>{
    homepage.visit();
  })

  it("Checking the amount of stars in the 'Great service' section", () => {
    homepage.getStarsinGreatService();
  });

  it("Checking the amount of stars in the 'Excellent customer service' section", () => {
    homepage.getStarsinExService();
  });

  it("Checking the find out more button on the product page and the existence of the message appearing", () => {
    homepage.checkappAppearingMessageElementsExist();//open+(check-elements)
  });

  it("Checking the buttons on the message appearing after click the find out more button", () => {
    homepage.checkAppearingMessageButtons();
  });

  //header check
  it("Checking the link in the header", () => {
    homepage.getPOHeader().should("exist");
    homepage.getPOHeader().click();
    homepage.getMyCoursesText().should("exist");
  });

  //function
  it("Checking the slidebar", () => {
   homepage.checkSlidebar();
  });

  homepage_sections.forEach(homepage_section=>{
    it(`Checking the visibility of the content below the navbar on the page for the section ${homepage_section.itemName}`,()=>{
      homepage.checkVisibilityContentBelowNavbar(homepage_section)
    })
  })
 
  it("Checking the general amount of stars on the page", () => {
  homepage.getStars();
  });
});
