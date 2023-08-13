
import { utils } from "../support/utils";

const baseUrl=`https://automationintesting.online/`;
const userAdmin={
  name:`admin`,
  password:'password'
}

let token='test';
let regex=/token([^;]+)/;
let tokenValue;
let cookieValue;
let room={
  'roomName':'123',
  'type':"Single",
  'accessible':false,
  'description':"Please enter a description for this room",
  "image": "https://www.mwtestconsultancy.co.uk/img/testim/room1.jpg",
  "roomPrice": "123",
    "features": [
      
    ],
   
}


describe('API', () => {
  it('Check data from API', () => {
    cy.request(`POST`,`${baseUrl}auth/login`,{ username:userAdmin.name,
    password:userAdmin.password}).then((response)=>{
      expect(response.status).to.equal(200);
      token=response.headers['set-cookie'][0].split(';')[0];
      
      console.log(token);

      //2nd option
      //let tokenValue=token.match(regex)[1];
      //  console.log(tokenValue)

      //3rd option
      /*
      const tokenValue=utils.getToken(token);
      const cookieValue=utils.getCookie(token);

      console.log(tokenValue);
      console.log(cookieValue)
      */


   
    });
    
    cy.setCookie('token',tokenValue)

    cy.getCookie('token').should('have.property','value',tokenValue)
  })
  it('Check data from API with alias', () => {
    cy.request(`POST`,`${baseUrl}auth/login`,{ username:userAdmin.name,})
    .as('login');

    cy.get('@login').then((response)=>{
      expect(response.status).to.equal(200);
      token=response.headers('set-cookie');
       tokenValue=utils.getToken(token);
    //cookieValue=utils.getCookie(token);
      console.log(tokenValue);
return tokenValue;
      //console.log(cookieValue)

//to set a cookie
    }).then((token)=>{
      cy.setCookie('token',`${token}`)})
      .then(()=>{
        cy.getCookie('token').should('have.property','value',tokenValue)
      })
      .then(()=>{
        cy.visit(`${baseUrl}#/admin`)
      })
  })
    
  it('Create a room',()=>{
    cy.request(`POST`,`${baseUrl}auth/login`,{ username:userAdmin.name,})
    .as('login');
    cy.get('@login').then((response)=>{
      expect(response.status).to.equal(200);
      token=response.headers('set-cookie');
       tokenValue=utils.getToken(token);
    //cookieValue=utils.getCookie(token);
      console.log(tokenValue);
return tokenValue;
      //console.log(cookieValue)

//to set a cookie
    }).then((token)=>{
      cy.setCookie('token',`${token}`)})
      .then(()=>{
        cy.getCookie('token').should('have.property','value',tokenValue)
      })
      .then(()=>{
        cy.visit(`${baseUrl}#/admin`)
      })
    //cy.visit(`${baseUrl}#/admin`);

    // Cypress.on('uncaught:exception',(err,runnable)=>{
    //   return false;
    // })

    // cy.scrollTo('bottom');
    // cy.get('data-testid="username"').type(userAdmin.name)
    // cy.get('data-testid="password"').type(userAdmin.password)


     //cy.get('#doLogin').click();
     cy.get('#roomName').type(room.roomName);
    cy.get('#createRoom').click();
    //cy.setCookie('token',`${token}`);
   // cy.intercept('POST','**/room',{body:room}).as('createRoom');
   cy.intercept('POST','**/room',(req)=>{
    req.reply({
      statusCode:201,
      body:room
    })
   });

  })
})