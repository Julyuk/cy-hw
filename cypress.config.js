const { defineConfig } = require("cypress");
//const fs=require('fs');
//const {excel}=require('excel');
///import sql if you want to work with it

//const axios to worl with api
module.exports = defineConfig({
  e2e: {

    //lets to create an async event
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
      
//       on("task",{
//         //1 parameter
//         logMessage(message){
          
//             console.log(message);
//             return null;
//           },
//           //if 2 params
//         hello({name,age}){
//           console.log(name,age);
//           return null;
//         },
//         openFileifExists(filePath){
//           //cy.readFile(filepath).then(file)=>
//           //{cy.visit(file)}
//           //otherwise add fs lib
//           if(fs.exitxSync(filePath)){
//             return fs.readFileSync(filePath,'utf8');
//           }
//           return null;
//         },
//         checkCountOfFilesInFolder(folderPath){
//           return new Promise((resolve,reject)=>{
//             fs.readdir(folderPath,(err,files)=>{
//               if(err){
//                 return reject(err);
//               }
//               return resolve(files.length);
//             }),
//             //example of usage
//             //cy.task('checkCountOfFiles','cypress/screenshots').then(count=>{
//               //cy.log(count)
//            // })
//           connectToDb(){{
//             const connection=mysql.createConnection({host:"localhost",root:"admin",password:'ssj',database:'test'})//you will be able to connect to db
//             const[rows,fields]=await connection.promise().query(query);
//             connection.end();
//             return rows;//bc data in database is displayed in rows
//             //firstly add sth via npm

//           }}
//             // async fetchDataFromAPI(url){
//             //   const response=await axios.get(url);
//             //   return response.data;
//             // }

// //asunc- node is used
// /*
// it('"",()=>{
//   cy.task('queryToDB', 'SELECT* FROM test.users WHERE id=1).then((rows)=>{
//     expect(rows(0).name).to.equal('Test');
//     expect(rows(0).email).to.equal('vhh@gmail.com');
//     expect(rows(0).age.to.equal(23);
// //name age as in db exactly
//   })
// })

// it('check api',()=>{
//   cy.task('fetchDataFromAPI','link').then((data)=>{
//     expect(data.name).to.equal("Sauron");
//    // expect(data[0].bookingid).to.equal(1993);
//   })
// })
// //api makes tests independent if we omit ui
// */

//             // readExcelFile(filePath){
//             //   const workbook=xlsx.readFile(filePath);
//             //   const sheetName=workbook.SheetNames(0);
//             //   const sheet=workbook.Sheets(sheetName);
//             //   const data=xlsx.utils.sheet_to_json(sheet);
//             //   return data;
//             // },
//             //we can check calculations

//             //npm uninstall sth
//           })
//         }
//       })
//     },

  },
});
//api call - to save time when doing sth as precondition after having tested it