console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body) => {
  var notes = fetchNotes() ;
  var note = {
    title,
    body
  };

var duplicateNotes = notes.filter((note)=> note.title === title);

if(duplicateNotes.length === 0)
{
  notes.push(note);
  saveNotes(notes);
  return note
}

};
var getAll = () => {
  console.log('Listing Get All Notes');
};
var readNote = (title) => {
  var notes = fetchNotes();
  var foundNote = notes.filter((note)=> note.title === title);
  return foundNote[0];
};
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=> note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = (note) =>
{
  debugger;
  console.log('--');
  console.log(`Title is: ${note.title}`);
  console.log(`Body is: ${note.body}`);
}
module.exports =
{
  addNote : addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};
