export class HiddenElementsPage {
static visit(){
  cy.visit(`http://www.webdriveruniversity.com/Hidden-Elements/index.html`);
}

  static get getNotDisplayedButton() {
    return cy.get("#button1");
  }
  static get getVisibilityButton() {
    return cy.get("#button2");
  }
  static get getOpacityButton() {
    return cy.get("#button3");
  }
  static get getModalClick() {
    this.getNotDisplayedButton().click();
  }
  static get getVisibilityClick() {
    this.getVisibilityButton().click();
  }
  static get getOpacityClick() {
    this.getOpacityButton().click();
 }
}
