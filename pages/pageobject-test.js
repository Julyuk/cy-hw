/// <reference types="Cypress"/>
import 'cypress-xpath';

export class PageObjectTest{
getFindOutMoreButton(){
    return cy.xpath(`//button[@data-target='#myModal']/b[contains(text(),'Find Out More!')`);
}
getIframeDoc(){
return cy.get('iframe').its('0.contentDocument').should('exist');
//its means find sth inside the function

//invoke lets find functions
}

getIframeBody(){
    return this.getIframeDoc().its('body').should('not.be.undefined').then(cy.wrap);

    //then waits until the previous command is executed
    //cy wrap lets you use cypress methods to thr inside (iframe - returns jquery ; cy wrap lets you to use cypress then)
}

//it is always better to move body to separate command to use then other commands with it

getIframeFindOutMoreButton(){
    return this.getIframeBody().find('button').contains('Find Out More!')
}

getIframeModal(){
    return this.getIframeBody().find('div#myModal.modal.fade.in')
}
/*
getSecondIframe(){
    return this.getIframeBody.find('iframe').eq(1);
}

get2IframeDoc(){
return this.getSecondIframe.its('0.conTestDocument').should('exist');
*/
}

export const pageObjectTest=new PageObjectTest();