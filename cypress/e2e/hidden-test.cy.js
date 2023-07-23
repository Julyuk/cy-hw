/// <reference types="Cypress"/>
import "cypress-xpath";
import { hiddenElementsStep } from "../steps/hidden-el-step";

describe("Hidden elements", () => {
 // beforeEach(() => {});
  //it("?", () => {});
//  cy.once("uncaught:exception", () => false);
  //disabled we need to really check whether it is disabld

  it('Click on the Not Displayed button', ()=>{
    hiddenElementsStep.visit();
    cy.once("uncaught:exception", () => false);
      //disabled we need to really check whether it is disabld
    //hiddenElementsStep.clickNotDisplayedButton();
    hiddenElementsStep.changeDisabledStatusByHTML();
  })

  it('Click on the Visibility button', ()=>{
    hiddenElementsStep.visit();
    cy.once("uncaught:exception", () => false);
    hiddenElementsStep.clickVisibilityButton();
  })

  it.only('Click on the Zero Opacity button', ()=>{
    hiddenElementsStep.visit();
    cy.once("uncaught:exception", () => false);
    hiddenElementsStep.clickOpacityButton();
  })
});
