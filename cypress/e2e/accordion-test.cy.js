/// <reference types="Cypress"/>
import {
  AccordionItems,
  AccordionItemsTimeout,
} from "../../test-data/accordion-items";

import { accordionStep } from "../steps/accordion-step";

describe("Checking the Accordion page", () => {
  beforeEach(() => {
    accordionStep.visit();
    accordionStep.verifyHeaderFooterExist();
  });
  
  it(`Verify that text exists after clicking the button ${AccordionItems.name} - without timeout`, () => {
    accordionStep.verifyAppearingTextAfterClickingFirst3Items(AccordionItems);
  });

  it(`Verify that text exists after clicking the button- with timeout and that the loading field exists`, () => {
    accordionStep.checkLoadingAndTimeout(AccordionItemsTimeout);
    // accordionStep.checkText();
  });
});
