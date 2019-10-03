(function(exports) {

describe("It gives correct HTML output with no notes")
  function correctHTMLOutputtedFromNoteListWithNoNotes() {
    var notelist = new NoteList()
    notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.html() ===
    "<ul></ul>")
  }
correctHTMLOutputtedFromNoteListWithNoNotes()

describe("It gives correct HTML output")
  function correctHTMLOutputtedFromNoteListWithTwoNotes() {
    var notelist = new NoteList()
    notelist.add("Karlo")
    notelist.add("Tom")
    notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.html() ===
    "<ul><li><div>Karlo</div></li><li><div>Tom</div></li></ul>")
  }

  correctHTMLOutputtedFromNoteListWithTwoNotes()

  describe("It gives correct HTML output for one note on list")
    function correctHTMLOutputtedFromNoteListWithOneNote() {
      var notelist = new NoteList()
      notelist.add("Tom")
      notelistview = new NoteListView(notelist);
      assert.isTrue(notelistview.html() ===
      "<ul><li><div>Tom</div></li></ul>")
    }
    correctHTMLOutputtedFromNoteListWithOneNote()
})(this);
