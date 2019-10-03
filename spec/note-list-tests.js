(function(exports) {
describe("Notelist has an empty array on instantiation")
  function noteListEmptyArrayOnInitialization() {
    var notelist = new NoteList();
    assert.isTrue(notelist.all.length === 0);
  }

  noteListEmptyArrayOnInitialization();

describe(".add method adds a note to a Notelist")
  function addNoteToNoteListArray() {
    var notelist = new NoteList();
    notelist.add("My favourite language is Ruby");
    assert.isTrue(notelist.all[0].text === "My favourite language is Ruby")
  }

  addNoteToNoteListArray();
})(this);
