import { GeneralStep} from "./general-step";
import { DatePickerPage } from "../../pages/datepicker-page";
import { months } from "../../test-data/months";
import "cypress-xpath";
/// <reference types="Cypress"/>
import 'dayjs';
import dayjs from 'dayjs';

export class DataPickerStep extends GeneralStep{
    visit(){
        this.openDatepickerpage();
        cy.url().should('include','Datepicker');
    }

    clickAndVerifyDatepickerInputField(){
        DatePickerPage.getDatepickerButton.click();
        DatePickerPage.getCalendarAfter1clickOnTheInput;
    }

    clickNextDate(date,constant){
        cy.get(`.${date}`).contains(constant).click();
    }
   
  selectTodayPlus1Day(){
       // Calculate the next day's date
        const nextDay=dayjs().add(1,'day').format('DD');
        //.format('DD');
        //.format('MM-DD-YYYY');
        this.clickNextDate('day',nextDay);
        const nextDayInput=dayjs().add(1,'day').format('MM-DD-YYYY');
        DatePickerPage.getDatepickerInput.should('have.value', nextDayInput);
    }

    switchToMonthsOrYears(date){
        return cy.xpath(`(//table//th[@class='datepicker-switch'])[${date}]`).should('be.visible');
    }

    switchToMonths(){
        this.switchToMonthsOrYears(1).click();
    }

    switchToYears(){
        this.switchToMonthsOrYears(2).click();
    }

    getGoAheadButton(date){
        return cy.xpath(`(//th[@class='next'])[${date}]`).should('be.visible')
    }

    getGoBackButton(date){
        return cy.xpath(`(//th[@class='prev'])[${date}]`).should('be.visible')
    }



    go1MonthAhead(){
        this.getGoAheadButton(1).click();
    }

    go1YearAhead(){
        this.switchToMonths();
        this.getGoAheadButton(2).click();
    }

    go12yearsAhead(times){
        for (let i = 0; i < times; i++) {
            this.getGoAheadButton(3).click();
        }
        console.log(times);
    }

    go12YearsBack(times){
        for (let i = 0; i < times; i++) {
        this.getGoBackButton(3).click();}
        console.log(times)
    }

    selectTodayPlus1Month(){
        this.go1MonthAhead();
        let Day=dayjs().format('DD');
        this.clickNextDate('day',Day);
        const nextMonthInput=dayjs().add(1,'month').format('MM-DD-YYYY');
        DatePickerPage.getDatepickerInput.should('have.value', nextMonthInput);
    }

    getSpansDate(date,month){
        return cy.xpath(`(//span[contains(@class,'${date}')])[${month}]`).should('be.visible');
    }

    selectTodayPlus1Year(){
        this.go1YearAhead();
        let Month=dayjs().format('M');
        this.getSpansDate('month',Month).click();
        let Day=dayjs().format('DD');
        this.clickNextDate('day',Day);
        const nextYearInput=dayjs().add(1,'year').format('MM-DD-YYYY');
        DatePickerPage.getDatepickerInput.should('have.value', nextYearInput);

    }

    selectRandomYear(year){
    return  cy.xpath(`(//span[contains(@class,'year')])[${year}]`);
    }

    selectRandomDay(day){
       return cy.xpath(`(//td[@class='day'])[${day}]`)
    }

