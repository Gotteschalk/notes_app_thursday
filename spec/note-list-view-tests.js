(function(exports) {

  // function correctHTMLOutputtedFromNoteListWithNoNotes() {
  //   var notelist = new NoteList()
  //   notelist.add("Karlo")
  //   notelist.add("Tom")
  //   notelistview = new NoteListView(notelist);
  //   assert.isTrue(notelistview.html() ===
  //   "<ul><li><div>Karlo</div></li><li><div>Tom</div></li></ul>")
  // }

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
})(this);
