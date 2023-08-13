import "cypress-xpath";
/// <reference types="Cypress"/>
import { dataPickerStep } from "../steps/datepicker-step";
import { datePickerPage } from "../../pages/datepicker-page";

describe('Testing the date picker functionality', () => {
  beforeEach(() => {
    dataPickerStep.visit();
    dataPickerStep.verifyThatHeaderIsDisplayed().contains('Datepicker');
    datePickerPage.getHeading;
    datePickerPage.getDatapickertext;
    dataPickerStep.clickAndVerifyDatepickerInputField();
  });  

  it(`Select the today's date `, () => {
   dataPickerStep.selectAndVerifyTodaysDefaultDate();
  });
  it(`Select a date which is one day more than today's date `, () => {
    dataPickerStep.clickAndVerifyDatepickerInputField();
    dataPickerStep.selectTodayPlus1Day();
  });

  it(`Select a date which is one month more than today's date `, () => {
    dataPickerStep.selectTodayPlus1Month();
  });

  it(`Select a date which is one year more than today's date `, () => {
    dataPickerStep.selectTodayPlus1Year();
  });

  it(`Select a random day,a month and a year (in the future)`, () => {
    dataPickerStep.goToRandomFutureDate();
  });
  it(`Select a random day,a month and a year (in the future or the past)`, () => {
    dataPickerStep.goToRandomDateInFutureOrPast();
  });
})