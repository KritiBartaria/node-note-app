// var obj = {
//   name : 'Kriti'
// };
// var stringobj = JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);

// var personstring = '{"name" : "Kriti", "age" : 25}';
// var person = JSON.parse(personstring);
// console.log(typeof person);
// console.log(person);
//
const fs = require('fs');

var originalNote = {
  title : 'Some Title',
  body : 'Some Body'
};
var originalString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalString);
var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
