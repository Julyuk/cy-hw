/// <reference types="Cypress"/>
import { AccordionPage } from "../pages/accordion-page";

import "cypress-xpath";

export const AccordionItems = [
  {
    name: `Manual Testing`,
    namePath:`//button[@id='manual-testing-accordion']`,
    text: `Manual testing has for some time been the most popular way to test code. For this method, the tester plays an important role of end user and verifies that all the features of the application work correctly. Manual testing however is on the decline. Companies and developers have realised the efficiency, accuracy and cost savings that is possible by adopting the use of automation testing.`,
    textPath: `//div[@id='manual-testing-description']/p`,
  },
  {
    name: `Cucumber BDD`,
    namePath: `//button[@id='cucumber-accordion']`,
    text: `Cucumber (BDD) simplifies the requirement capturing process. Requirements can be captured, broken down and simplified effortlessly; making the captured requirements readable to anyone within the organisation and in turn providing the required details and backbone to develop accurate test cases also known as ‘Feature Files’.`,
    textPath: `//div[@id='cucumber-testing-description']/p`,
  },
  {
    name: `Automation Testing`,
    namePath: `//button[@id='automation-accordion']`,
    text: `Automation testing has been steadily grown in popularity these past few years thanks to the time/ cost savings and efficiency that it offers. Companies throughout the world have or plan to use automation testing to rapidly speed up their test capabilities. Automation test engineers are in great demand and offer an average salary of £45,000+ (2018). Now is a great time to learn about automation test engineering and this course has been carefully developed to slowly introduce you from the basics, all the way to building advanced frameworks.`,
    textPath: `//div[@id='automation-testing-description']/p`,
  },
];
export const AccordionItemsTimeout = {
  name: `Keep Clicking! - Text will Appear After 5 Seconds!`,
  namePath: `//button[@id='click-accordion']`,
  text: `This text has appeared after 5 seconds!`,
  textPath: `//div[@id='timeout']`,
};
//[contains(text(),'This text has appeared after 5 seconds!')]
