import "cypress-xpath";
/// <reference types="Cypress"/>

export class DatePickerPage {
   static get getHeading(){
    return cy.xpath(`//h1`).should('be.visible').should('have.text','Datepicker')
   };

   static get getDatapickertext(){
      return   cy.xpath(`//div[@class='col-sm-12']/label`).should('be.visible').should('have.text','Select Date:');
   }

 static get getDatepickerButton(){
   return cy.xpath(`//div[@id='datepicker']/span`).should('be.visible');
   }

   static get getDatepickerInput(){
      return  cy.xpath(`//div[@id='datepicker']/input`).should('be.visible');
   }
   static get getCalendarAfter1clickOnTheInput(){
      return cy.xpath(`//table[@class=' table-condensed'][1]`).should('be.visible');
   }

   static get getPrevYearButton(){
     return  cy.xpath(`(//th[@class='prev'])[3]`).should('be.visible');
   }


}

export const datePickerPage=new DatePickerPage();