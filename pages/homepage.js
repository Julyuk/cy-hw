/// <reference types="Cypress"/>
import { texts, homepage_sections } from "../test-data/text";
import { navbarLinks } from "../test-data/navbar_links";
import "cypress-xpath";

export class Homepage {
  visit() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }

  //????
  getPOHeader() {
    return cy.xpath('//a[@id="nav-title"]')
    
    //cy.get(".navbar-header");
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Home")]
  getHomeLink() {
    return cy.should("have.text", navbarLinks.homeLink);
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Our Products")]
  getOurProductsLink() {
    return cy.should("have.text", navbarLinks.productsLink);
  }

  // //div[@class="container-fluid"]//li/a[contains(text(), "Contact Us")]
  getContactUsLink() {
    return cy.should("have.text", navbarLinks.contactsLink);
  }

// //span[contains(@class,'glyphicon-chevron-left')]
  getLeftArrow() {
    return cy.get(".glyphicon-chevron-left");
  }

// //span[contains(@class,'glyphicon-chevron-right')]
  getRightArrow() {
    return cy.get(".glyphicon-chevron-right");
  }

  //  (//div[@class="carousel-inner"]//img[@id="slide-image-1"])[1]
  getSlide1() {
    return cy.get(".carousel-inner").find("img").eq(0);
  }

  // (//div[@class="carousel-inner"]//img[@id="slide-image-1"])[2]
  getSlide2() {
    return cy.get(".carousel-inner").find("img").eq(1);
  }

  // //div[@class="carousel-inner"]//img[@id="slide-image-3"]
  getSlide3() {
    return cy.get(".carousel-inner").find("img").eq(2);
  }

  getAnySelector(selector){
    return cy.get(selector)
  }

//!!!
// (//div[@class="section-title"]/p[@class="sub-heading"])[1]
  getWhoAreWeHead() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }

  // (//div[@class="caption"]/p)[1]
  getWhoAreWeText() {
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
  getFindOutMoreButton() {
    return cy.get("button#button-find-out-more");
  }

  //!!
  // (//div[@class="section-title"]/p[@class="sub-heading"])[3]
  getWhyChooseUsHead() {
    return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?");
  }

  // (//div[@class="caption"]/p)[3]
  getWhyChooseUsText() {
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
  getGreatServiceHead() {
    return cy.contains('GREAT SERVICE!').should("have.text", "GREAT SERVICE!");
  }

   // (//div[@class="caption"]/p)[2]
  getGreatServiceText() {
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
  getStars() {
    // Assuming the stars are contained within a parent element with class below
   return  cy.get("div.div-star")
      .find( "span.glyphicon.glyphicon-star")  // Find all the star elements within the 'great-service' section
      .should("have.length", 10);  // Assert that the count of stars is 10
  }

  //!!!
  // (//div[@class="section-title"]/p[@class="sub-heading"])[4]
  getExServiceHead() {
    return cy
      .contains("Excellent Customer Service!");
      // .should("have.text", "Excellent Customer Service!");!!  only one sth
  }

  //    (//div[@class="caption"]//p)[4]
  getExServiceText() {
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
  getMessageHead() {
    return cy.get("h4.modal-title");
  }

  // //div[@class="modal-body"]/p
  getMessageText() {
    return cy
      .contains(
       texts.homepageAppearingMessage
      )
      .should(
        "have.text",
        texts.homepageAppearingMessage
      );
  }

  ////????
  //  (//div[@class="modal-footer"]//button)[2]
  getMessageCloseButton() {
    return cy.contains("button.btn.btn-default", "Close");
  }



  //????
  // //div[@class="modal-header"]//button
  getMessageXButton() {
    return cy.get("button.close");
  }

  // (//div[@class="modal-footer"]//button)[1]
  //????
  getMessageFindOutMoreButton() {
    return cy.contains("button.btn.btn-default", "Find Out More");
  }

  //????
  // //div[@id="udemy-promo-thumbnail"]//h1
  getMyCoursesText() {
    return cy
      .contains("My Courses & Promo Codes")
      .should("have.text", "My Courses & Promo Codes");
  }

  // div:    (//div[@class="div-star"])[1]
  // star:   //span[contains(@class, "glyphicon-star")]
  getStarsinGreatService(){
    cy.get('.row > div:nth-of-type(2)').find('.glyphicon-star')
  .should('have.length', 5);

  }

  // div:    (//div[@class="div-star"])[2]
  // star:   //span[contains(@class, "glyphicon-star")]
  getStarsinExService(){
    cy.get('.row > div:nth-of-type(4)').find('.glyphicon-star')
  .should('have.length', 5);

  }

  //practice
  /*
  getButtonByName(name){
    return cy.xpath(`//button[contains(text(), 'Find Out')], '${name}'`)
  }
*/

checkappAppearingMessageElementsExist (){
 this.getFindOutMoreButton().click();
 this.getMessageHead().should("exist");
 this.getMessageText().should("exist");
 this.getMessageXButton().should("exist");
 this.getMessageCloseButton().should("exist");
 this.getMessageFindOutMoreButton().should("exist");
  }
checkAppearingMessageButtons(){
  this.getFindOutMoreButton().should("exist");
  this.getFindOutMoreButton().click();
  this.getMessageXButton().click();
  this.getRightArrow().should("exist");
  this.getFindOutMoreButton().click();
  this.getMessageCloseButton().click();
  this.getRightArrow().should("exist");
  this.getFindOutMoreButton().click();
  this.getMessageFindOutMoreButton().click();
  this.getRightArrow().should("exist");
}
checkSlidebar(){
  this.getSlide1().should("exist");
  this.getSlide1().should("be.visible");
  this.getRightArrow().should("exist");
  this.getLeftArrow().should("exist");
  this.getRightArrow().click();
  this.getSlide2().should("be.visible");
  this.getLeftArrow().click();
  this.getSlide1().should("be.visible");
  this.getLeftArrow().click();
  this.getSlide3().should("exist");
}
checkVisibilityContentBelowNavbar(homepage_section){
this.getAnySelector(homepage_section.headDiv).contains(homepage_section.headSelector).should('have.text', homepage_section.headSelector)//.should('be.visible');
this.getAnySelector('p').contains(homepage_section.text).should('have.text', homepage_section.text);
}
}
