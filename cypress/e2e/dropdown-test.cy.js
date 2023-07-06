
import { DropDownPage} from "../../pages/dropdown-page";
import { dropdown1 } from "../../test-data/dropdown-values";
import { dropdown2 } from "../../test-data/dropdown-values";
import { dropdown3 } from "../../test-data/dropdown-values";
const dropdown= new DropDownPage();
describe('Dropdown', ()=>{
 
    it('Select dropdown', ()=>{
        dropdown.visit();
        dropdown.getDivByTitle('Dropdown Menu(s)').should('exist');
        dropdown.getDivByTitle('Checkboxe(s)').should('exist');
        dropdown.getDivByTitle('Radio Button(s)').should('exist');

//important for dropdown option: we can not click only select it

//it is important to write EXACTLY how it is in value (there it is lowercased - do not look at the exact opt)
//it looks by looking at value

//invoke lets us use jquery functions or use or own functions

// function val takes value from the previous object



        dropdown.getDropdownById(1).should('exist').select('python').invoke('val').should("eq","python");
//or
//dropdown.getDropdownById(1).should('exist').select(2).invoke('val').should("eq","python") - the same effect


// the same via for each

        dropdown.getDropdownById(1).should('exist').select('java').invoke('val').should("eq","java");

        dropdown.getDropdownById(2).should('exist').select('maven').invoke('val').should("eq","maven");

        dropdown.getDropdownById(3).should('exist').select('css').invoke('val').should("eq","css");

        // the same via for each
       dropdown1.forEach(value=>{
           dropdown.getDropdownById(1).should('exist').select(value).invoke('val').should("eq",value);
 //we have checked that everything exists and clicked

     })


    dropdown2.forEach(value=>{
       dropdown.getDropdownById(2).should('exist').select(value).invoke('val').should("eq",value);
// //we have checked that everything exists and clicked

       })
       dropdown3.forEach(value=>{           dropdown.getDropdownById(3).should('exist').select(value).invoke('val').should("eq",value);
// //we have checked that everything exists and clicked

       })

        // dropdown.getDropdownById(2).should('exist').select();
        // dropdown.getDropdownById(3).should('exist').select();


   //invoke lets to use jquery or use or own
    //val take values from the previous objects!!!!! Necessary
;



/// automare all for each in one


dropdown.verifyAllDropdownOptions(dropdown1, 1);
dropdown.verifyAllDropdownOptions(dropdown2, 2);
dropdown.verifyAllDropdownOptions(dropdown3, 3);

})

   
      it('checkboxes', ()=>{
          dropdown.visit();
          //we check options in checkboxes

        dropdown.getCheckBoxDiv();
          
      dropdown.get1option().click().should('be.checked');
       dropdown.get1option().uncheck().should('not.be.checked');

       dropdown.get2option().check().should('be.checked');
       dropdown.get2option().uncheck().should('not.be.checked');

       dropdown.get3option().check().should('be.checked');
       dropdown.get3option().uncheck().should('not.be.checked');


       dropdown.get4option().check().should('be.checked');
       dropdown.get4option().uncheck().should('not.be.checked');

  // .uncheck()
       // we check that there are 4 checkboxes
       dropdown.getAllCheckboxes().should('have.length', 4);

       //or 
       dropdown.getAllCheckboxes().should('have.length', 4).first().check().should('be.checked');


// more optimal


//in each - jquery
// to work with el we should wrap it in var then cy wrap
//cy wrap lets to use cypress to the insides // just do el we can not use check

//     
//query selector we go to our element
dropdown.getAllCheckboxes().each($el=>{
  let el=$el
  cy.wrap(el).check().should('be.checked')
})


      })
      it.only('radio Buttons', ()=>{
        dropdown.visit();
        dropdown.radioButtonSForm()
        //.check("Green");
       
        //it looks by value!!!
        dropdown.getAllRadioButtons().check('orange').should('be.checked');
        //in this case we check class active usually
        //or stupidly other unchecked

        cy.get('input[value="yellow"]').should('not.be.checked')

        //simpler let colorArray=[1,2,3,4] - select random check and check other that not check
      })
    })
      
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
