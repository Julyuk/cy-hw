import { DropDownPage } from "../../pages/dropdown-page";
import { dropdown1, radio_buttons } from "../../test-data/dropdown-values";
import { dropdown2 } from "../../test-data/dropdown-values";
import { dropdown3 } from "../../test-data/dropdown-values";
import { testData } from "../../test-data/dropdown-values";

import "cypress-xpath";
import { dropdownStep } from "../steps/dropdown-step";
const dropdown = new DropDownPage();

/*
const testData = [
  {
    array: dropdown1,
    id: 1,
  },
  {
    array: dropdown2,
    id: 2,
  },
  {
    array: dropdown3,
    id: 3,
  },
];
*/

/*
describe("DropdownViaTestData", () => {
  testData.forEach((data) => {
    it(`Select dropdown - ${data.testCaseName}`, () => {
      dropdown.visit();
      dropdown.getDivByTitle(data.testCaseName).should("exist");
      dropdown.verifyAllDropdownOptions(data.array, data.id);
    });
  });
});

*/
describe("Dropdown", () => {
  beforeEach(() => {
    dropdownStep.visit();
    dropdownStep.verifyThatHeaderFooterExist();
  });
  it("Select dropdown", () => {
    dropdownStep.getDivByTitle("Dropdown Menu(s)").should("exist");
    dropdownStep.getDivByTitle("Checkboxe(s)").should("exist");
    dropdownStep.getDivByTitle("Radio Button(s)").should("exist");
    dropdownStep.getDivByTitle("Selected & Disabled").should("exist");
    
    /*
    testData.forEach((data) => {
      dropdown.verifyAllDropdownOptions(data.array, data.id);
    });

    if you want it also possible to create separate it blocks

    but in that case for each should be above it -> we will have 3 tests

    */

    //important for dropdown option: we can not click only select it

    //it is important to write EXACTLY how it is in value (there it is lowercased - do not look at the exact opt)
    //it looks by looking at value

    //invoke lets us use jquery functions or use or own functions

    // function val takes value from the previous object

    /*
    testData.forEach((data) => {
      dropdown.verifyAllDropdownOptions(data.array, data.id);
    });
    */

    /*
  testData.forEach((data) => {
      it(``, () => {
 dropdownStep.getDropdownById(testData.id)
 .should("exist")
 .select(dropdown1[1])
 .invoke("val")
 .should("eq", dropdown1[1]);

 dropdownStep.getDropdownById(testData.id)
 .should("exist")
 .select(dropdown1[2])
 .invoke("val")
 .should("eq", dropdown1[2]);

 dropdownStep.getDropdownById(testData.id)
 .should("exist")
 .select(dropdown1[3])
 .invoke("val")
 .should("eq", dropdown1[3]);

 dropdownStep.getDropdownById(testData.id)
 .should("exist")
 .select(dropdown1[0])
 .invoke("val")
 .should("eq", dropdown1[0]);
      });
    });

    dropdownStep
      .getDropdownById(1)
      .should("exist")
      .select("python")
      .invoke("val")
      .should("eq", "python");
    //or
    //dropdown.getDropdownById(1).should('exist').select(2).invoke('val').should("eq","python") - the same effect

    // the same via for each

    dropdownStep
      .getDropdownById(1)
      .should("exist")
      .select("java")
      .invoke("val")
      .should("eq", "java");

    dropdownStep
      .getDropdownById(2)
      .should("exist")
      .select("maven")
      .invoke("val")
      .should("eq", "maven");

    dropdownStep
      .getDropdownById(3)
      .should("exist")
      .select("css")
      .invoke("val")
      .should("eq", "css");
*/
    // the same via for each
    dropdown1.forEach((value) => {
      dropdownStep
        .getDropdownById(1)
        .should("exist")
        .select(value)
        .invoke("val")
        .should("eq", value);
      //we have checked that everything exists and clicked
    });

    dropdown2.forEach((value) => {
      dropdownStep
        .getDropdownById(2)
        .should("exist")
        .select(value)
        .invoke("val")
        .should("eq", value);
      // //we have checked that everything exists and clicked
    });
    dropdown3.forEach((value) => {
      dropdownStep
        .getDropdownById(3)
        .should("exist")
        .select(value)
        .invoke("val")
        .should("eq", value);
      // //we have checked that everything exists and clicked
    });

    // dropdown.getDropdownById(2).should('exist').select();
    // dropdown.getDropdownById(3).should('exist').select();

    //invoke lets to use jquery or use or own
    //val take values from the previous objects!!!!! Necessary

    /// automare all for each in one

    dropdownStep.verifyAllDropdownOptions(dropdown1, 1);
    dropdownStep.verifyAllDropdownOptions(dropdown2, 2);
    dropdownStep.verifyAllDropdownOptions(dropdown3, 3);
  });



  it("checkboxes", () => {
    //we check options in checkboxes

    DropDownPage.getCheckBoxDiv;

    DropDownPage.get1option.check().should("be.checked");
    DropDownPage.get1option.uncheck().should("not.be.checked");

    DropDownPage.get2option.check().should("be.checked");
    DropDownPage.get2option.uncheck().should("not.be.checked");

    DropDownPage.get3option.check().should("be.checked");
    DropDownPage.get3option.uncheck().should("not.be.checked");

    DropDownPage.get4option.check().should("be.checked");
    DropDownPage.get4option.uncheck().should("not.be.checked");

    // .uncheck()
    // we check that there are 4 checkboxes
    DropDownPage.getAllCheckboxes.should("have.length", 4);

    //or
    DropDownPage.getAllCheckboxes
      .should("have.length", 4)
      .first()
      .check()
      .should("be.checked");

    // more optimal

    //in each - jquery
    // to work with el we should wrap it in var then cy wrap
    //cy wrap lets to use cypress to the insides // just do el we can not use check

    //
    //query selector we go to our element
    DropDownPage.getAllCheckboxes.each(($el) => {
      let el = $el;
      cy.wrap(el).check().should("be.checked");
      cy.wrap(el).uncheck().should("not.be.checked");
    });
  });


  it("radio Buttons", () => {
  DropDownPage.radioButtonSForm;
    //.check("Green");

    //it looks by value!!!
    DropDownPage.getAllRadioButtons.check("orange").should("be.checked");
    //in this case we check class active usually
    //or stupidly other unchecked

    cy.get('input[value="yellow"]').should("not.be.checked");

  radio_buttons.forEach((radio_button) => {
    dropdownStep.getRadioButtonOption(radio_button).check(radio_button).should("be.checked");
 
      // //we have checked that everything exists and clicked
    });

    //simpler let colorArray=[1,2,3,4] - select random check and check other that not check
  });
  it("Checking selected and disabled items", ()=>{
dropdownStep.checkRadioButtonsWithDisabledOption();
dropdownStep.checkDropdownWithDisabledOptionWithoutit("apple");
dropdownStep.checkDropdownWithDisabledOptionWithoutit("pear");
dropdownStep.checkDropdownWithDisabledOptionWithoutit("grape");
dropdownStep.checkDropdownWithDisabledOption("orange")
  })
});
  //or

  /*
  describe("Dropdown", () => {
    testData.forEach((data) => {
      dropdown.visit();
      dropdown.getDivByTitle(data.testCaseName).should("exist");
      dropdown.verifyAllDropdownOptions(data.array, data.id);
    });*/


/*
    we can click via js like dev tools!!!!
    like in browser click


    cy.get('body).document(doc=>{
      const test = doc.querySelector('');
    })

    a page is flexible we can tune it to our needs 
    
    */

//document-everything inside our page
//document we can get everything
//window.document.getElementById('button3')
// or window.document.getElementById('button3').click()

// querySelector lets to go to or element and do sth - click etc
//it is a js click

//window - the highest!! - listeners, api callls etc
