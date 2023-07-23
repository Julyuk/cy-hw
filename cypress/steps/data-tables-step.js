import "cypress-xpath";
/// <reference types="Cypress"/>
import { GeneralStep } from "./general-step";
import { DataTablesPage, dataTablesPage } from "../../pages/data-tables-page";
import { textData,headings, drinks,fruits,vegetables,typesOfJobs,buttons,buttonStates,
    Otherstates,pagination,badges,navs, smallTable,
row1, row2,row3,table1,table2 } from "../../test-data/data-tables-data";


export class DataTablesStep extends GeneralStep{

    visit(){
        this.openDataTablespage();
        cy.url().should("include", "Data-Table");
    }

    verifyHeaderFooterExist(){
        this.verifyThatHeaderIsDisplayed().should('have.text',textData.headerText);
        this.verifyThatFooterIsDisplayed(`sm`);
    }

    universalHeadingCheck(text){
       return cy.xpath(`//div[@class='thumbnail']/h2`).contains(text).should('be.visible')
    }

    verifyHeadings(){
        headings.forEach(heading=>{
        this.universalHeadingCheck(heading);
        })
    }
    getFirstRowButtons(selector){
        return cy.xpath(`//div[@class='traversal-buttons']/${selector}`).should('be.visible');
    }

    checkFirstRowButtons(){
        buttons.forEach((button)=>{
        this.getFirstRowButtons(button.selector).should('have.css','background-color','rgb(51, 122, 183)').click();
        this.getFirstRowButtons(button.selector).should('have.css','background-color','rgb(40, 96, 144)');
        if(button.selector==='a'){
            DataTablesPage.getHeading.should('be.visible');
        }
        if(button.selector==='a'||button.selector==='button'){
            this.getFirstRowButtons(button.selector).should('have.text',button.text);
        }else{
        this.getFirstRowButtons(button.selector).should('have.value',button.text)};
    })}

getSecondRowButton(selector){
    return cy.xpath(`//div[@class='traversal-button-states']/button[contains(text(),'${selector}')]`)
}

    checkSecondRowButtons(){
        buttonStates.forEach((buttonState)=>{
            if(buttonState==='Warning'){
                this.getSecondRowButton(buttonState).should('have.text', buttonState).should('be.visible').click({force:true});
            }else{  this.getSecondRowButton(buttonState).should('have.text', buttonState).should('be.visible').click();
        }})
    };

    getThirdRowButtonSelector(number){
        return cy.xpath(`//div[@class='traversal-button-other-states']//button[contains(text(),'Button-${number}')]`)
        .should('have.text',`Button-${number}`)
        .should('be.visible');
    }
    checkThirdRowButtons(){
        Otherstates.forEach(state=>{
            if(state===1){
                this.getThirdRowButtonSelector(state)
               // .should('have.css','class','active')
               .should('have.css','background-color','rgb(40, 96, 144)')
                .should('not.have.class','focus')
                .click();

                this.getThirdRowButtonSelector(state)
                .should('have.css','background-color','rgb(32, 77, 116)')
                .should('have.class','focus');
            }else{
            this.getThirdRowButtonSelector(state).should('have.css','background-color','rgb(51, 122, 183)').should('not.have.class','focus').click();
            this.getThirdRowButtonSelector(state).should('have.css','background-color','rgb(40, 96, 144)').should('have.class','focus');}
        })
        
    };
    checkButtonsAndStatesSection(){
       this.checkFirstRowButtons();
       this.checkSecondRowButtons();
       this.checkThirdRowButtons();
    }

    checkRandomTextSection(){
        DataTablesPage.getMarkedTextinRandomTextSection;
        DataTablesPage.getAllTextinPAboveinRandomTextSection;
        DataTablesPage.getBlockquote;
        DataTablesPage.getHeadInsideinRandomTextSection;
        DataTablesPage.gettextWithLowerOpacityinRandomTextSection;
        DataTablesPage.getItalicsTextInFooterinRandomtextSection;
    }

