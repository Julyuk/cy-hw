/// <reference types="Cypress"/>
import "cypress-xpath";
export class DropDownPage {
 
  static get clickHeaderLink(){}

  static get getHeading(){}

  static get getCheckBoxDiv() {
    return cy.xpath(`//div[@id='checkboxes']`);
  }
  static get get1option() {
    return cy.xpath(`//input[@value='option-1']`);
  }
  static get get2option() {
    return cy.xpath(`//input[@value='option-2']`);
  }
  static get get3option() {
    return cy.xpath(`//input[@value='option-3']`);
  }

  static get get4option() {
    return cy.xpath(`//input[@value='option-4']`);
  }

  static get getAllCheckboxes() {
    return cy.get(`input[type='checkbox']`);
  }

  static get radioButtonSForm() {
    return cy.get(`form[id="radio-buttons"]`);
  }
  static get getAllRadioButtons() {
    return cy.xpath(`//form[@id='radio-buttons']//input[@type='radio']`);
  }
 
}
