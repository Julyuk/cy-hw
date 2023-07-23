/// <reference types="Cypress"/>
import { contactUsPage } from "../../pages/contacts-page";
import { users } from "../../test-data/users";
import { errors } from "../../test-data/errors";
import "cypress-xpath";
import {contactUsStep}  from "../steps/contactus-steps";

const userWithvalidData = users[0];
const userWithEmptyFirstName = users[1];
const userWithEmptyLastName = users[2];
const userWithEmptyEmail = users[3];
const userWithEmptyComment = users[4];
const userWithInvalidData = users[5];

describe("Contact Us page", () => {
  it(`Test the reset button on the contact us form`, () => {
    /* function fillContactUsForm(user) {
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
      }
      contactUsPage.getResetButton().click();
    }*/
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithvalidData);
    contactUsStep.verifyContactUdForm(userWithvalidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatSuccessMessageIsDisplayed();
    //contactUsPage.getAllFieldsAreRequiredError.should("exist");
    //contactUsPage.getInvalidEmailError.should("exist");
  });

  it(`Open and fill in the contact us form - with valid user data in all fields`, () => {
   
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithvalidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatSuccessMessageIsDisplayed();
  });
  it(`Open and fill in the contact us form - with the  user data with the empty first name field`, () => {
  
   
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithEmptyFirstName);
    contactUsStep.submitContactUsForm();
    contactUsPage.getAllFieldsAreRequiredError;
  });
  it(`Open and fill in the contact us form - with the  user data with the empty last name field`, () => {
   
     
      //extends in staeps lets us use in this test
      //contactUsStep.openHomePage()
    
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithEmptyLastName);
    contactUsPage.getAllFieldsAreRequiredError;
    contactUsStep.openHomePage();
    contactUsStep.verifyThatHeaderIsDisplayed();
  });
  it(`Open and fill in the contact us form - with the  user data with the empty email field`, () => {
   
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithEmptyEmail);
    contactUsPage.getAllFieldsAreRequiredError;
  });
  it(`Open and fill in the contact us form - with the  user data with the empty comment field`, () => {
   
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithEmptyComment);
    contactUsPage.getAllFieldsAreRequiredError;
  });
  it(`Open and fill in the contact us form - with invalid user data in all fields`, () => {
   
    contactUsStep.visit();

    contactUsStep.fillContactUsForm(userWithInvalidData);
    contactUsPage.getAllFieldsAreRequiredError;
    contactUsPage.getInvalidEmailError;
  });
  
});