    goToRandomFutureDate(){
        let randomDate = Cypress._.random(1, 31);
        let randomMonth = Cypress._.random(1, 12);
        let randomYear = Cypress._.random(1, 12);
        let randomNumber=Cypress._.random(0, 100);
        let parsedYear;

        const selectRandomYearAndUpdateParsedYear = () => {
            let year = this.selectRandomYear(randomYear);
            return year.invoke('text').then((yearText) => {
                parsedYear = parseInt(yearText);
            });}

            // Switch to months and years view
        this.switchToMonths();
        this.switchToYears();

       
            if(randomNumber===0){
                this.selectRandomYear(randomYear).click();
                selectRandomYearAndUpdateParsedYear();
              
            }else{
                
                this.go12yearsAhead(randomNumber);
                this.selectRandomYear(randomYear).click();
                selectRandomYearAndUpdateParsedYear();
                }
            

        this.getSpansDate('month',randomMonth).click();

        if(randomDate==31){
            this.selectRandomDay(randomDate).click();
        } else if(randomMonth==2){
            // Check if the parsed year is a leap year
            if(isLeapYear(parsedYear)){
            randomDate=Cypress._.random(1, 29);
            if( this.selectRandomDay(randomDate)){
                this.selectRandomDay(randomDate).click();
             }} else{
                randomDate=Cypress._.random(1, 28);
                this.selectRandomDay(randomDate).click();
            }
        }else{
            randomDate=Cypress._.random(1, 30);
            this.selectRandomDay(randomDate).click();
        }
       
if(randomMonth<10){
    randomMonth=`0${randomMonth}`;
}else{randomMonth}
if(randomDate<10){
    randomDate=`0${randomDate}`;
}else{randomDate}


     // Assertion placed within the .then() callback to ensure parsedYear is set
        cy.wrap(parsedYear).then(() => {
            DatePickerPage.getDatepickerInput.should('have.value', `${randomMonth}-${randomDate}-${parsedYear}`);
        });

}

selectFutureOrPast(){
    let time=Cypress._.random(1, 2);
    if(time==1){
        return true;
    }else{
        return false
    }
}

isLeapYear(year){
   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


goToRandomDateInFutureOrPast(){
        let randomDate = Cypress._.random(1, 31);
        let randomMonth = Cypress._.random(1, 12);
        let randomYear = Cypress._.random(1, 12);
        let randomNumber=Cypress._.random(0, 100);
        let parsedYear;

        const selectRandomYearAndUpdateParsedYear = () => {
            let year = this.selectRandomYear(randomYear);
            return year.invoke('text').then((yearText) => {
                parsedYear = parseInt(yearText);
            })
        }
            // Switch to months and years view
        this.switchToMonths();
        this.switchToYears();

            if(randomNumber===0){
                this.selectRandomYear(randomYear).click();
                selectRandomYearAndUpdateParsedYear();
            } else{
                if(this.selectFutureOrPast()===true){
                this.go12yearsAhead(randomNumber);
                } else{
                    this.go12YearsBack(randomNumber)
                }
            this.selectRandomYear(randomYear).click();
            selectRandomYearAndUpdateParsedYear();
            }

             // Select a random month
        this.getSpansDate('month',randomMonth).click();

         // Handle random date selection based on month
        if(randomDate==31){
            this.selectRandomDay(randomDate).click();
        } else if(randomMonth==2){
            // Check if the parsed year is a leap year
            if(isLeapYear(parsedYear)){
            randomDate=Cypress._.random(1, 29);
            if( this.selectRandomDay(randomDate)){
                this.selectRandomDay(randomDate).click();
             }} else{
                randomDate=Cypress._.random(1, 28);
                this.selectRandomDay(randomDate).click();
            }
        }else{
            randomDate=Cypress._.random(1, 30);
            this.selectRandomDay(randomDate).click();
        }
       // Ensure zero-padding for month and date values
        if(randomMonth<10){
            randomMonth=`0${randomMonth}`;
        }
        if(randomDate<10){
            randomDate=`0${randomDate}`;
        }

     // Assertion placed within the .then() callback to ensure parsedYear is set
        cy.wrap(parsedYear).then(() => {
            DatePickerPage.getDatepickerInput.should('have.value', `${randomMonth}-${randomDate}-${parsedYear}`);
        });
}

selectAndVerifyTodaysDefaultDate(){
    const today=dayjs().format('MM-DD-YYYY');
    DatePickerPage.getDatepickerInput.should('have.value', today);
}

}

export const dataPickerStep=new DataPickerStep();