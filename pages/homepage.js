/// <reference types="Cypress"/>
import { texts, homepage_sections } from "../test-data/text";
import { navbarLinks } from "../test-data/navbar_links";
export class Homepage {
  visit() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }
  getPOHeader() {
    return cy.get(".navbar-header");
  }
  getHomeLink() {
    return cy.should("have.text", navbarLinks.homeLink);
  }
  getOurProductsLink() {
    return cy.should("have.text", navbarLinks.productsLink);
  }
  getContactUsLink() {
    return cy.should("have.text", navbarLinks.contactsLink);
  }
  getLeftArrow() {
    return cy.get(".glyphicon-chevron-left");
  }
  getRightArrow() {
    return cy.get(".glyphicon-chevron-right");
  }
  getSlide1() {
    return cy.get(".carousel-inner").find("img").eq(0);
  }
  getSlide2() {
    return cy.get(".carousel-inner").find("img").eq(1);
  }
  getSlide3() {
    return cy.get(".carousel-inner").find("img").eq(2);
  }

  getAnySelector(selector){
    return cy.get(selector)
  }


  getWhoAreWeHead() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }

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
  getFindOutMoreButton() {
    return cy.get("button#button-find-out-more");
  }

  getWhyChooseUsHead() {
    return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?");
  }

  getWhyChooseUsText() {
    return cy
      .contains(
        texts.whyChooseUsText)
      .should(
        "have.text",
      texts.whyChooseUsText
      );
  }

  getGreatServiceHead() {
    return cy.contains('GREAT SERVICE!').should("have.text", "GREAT SERVICE!");
  }

  getGreatServiceText() {
    return cy
      .contains(
        texts.whyChooseUsText
      )
      .should(
        "have.text",
        texts.whyChooseUsText)
  }

  getStars() {
    // Assuming the stars are contained within a parent element with class below
   return  cy.get("div.div-star")
      .find( "span.glyphicon.glyphicon-star")  // Find all the star elements within the 'great-service' section
      .should("have.length", 10);  // Assert that the count of stars is 10
  }

  getExServiceHead() {
    return cy
      .contains("Excellent Customer Service!");
      // .should("have.text", "Excellent Customer Service!");!!  only one sth
  }

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
  getMessageHead() {
    return cy.get("h4.modal-title");
  }
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
  getMessageCloseButton() {
    return cy.contains("button.btn.btn-default", "Close");
  }
  getMessageXButton() {
    return cy.get("button.close");
  }
  getMessageFindOutMoreButton() {
    return cy.contains("button.btn.btn-default", "Find Out More");
  }
  getMyCoursesText() {
    return cy
      .contains("My Courses & Promo Codes")
      .should("have.text", "My Courses & Promo Codes");
  }
  getStarsinGreatService(){
    cy.get('.row > div:nth-of-type(2)').find('.glyphicon-star')
  .should('have.length', 5);

  }
  getStarsinExService(){
    cy.get('.row > div:nth-of-type(4)').find('.glyphicon-star')
  .should('have.length', 5);

  }

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
