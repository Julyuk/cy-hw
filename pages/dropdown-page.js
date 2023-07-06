/// <reference types="Cypress"/>
import "cypress-xpath";
export class DropDownPage{
    visit(){
        return cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    }

    getDivByTitle(title){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), '${title}')] `);
    }


    getDropdownById(id){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id='dropdowm-menu-${id}']`)
    }


    verifyAllDropdownOptions(arrayOfValues,dropdownId){
    arrayOfValues.forEach(value=>{
let el=value.toLowerCase().trim(); //make everuthing lowercase anf=d trimmed -> useful with api
// it will return with a lot of whitespace

      this.getDropdownById(dropdownId).should('exist').select(el).invoke('val').should("eq",el);


       })
    }
    getCheckBoxDiv(){
        return cy.xpath(`//div[@id='checkboxes']`)
    }
    get1option(){
        return cy.xpath(`//input[@value='option-1']`)
    }
    get2option(){
        return cy.xpath(`//input[@value='option-2']`)
    }
    get3option(){
        return cy.xpath(`//input[@value='option-3']`)
    }

    get4option(){
        return cy.xpath(`//input[@value='option-4']`)
    }

    getAllCheckboxes(){
        return cy.get(`input[type='checkbox']`)
    }

    radioButtonSForm(){
        return cy.get(`form[id="radio-buttons"]`)
    }
    getAllRadioButtons(){
        return cy.xpath(`//form[@id='radio-buttons']//input[@type='radio']`)
    }
}