/// <reference types="Cypress"/>
import { texts, homepage_sections } from "../test-data/text";
import { navbarLinks } from "../test-data/navbar_links";
import "cypress-xpath";

export class Homepage {
  visit() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }

  //????
  static get getPOHeader() {
    return cy.xpath('//a[@id="nav-title"]').should("exist");
    
    //cy.get(".navbar-header");
  }
static get clickPOHeader() {
  return cy.xpath('//a[@id="nav-title"]').should("exist").click();}


  // //div[@class="container-fluid"]//li/a[contains(text(), "Home")]
  static get getHomeLink() {
    return cy.should("have.text", navbarLinks.homeLink);
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Our Products")]
  static get getOurProductsLink() {
    return cy.should("have.text", navbarLinks.productsLink);
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Contact Us")]
  static get getContactUsLink() {
    return cy.should("have.text", navbarLinks.contactsLink);
  }

// //span[contains(@class,'glyphicon-chevron-left')]
  static get getLeftArrow() {
    return cy.get(".glyphicon-chevron-left").should('be.visible');
  }

  static get clickLeftArrow(){
    return cy.get(".glyphicon-chevron-left").should('be.visible').click();
  }

// //span[contains(@class,'glyphicon-chevron-right')]
  static get getRightArrow() {
    return cy.get(".glyphicon-chevron-right").should('be.visible');
  }

  static get clickRightArrow() {
    return cy.get(".glyphicon-chevron-right").should('be.visible').click();
  }
  //  (//div[@class="carousel-inner"]//img[@id="slide-image-1"])[1]
  static get getSlide1() {
    return cy.get(".carousel-inner").find("img").eq(0).should("exist").should('be.visible');
  }

  // (//div[@class="carousel-inner"]//img[@id="slide-image-1"])[2]
  static get getSlide2() {
    return cy.get(".carousel-inner").find("img").eq(1).should("exist").should('be.visible');
  }

  // //div[@class="carousel-inner"]//img[@id="slide-image-3"]
  static get getSlide3() {
    //return cy.xpath(`//img[@id='slide-image-3']`).should("exist").should('be.visible');

}
  

  

//!!!
// (//div[@class="section-title"]/p[@class="sub-heading"])[1]
  static get getWhoAreWeHead() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }

  // (//div[@class="caption"]/p)[1]
  static get getWhoAreWeText() {
    return cy
      .contains(
        texts.whoAreWeText
      )
      .should(
        "have.text",
        texts.whoAreWeText
      );
  }

  //  //button[@id="button-find-out-more"]
  static get getFindOutMoreButton() {
    return cy.get("button#button-find-out-more").should('be.visible');
  }
  static get clickFindOutMoreButton() {
    return cy.get("button#button-find-out-more").should('be.visible').click();
  }


  //!!
  // (//div[@class="section-title"]/p[@class="sub-heading"])[3]
  static get getWhyChooseUsHead() {
    return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?");
  }

  // (//div[@class="caption"]/p)[3]
  static get getWhyChooseUsText() {
    return cy
      .contains(
        texts.whyChooseUsText)
      .should(
        "have.text",
      texts.whyChooseUsText
      );
  }

  //!!!
  // (//div[@class="section-title"]/p[@class="sub-heading"])[2]
  static get getGreatServiceHead() {
    return cy.contains('GREAT SERVICE!').should("have.text", "GREAT SERVICE!");
  }

   // (//div[@class="caption"]/p)[2]
   static get getGreatServiceText() {
    return cy
      .contains(
        texts.whyChooseUsText
      )
      .should(
        "have.text",
        texts.whyChooseUsText)
  }
// //div[@class="div-star"]     div
// 1 star //span[contains(@class, "glyphicon-star")]
  /*getRightAmountOfStars() {
    // Assuming the stars are contained within a parent element with class below
   return  cy.get("div.div-star")
      .find( "span.glyphicon.glyphicon-star")  // Find all the star elements within the 'great-service' section
      .should("have.length", 10);  // Assert that the count of stars is 10
  }
*/
  //!!!
  // (//div[@class="section-title"]/p[@class="sub-heading"])[4]
  static get getExServiceHead() {
    return cy
      .contains("Excellent Customer Service!");
      // .should("have.text", "Excellent Customer Service!");!!  only one sth
  }

  //    (//div[@class="caption"]//p)[4]
  static get  getExServiceText() {
    return cy
      .contains(
        texts.whyChooseUsText
      )
      .should(
        "have.text",
        texts.whyChooseUsText
      );
  }

  //!!!
  // //h4[@class="modal-title"]
  static get getMessageHead() {
    return cy.get("h4.modal-title").should("exist");
  }

  // //div[@class="modal-body"]/p
  static get  getMessageText() {
    return cy
      .contains(
       texts.homepageAppearingMessage
      )
      .should(
        "have.text",
        texts.homepageAppearingMessage
      ).should("exist");
  }

  ////????
  //  (//div[@class="modal-footer"]//button)[2]
  static get getMessageCloseButton() {
    return cy.contains("button.btn.btn-default", "Close").should("exist");
  }

  static get clickMessageCloseButton() {
    return cy.contains("button.btn.btn-default", "Close").should("exist").click();
  }

  //????
  // //div[@class="modal-header"]//button
  static get getMessageXButton() {
    return cy.get("button.close").should("exist");
  }
  static get clickMessageXButton() {
    return cy.get("button.close").should("exist").click();
  }
  // (//div[@class="modal-footer"]//button)[1]
  //????
  static get getMessageFindOutMoreButton() {
    return cy.contains("button.btn.btn-default", "Find Out More").should("exist");
  }
  static get clickMessageFindOutMoreButton() {
    return cy.contains("button.btn.btn-default", "Find Out More").should("exist").click();
  }
  //????
  // //div[@id="udemy-promo-thumbnail"]//h1
  static get getMyCoursesText() {
    return cy
      .contains("My Courses & Promo Codes")
      .should("have.text", "My Courses & Promo Codes").should("exist");
  }

  // div:    (//div[@class="div-star"])[1]
  // star:   //span[contains(@class, "glyphicon-star")]
  static get getStarsinGreatService(){
    cy.get('.row > div:nth-of-type(2)').find('.glyphicon-star')
  .should('have.length', 5);

  }

  // div:    (//div[@class="div-star"])[2]
  // star:   //span[contains(@class, "glyphicon-star")]
 static get getStarsinExService(){
    return cy.get('.row > div:nth-of-type(4)').find('.glyphicon-star')
  .should('have.length', 5);

  }

  //practice
  /*
  getButtonByName(name){
    return cy.xpath(`//button[contains(text(), 'Find Out')], '${name}'`)
  }
*/

}
export const homepage=new Homepage();