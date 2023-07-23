import { GeneralStep, generalStep } from "./general-step";

import "cypress-xpath";
/// <reference types="Cypress"/>
export class DropdownStep extends GeneralStep {
  visit() {
   this.openDropdownPage();
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");
  }
  verifyThatHeaderFooterExist() {
    generalStep.verifyThatHeaderIsDisplayed;
    generalStep.verifyThatFooterIsDisplayed;
  }
  getDivByTitle(title) {
    return cy.xpath(
      `//div[@class='thumbnail']/*[contains(text(), '${title}')] `
    );
  }
  getDropdownById(id) {
    return cy.xpath(
      `//div[@class='thumbnail']/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id='dropdowm-menu-${id}']`
    );
  }

  verifyAllDropdownOptions(arrayOfValues, dropdownId) {
    arrayOfValues.forEach((value) => {
      let el = value.toLowerCase().trim(); //make everuthing lowercase anf=d trimmed -> useful with api
      // it will return with a lot of whitespace

      this.getDropdownById(dropdownId)
        .should("exist")
        .select(el)
        .invoke("val")
        .should("eq", el);
    });
  }

  getRadioButtonOption(color){
    return cy.get(`input[value=${color}]`)

  }
  checkRadioButtonsWithDisabledOption(){
 this.getRadioButtonOption("lettuce").check().should('be.checked');
 this.getRadioButtonOption("pumpkin").should('not.be.checked');
 this.getRadioButtonOption("pumpkin").check().should('be.checked');
 this.getRadioButtonOption("lettuce").should('not.be.checked');
 this.getRadioButtonOption("cabbage").should('have.attr', 'disabled');
 this.getRadioButtonOption("cabbage").check({force:true}).should('be.checked');
 this.getRadioButtonOption("lettuce").should('not.be.checked');
   }
getDropdownOptionsWthDisabledOne(fruit){
 return cy.xpath(`//*[@id="fruit-selects"]//option[@value="${fruit}"]`)
}
   checkDropdownWithDisabledOptionWithoutit(value){
    this.getDropdownOptionsWthDisabledOne(value).should("exist")
    .invoke("val")
    .should("eq", value);
   }
   checkDropdownWithDisabledOption(value){
    this.getDropdownOptionsWthDisabledOne(value).should('have.attr', 'disabled');
  
   }
}

export const dropdownStep = new DropdownStep();
