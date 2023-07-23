import { HiddenElementsPage } from "../../pages/hidden-elements";
import { GeneralStep } from "./general-step";
import "cypress-xpath";
/// <reference types="Cypress"/>

export class HiddenElementsStep //extends GeneralStep 
{
  visit(){
    HiddenElementsPage.visit();
    cy.url().should('include', "Hidden-Elements")
  }
  clickNotDisplayedButton() {
    HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
    // we will check whether it is really disabled


    //to click the disabled element in html click({force:true}).should('not.be.visible') (force true to check and ITIS OBLIGATORY to check that it remains invisible)
    HiddenElementsPage.getNotDisplayedButton.click({force:true}).should('not.be.visible');
  }
  //force true is useful but it destroys all the added before css properties

  clickNotDisplayedButtonByHtml(){
    HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
    cy.get('div#not-displayed.section-title').invoke('css','display','block');//disaply block in css
    HiddenElementsPage.getNotDisplayedButton.invoke('html','<p>CLICK ME AGAIN!</p>'); //we added the needed text
    HiddenElementsPage.getNotDisplayedButton.find('p').should('have.text', 'CLICK ME AGAIN!').click();//and clicked it
  
   // better to check ui by screenshots
  
  }


  changeDisabledStatusByHTML(){
HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
//HiddenElementsPage.getNotDisplayedButton.should('have.attr', 'disabled');


//HiddenElementsPage.getNotDisplayedButton.invoke('show');
//or

HiddenElementsPage.getNotDisplayedButton.invoke('attr', 'style','display:block !important');
HiddenElementsPage.getNotDisplayedButton.click({force:true});
//force true can also be applied to type, clear, click methods
  }

  clickVisibilityButton() {
    HiddenElementsPage.getVisibilityButton.should('not.be.visible');
    HiddenElementsPage.getVisibilityButton.invoke('css','visibility', 'visible').click().should('be.visible');
//here we have changed css in that way that the button has become visible and now a normal click can be applied to it

    //HiddenElementsPage.getVisibilityButton.click({force:true}).should('be.visible');
  }
  clickOpacityButton() {
    //1st option
    //HiddenElementsPage.getOpacityButton.click().should('exist');

    //2nd option
    HiddenElementsPage.getOpacityButton.should('exist');
    HiddenElementsPage.getOpacityButton.invoke('css', 'opacity', 1).click();
    
    //HiddenElementsPage.getOpacityButton.should('be.visible');
    //0 opacity in our case and we make it 1 visible
  }
}

export const hiddenElementsStep = new HiddenElementsStep();
