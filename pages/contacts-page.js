/// <reference types="Cypress"/>
import { errors } from "../test-data/errors";
import 'cypress-xpath';
export class ContactUsPage {
  visit() {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
  }
/*
//input[@name='first_name']

get(){
  return cy.xpath('//input[@name='first_name']');
}
*/

  getFirstName() {
    return cy.get("input[name=first_name]");
  } //we create new func and RETURN!!!

  /*
//input[@name='last_name']

get(){
  return cy.xpath('//input[@name='last_name']');
}
*/
  getLastName() {
    return cy.get("input[name=last_name]");
  }

  /*
//input[@name='email']

get(){
  return cy.xpath('//input[@name='email']');
}
*/
  getEmail() {
    return cy.get("input[name=email]");
  }

  /*
//textarea[@name='message']

get(){
  return cy.xpath('//textarea[@name='message']');
}
*/
  getComment() {
    return cy.get("textarea[name=message]");
  }

/*
//

return cy.get("#form_buttons").contains("SUBMIT")
*/
  getSubmitButton() {
    return cy.xpath('//input[@type="submit"]');//????
  }

  /*
//

get(){
  return cy.get("#form_buttons").find("input.contact_button").eq(0);
}
*/
  getResetButton() {
    return cy.xpath('//input[@type="reset"]')
  }
// //a[@id="nav-title"] - header page

//head contact us
//    //h2[@name="contactme"]
  getContactUsHeader() {
    return cy.get('name="contactme');
  }

  //   //div[@id="contact_reply"]/h1
  getSuccessSubmitMessage() {
    return cy
      .get("div#contact_reply > h1")
      .contains("Thank You for your Message!");
  }

  getInvalidEmailError() {
    return cy.contains(errors.invalidEmail);
  }

  getAllFieldsAreRequiredError() {
    return cy.contains(errors.allFieldsAreRequired);
  }
  fillContactUsForm(user) {
    if (user.first_name) {
      this.getFirstName().type(user.first_name);
    }
    if (user.last_name) {
      this.getLastName().type(user.last_name);
    }
    if (user.email) {
      this.getEmail().type(user.email);
    }
    if (user.comment) {
      this.getComment().type(user.comment);
    }
    this.getSubmitButton().click();
  }

  //practice
  getLastNameByXpath(){
    return cy.xpath('//input[@name="last_name"]')
  }
}
