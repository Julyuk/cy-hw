/// <reference types="Cypress"/>
import "cypress-xpath";
import { GeneralStep } from "./general-step";
import { Homepage } from "../../pages/homepage";
import { texts, homepage_sections } from "../../test-data/text";




export class HomepageStep extends GeneralStep {
   visit(){    
    this.openHomePage();
    cy.url().should("include", "index");
  }

   getRightAmountOfStars() {
   
   return  cy.get("div.div-star")
      .find( "span.glyphicon.glyphicon-star")  
      .should("have.length", 10);  
  }
  getAnySelector(selector){
    return cy.get(selector)
  }

checkappAppearingMessageElementsExist (){
    Homepage.clickFindOutMoreButton;
    Homepage.getMessageHead;
    Homepage.getMessageText;
    Homepage.getMessageXButton;
    Homepage.getMessageCloseButton;
    Homepage.getMessageFindOutMoreButton;
     }
   checkAppearingMessageButtons(){
    Homepage.getFindOutMoreButton;
    Homepage.clickFindOutMoreButton;
     Homepage.clickMessageXButton;
     Homepage.getRightArrow;
     Homepage.clickFindOutMoreButton;
     Homepage.clickMessageCloseButton;
     Homepage.getRightArrow;
     Homepage.clickFindOutMoreButton;
     Homepage.clickMessageFindOutMoreButton;
     Homepage.getRightArrow;
   }
   checkSlidebar(){
    Homepage.getSlide1;
     Homepage.getSlide1;
     Homepage.getRightArrow;
     Homepage.getLeftArrow;
     Homepage.clickRightArrow;
     Homepage.getSlide2;
     Homepage.clickLeftArrow;
     Homepage.getSlide1;
     Homepage.clickRightArrow;
     Homepage.clickRightArrow;
     Homepage.getSlide3;
   }
   checkVisibilityContentBelowNavbar(homepage_section){
 this.getAnySelector(homepage_section.headDiv).contains(homepage_section.headSelector).should('have.text', homepage_section.headSelector)//.should('be.visible');
this.getAnySelector('p').contains(homepage_section.text).should('have.text', homepage_section.text);
   }

   checkHeaderLink(){
    Homepage.getPOHeader;
    Homepage.clickPOHeader;
    Homepage.getMyCoursesText;
   }
}

export const homepageStep = new HomepageStep();
