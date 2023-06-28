/// <reference types="Cypress"/>
import {ProductPage} from "../../pages/products-page";
import { products } from "../../test-data/products";
const productPage = new ProductPage();

const imageForLinksCheck=products[2].imageDiv;//way to get 1 el out of an array in cy

describe("Products page testing", () => {
  beforeEach(()=>{
    productPage.visit();
  })
 
  products.forEach(product=>{
    it(`Check the visibility of the images and sub-headings of the product ${product.itemName}`, () => {
      productPage.openAllProducts(product);
    })
  })
  
  it("Check the links in the navbar", () => {
    productPage.checkLinksInNavbar(imageForLinksCheck);
  });

  products.forEach(product=>{
    it(`Check the message  appearing on the product page and the 'x' button on it for after clicking the heading of the product ${product.itemName}`, () => {
      productPage.checkAppearingMessage(product);
    })
  })

  products.forEach(product=>{
    it(`Check the close button and the content of the message which appears after clicking the heading of the product ${product.itemName}`, () => {
      productPage.checkCloseButton(product);
    })
  })

  products.forEach(product=>{
    it(`Check the proceed button of the message which appears after clicking the heading of the product ${product.itemName}`, () => {
      productPage.checkProceedButton(product);
    })
  })
  
  
});
