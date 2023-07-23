import "cypress-xpath";
/// <reference types="Cypress"/>
import { dataTablesStep } from "../steps/data-tables-step";
import { dataTablesPage } from "../../pages/data-tables-page";
import { headings } from "../../test-data/data-tables-data";

describe('Testing the Data, Tables & Button States page', () => {

  beforeEach(() => {
    dataTablesStep.visit();
    dataTablesStep.verifyHeaderFooterExist();
    dataTablesPage.getHeading;
  });   

  it('Checking all the headings of the h2 level', () => {
    dataTablesStep.verifyHeadings(headings);
  });

 
  it('Checking the content in the tables', () => {
    dataTablesStep.checkBigTables();
     });

  it('Checking 3 input fields', () => {
dataTablesStep.checkInputAreas();
  });

  it('Checking the menu in the "Breadcrumb" section', () => {
    dataTablesStep.checkNavSection();
  });

  
  it('Checking the "Badges" section', () => {
    dataTablesStep.checkBadgesSection();
  });

  it('Checking the pagination', () => {
    dataTablesStep.checkPagination();
  });

  it('Checking the "Table" section', () => {
  dataTablesStep.checkSmallTable();
  });

  it('Checking the "Buttons and States section"', () => {
    dataTablesStep.checkButtonsAndStatesSection();
  });

  it('Checking the "Random text" section', () => {
    dataTablesStep.checkRandomTextSection();
  });

  it('Checking the lists', () => {
    dataTablesStep.checkAllLists();
  });

})