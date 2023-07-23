/// <reference types="Cypress"/>
import "cypress-xpath";
import { GeneralStep } from "./general-step";
import { ProductPage } from "../../pages/products-page";
import { products } from "../../test-data/products";
import { texts } from "../../test-data/text";
import { navbarLinks } from "../../test-data/navbar_links";


export class ProductsStep extends GeneralStep {
    visit(){

       this.openProductsPage();
       cy.url().should("include", "products");
    }

 getAnySelector(selector){
  return cy.get(selector).should('be.visible');
 }
    
  openAllProducts(product){
   this.getAnySelector(product.imageDiv).should('be.visible');

this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText)
    
  }

  checkCloseButton(product){
    this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText).click();
    ProductPage.clickCloseButton;
  }

  checkAppearingMessage(product){
    this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText).click();
    ProductPage.getAppearingMessage;
    ProductPage.clickXClose;
  }

checkProceedButton(product) {
  this.getAnySelector(product.linkDiv).contains(product.linkText).should('have.text', product.linkText).click();
 ProductPage.clickProceedButton;
  this.getAnySelector(product.linkDiv).should("exist");
  }

  checkLinksInNavbar(product){
   ProductPage.clickHomeLink;
   ProductPage.getHomeText;
   ProductPage.getOurProductsLink;
    this.getAnySelector(product).should("be.visible");
    ProductPage.getOurProductsLink;
    this.getAnySelector(product).should("be.visible");
   ProductPage.getContactUsLink;
   ProductPage.getLastName;
  }
}

export const productsStep = new ProductsStep();