    getUniversalTextCheckViaXpath(xpath,text){
       return cy.xpath(xpath).should('have.text',text).should('be.visible');
    }

    universalListsSelector(cl,rest){
        return cy.xpath(`(//div[@class='thumbnail'])[8]//ul[@class='${cl}']${rest|| ''}`).should('be.visible');
    }
    universalListsLISelector(cl,rest){
        return cy.xpath(`(//div[@class='thumbnail'])[8]//ul[@class='${cl}']//li${rest|| ''}`).should('be.visible');
    }

    universalLiContentSelector(rest,item) {
        return cy.xpath(`(//div[@class='thumbnail'])[8]//ul${rest|| ''}//li[contains(text(), '${item}')]`);
      }

  
    checkDrinksList(){
        this.universalListsSelector("traversal-drinks-list",'');
        this.universalListsLISelector("traversal-drinks-list",'').should('have.length',5);
        drinks.forEach(drink=>{
            this.universalLiContentSelector('',drink).should('be.visible').should('have.text', drink);
        })
    }

    checkJobsList(){
        this.universalListsSelector("traversal-job-list",'');
        this.universalListsLISelector("traversal-job-list").should('have.length',4);
        this.universalListsLISelector("traversal-job-list",`[@class='list-header']`).should('have.text', "Types of Jobs")
        typesOfJobs.forEach(job=>{
            this.universalLiContentSelector('',job).should('be.visible').should('have.text',job)
        })
    }

    checkFoodList(){
        this.universalListsSelector("traversal-food-list",'');
        this.universalListsLISelector("traversal-food-list").should('have.length',11);
        this.universalListsLISelector("traversal-food-list",`[@id='fruits']`).should('have.text', "Fruits");
        this.universalListsLISelector("traversal-food-list",`[@id='veggie']`).should('have.text', "Vegetables");
        fruits.forEach(fruit=>{
            this.universalLiContentSelector('',fruit).should('be.visible').should('have.text',fruit)
        })
        vegetables.forEach(vegetable=>{
            this.universalLiContentSelector('',vegetable).should('be.visible').should('have.text',vegetable)
        })
    }

    checkAllLists(){
        this.checkDrinksList();
        this.checkFoodList();
        this.checkJobsList();
    }

    getPaginationButton(path){
        return cy.xpath(`//ul[@class='pagination traversal-pagination']//a[${path}]`).should('be.visible');
    }

    checkPagination(){
        pagination.forEach(page=>{
if(page.num===false){
    page.text="@aria-label='"+page.text+"'";
    this.getPaginationButton(page.text).should('have.css','background-color','rgb(255, 255, 255)').click();
    cy.url().should('include','#');
    this.getPaginationButton(page.text).should('have.css','background-color','rgb(238, 238, 238)');
    DataTablesPage.getHeading.should('be.visible');
}else{
    page.text="contains(text(), "+page.text+")";
    this.getPaginationButton(page.text).should('have.css','background-color','rgb(255, 255, 255)').click();
    this.getPaginationButton(page.text).should('have.css','background-color','rgb(238, 238, 238)').should('be.visible');
}
            
 })
 }

