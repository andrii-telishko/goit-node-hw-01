const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { Command } = require('commander');

const contactsOperations = require('./contacts');

// (async()=>{
//     try{
//         const contacts = await contactsOperations.listContacts();
//         console.log(contacts);

//         const oneContact = await contactsOperations.getContactById(10);
//         console.log(oneContact);

//         const deleteContact = await contactsOperations.removeContact(id);
//         console.log(deleteContact);

//         const newContact = await contactsOperations.addContact( "Ron Weesley", "hogwards@mail.com", "(111)-222-3333" );
//         console.log(newContact);
//      }
//     catch(error){
//         console.log(error.message);
//     }
// })();

//-------------------------------------------------------------------------

// const arr = hideBin(process.argv);
// // console.log(arr);

// const {argv} = yargs(arr);
// console.log(argv);

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//           (async () => {
//               try {
//                   const contacts = await contactsOperations.listContacts();
//                   console.log(contacts);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     case 'get':
//           (async () => {
//               try {
//                   const contact = await contactsOperations.getContactById(id);
//                   console.log(contact);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     case 'add':
//       (async () => {
//               try {
//                   const newContact = await contactsOperations.addContact(name, email, phone);
//                   console.log(newContact);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     case 'remove':
//       (async () => {
//               try {
//                   const contact = await contactsOperations.removeContact(id);
//                   console.log(contact);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);

//---------------------------------------------------------------------------------


const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          (async () => {
              try {
                  const contacts = await contactsOperations.listContacts();
                  console.table(contacts);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    case 'get':
          (async () => {
              try {
                  const contact = await contactsOperations.getContactById(5);
                  console.table(contact);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    case 'add':
      (async () => {
              try {
                  const newContact = await contactsOperations.addContact("Mango", "mango@gmail.com", "322-22-22");
                  console.table(newContact);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    case 'remove':
      (async () => {
              try {
                  const contact = await contactsOperations.removeContact(3);
                  console.table(contact);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
