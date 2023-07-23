/// <reference types="Cypress"/>
import { GeneralStep } from "../cypress/steps/general-step";
import { errors } from "../test-data/errors";
import "cypress-xpath";
export class ContactUsPage {
  
  /*
//input[@name='first_name']

get(){
  return cy.xpath('//input[@name='first_name']');
}
*/

  // static get ->all where we get an element

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
  static get getSubmitButton() {
    return cy.xpath(`//input[@type="submit"]`); //????
  }
  static get  clickSubmitButton() {
    return cy.xpath(`//input[@type="submit"]`).click(); 
  }
  /*
//

get(){
  return cy.get("#form_buttons").find("input.contact_button").eq(0);
}
*/
  static get getResetButton() {
    return cy.xpath('//input[@type="reset"]');
  }
  // //a[@id="nav-title"] - header page

  //head contact us
  //    //h2[@name="contactme"]
  static get getContactUsHeader() {
    return cy.get('name="contactme"');
  }

  //   //div[@id="contact_reply"]/h1
  static get getSuccessSubmitMessage() {
    return cy
      .get("div#contact_reply > h1")
      .contains("Thank You for your Message!");
  }

  static get getInvalidEmailError() {
    return cy.contains(errors.invalidEmail).should("exist");
  }

  static get getAllFieldsAreRequiredError() {
    return cy.contains(errors.allFieldsAreRequired).should("exist");
  }
  static get getNoInvalidEmailError() {
    return cy.contains(errors.invalidEmail).should("not.exist");
  }

  static get getNoAllFieldsAreRequiredError() {
    return cy.contains(errors.allFieldsAreRequired).should("not.exist");
  }

  //practice
  //static get getLastNameByXpath() {
    //return cy.xpath('//input[@name="last_name"]');
  //}

}
export const contactUsPage=new ContactUsPage();