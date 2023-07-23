import { contactUsPage } from "../../pages/contacts-page";
import "cypress-xpath";
/// <reference types="Cypress"/>
import { Homepage } from "../../pages/homepage";
import {GeneralStep }from "./general-step";
export class ContactUsStep extends GeneralStep {
  //extends in staeps lets us use in this test
  //contactUsStep.openHomePage()

  //we will mark steps we need to do to use the selector
  // test() {
  //all possible actions will be here!!
  // ContactUsPage.getEmail();

  //static we can use wwithout copy new just outright
  visit() {
    this.openContactUs();
    cy.url().should("include", "contactus"); //we will check url
  }

  //fillContactUsForm(user) {
    //contactUsPage.fillContactUsForm(user); //not to delete everything from the page and move it to steps
  //}

  fillContactUsForm(user) {
    if (user.first_name) {
     contactUsPage.getFirstName().type(user.first_name);
    }
    if (user.last_name) {
      contactUsPage.getLastName().type(user.last_name);
    }
    if (user.email) {
     contactUsPage.getEmail().type(user.email);
    }
    if (user.comment) {
      contactUsPage.getComment().type(user.comment);
    }}
  //fillContactUsForm(user) {
  //   ContactUsPage.getFirstName().type(user.first_name);// 2nd option

  // }

  // 3nd option

  /*
  fillContactUsForm(user) {
    if (user.first_name) {
      contactUsPage.getFirstName.type(user.first_name);
    }
    if (user.last_name) {
      contactUsPage.getLastName.type(user.last_name);
    }
    if (user.email) {
      contactUsPage.getEmail.type(user.email);
    }
    if (user.comment) {
      contactUsPage.getComment.type(user.comment);
    }
  }
  */
  // HERE WE CAN NOT USE THIS - ONLY CONTACT US PAGE

  //+
  verifyContactUsForm(user) {
    if (user.first_name) {
      contactUsPage.getFirstName().should("have.value", user.first_name);
    }
    if (user.last_name) {
      contactUsPage.getLastName().should("have.value", user.last_name_name);
    }
    if (user.email) {
      contactUsPage.getEmail().should("have.value", user.email);
    }
    if (user.comment) {
      contactUsPage.getComment().should("have.value", user.comment);
    }
  }
  //we can merge the stepa

  /*
      fillContactUsForm(user) {
    if (user.first_name) {
      ContactUsPage.getFirstName.type(user.first_name).should("have.value", user.first_name);
    }
    if (user.last_name) {
      ContactUsPage.getLastName.type(user.last_name).should("have.value", user.last_name);
    }
    if (user.email) {
      ContactUsPage.getEmail.type(user.email).should("have.value", user.email);
    }
    if (user.comment) {
      ContactUsPage.getComment.type(user.comment).should("have.value", user.comment);
    }
  }
    */
  verifyThatSuccessMessageIsDisplayed() {
    contactUsPage.getSuccessSubmitMessage;
    contactUsPage.getNoAllFieldsAreRequiredError;
    contactUsPage.getNoInvalidEmailError;
  }

  verifyRedirectToContactUsPage() {
    Homepage.visit();
  }
  verifyContactUdForm(user) {
    //this if we inside class
    //new class no this another class
  }
  submitContactUsForm() {
    contactUsPage.getSubmitButton;
  }
}

//static get - not a func but property
//po and this approach diff
//we can add one more layer with logic - simpler to capsule
//came from BDD - cucumber

//hw step homepage

export const contactUsStep = new ContactUsStep();
//thanks to that option we will be able to just import without new copy
