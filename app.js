console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var comand = argv._[0];
console.log('Input received is:',comand);
console.log('Yarg.argv : ', argv);


if (comand === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if (note) {
      console.log('Note created');
      notes.logNote(note);
  }
  else {
    console.log('Note already exits');
  }
} else if (comand === 'list') {
  notes.getAll();
  }else if (comand === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
      console.log('Note read is successfull');
      notes.logNote(note);
    } else {
      console.log('Note read is unsuccessful');
    }
  }else if (comand === 'remove') {
    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'Note was removed' : 'Note was not removed';
    console.log(message);
  }
else {
  console.log('Invalid command');
}
