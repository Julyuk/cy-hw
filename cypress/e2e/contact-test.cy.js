/// <reference types="Cypress"/>
import { ContactUsPage } from "../../pages/contacts-page";
const contactUsPage = new ContactUsPage();
import { users } from "../../test-data/users";
import { errors } from "../../test-data/errors";

const userWithvalidData = users[0];
const userWithEmptyFirstName = users[1];
const userWithEmptyLastName = users[2];
const userWithEmptyEmail = users[3];
const userWithEmptyComment = users[4];
const userWithInvalidData = users[5];


describe("Contact Us page", () => {
  it(`Test the reset button on the contact us form`, () => {
    function fillContactUsForm(user) {
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
    }
    contactUsPage.visit();

    fillContactUsForm(userWithvalidData);
    contactUsPage.getSubmitButton().click();
    contactUsPage.getAllFieldsAreRequiredError().should("exist");
    contactUsPage.getInvalidEmailError().should("exist");
  });


  it(`Open and fill in the contact us form - with valid user data in all fields`, () => {
    function fillContactUsForm(user) {
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
      contactUsPage.getSubmitButton().click();
    }
    contactUsPage.visit();

    fillContactUsForm(userWithvalidData);
    contactUsPage.getSuccessSubmitMessage().should("exist");
  });
  it(`Open and fill in the contact us form - with the  user data with the empty first name field`, () => {
    function fillContactUsForm(user) {
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
      contactUsPage.getSubmitButton().click();
    }
    contactUsPage.visit();

    fillContactUsForm(userWithEmptyFirstName);
    contactUsPage.getAllFieldsAreRequiredError().should("exist");
  });
  it(`Open and fill in the contact us form - with the  user data with the empty last name field`, () => {
    function fillContactUsForm(user) {
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
      contactUsPage.getSubmitButton().click();
    }
    contactUsPage.visit();

    fillContactUsForm(userWithEmptyLastName);
    contactUsPage.getAllFieldsAreRequiredError().should("exist");
  });
  it(`Open and fill in the contact us form - with the  user data with the empty email field`, () => {
    function fillContactUsForm(user) {
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
      contactUsPage.getSubmitButton().click();
    }
    contactUsPage.visit();

    fillContactUsForm(userWithEmptyEmail);
    contactUsPage.getAllFieldsAreRequiredError().should("exist");
    contactUsPage.getInvalidEmailError().should("exist");
  });
  it(`Open and fill in the contact us form - with the  user data with the empty comment field`, () => {
    function fillContactUsForm(user) {
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
      contactUsPage.getSubmitButton().click();
    }
    contactUsPage.visit();

    fillContactUsForm(userWithEmptyComment);
    contactUsPage.getAllFieldsAreRequiredError().should("exist");
  });
  it(`Open and fill in the contact us form - with invalid user data in all fields`, () => {
    function fillContactUsForm(user) {
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
      contactUsPage.getSubmitButton().click();
    }
    contactUsPage.visit();

    fillContactUsForm(userWithInvalidData);
    contactUsPage.getAllFieldsAreRequiredError().should("exist");
    contactUsPage.getInvalidEmailError().should("exist");
  });
  it(`Open and fill in the contact us form - with invalid user data in all fields`, () => {
   contactUsPage
  });
});