 selectBadgeText(order,text){
   return cy.xpath(`(//ul[@class='list-group']/li/text())[${order}]`).should('have.text',text);
 }
 selectBadgeNum(num){
   return cy.xpath(`//ul[@class='list-group']/li/span[contains(text(),${num})]`).contains(num).should('be.visible','right')};
 
  
   checkBadgesSection(){
DataTablesPage.getWholeList;
    badges.forEach(badge=>{
       this.selectBadgeText(badge.order,badge.text)
        this.selectBadgeNum(badge.num).should('have.text',badge.num);
    })
 }

selectLinkInNav(text){
   return cy.xpath(`//nav[@aria-label='breadcrumb']//ol//li/a[contains(text(),'${text}')]`).should('exist')
}

selectActiveFieldInNav(){
    return cy.xpath(`//ol/li[contains(@class,'active')]`).should('be.visible');
}
checkNavSection(){
    DataTablesPage.getNavbar;
    navs.forEach(nav=>{
        this.selectLinkInNav(nav).should('not.have.css','text-decoration','underline solid rgb(35, 82, 124)').click();
        cy.url().should('include','#');
        DataTablesPage.getHeading.should('be.visible');
        this.selectLinkInNav(nav).should('have.css','text-decoration','underline solid rgb(35, 82, 124)');
    if(nav=navs[2]){
          this.selectActiveFieldInNav().should('not.have.css','text-decoration','underline solid rgb(35, 82, 124)').click();
            this.selectActiveFieldInNav().should('not.have.css','text-decoration','underline solid rgb(35, 82, 124)');
            this.selectLinkInNav(navs[0]).should('be.visible')
        
    }})
   
}

 getInputMessagearea(){
    return DataTablesPage.getFormwithInputs.find('textarea').should('be.visible').should('have.attr','rows',10);
}

 getInputFirstname(){
    cy.xpath(`//form[@id='form-textfield']/input[1]`).should('be.visible');
}
getInputLastname(){
    return  cy.xpath(`//form[@id='form-textfield']/input[2]`).should('be.visible');
}

checkInputAreas(){
    DataTablesPage.verifyTextsInInputs;
    cy.xpath(`//form[@id='form-textfield']/input[1]`).should('be.visible').type('Steve').should('have.value','Steve');;
    this.getInputLastname().type('Jobs').should('have.value','Jobs');
    this.getInputMessagearea().type('My message').invoke('val')
    .then((value) => {
      expect(value.trim()).to.equal('My message');
    });}
    /*
    use .invoke('val').then() to get the value of the input field, and then we 
    use .trim() to remove any leading or trailing spaces. 
    Finally, we use expect to compare the trimmed value with the expected value. 
    This ensures that the test will pass even if there are leading or trailing spaces in the input field.*/

    getSmallTableHeaderCells(){
        cy.xpath(`//h2/../table/thead/tr/th`).should('be.visible')
    }

checkSmallTableHeaders(){
    this.getSmallTableHeaderCells;
    cy.xpath(`//h2/../table/thead/tr//th`).should('be.visible').should(($headers) => {
        let index=0;   
        smallTable.forEach(h=>{
            expect($headers.eq(index)).to.contain(h);
            index++;
        })
        // expect($headers.eq(0)).to.contain("#");
        // expect($headers.eq(1)).to.contain("First");
        // expect($headers.eq(2)).to.contain("Last");
      });
};

checkSmallTabledata(){
    cy.xpath(`//h2/../table/tbody/tr`).should('be.visible').should(($rows) => {
        let index=0;   
        row1.forEach(cell=>{
            expect($rows.eq(index)).to.contain(cell);
         
        })
        index++;
        row2.forEach(cell=>{
            expect($rows.eq(index)).to.contain(cell);
        })
        index++;
        row3.forEach(cell=>{
            expect($rows.eq(index)).to.contain(cell);
        })

      });
};

checkSmallTable(){
    DataTablesPage.getSmallTable;
    this.checkSmallTableHeaders();
    this.checkSmallTabledata();
 }

 check1BigTable(){
    cy.xpath(`//table[@id='t01']//tr`).should('be.visible').should(($rows) => {
        let index=0;  
        table1.forEach(row=>{
            row.row.forEach(cell=>{
                expect($rows.eq(index)).to.contain(cell);
            })
            index++;
        })

      });
 }

 check2BigTable(){
    cy.xpath(`//table[@id='t02']//tr`).should('be.visible').should(($rows) => {
        let index=0;  
        table2.forEach(row=>{
            row.row.forEach(cell=>{
                expect($rows.eq(index)).to.contain(cell);
            })
            index++;
        })

      });
 }
 checkBigTables(){
    this.check1BigTable();
    this.check2BigTable();
 }
}
export const dataTablesStep=new DataTablesStep();