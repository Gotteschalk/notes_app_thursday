(function(exports){

  describe('note controller contains a notelist on instantiation')
  function testNoteControllerAddsNoteToNotelistOnInstantiation(){
    var noteList = new NoteList;
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController.noteList.all.length === 1 )
}
    testNoteControllerAddsNoteToNotelistOnInstantiation()

    describe('note controller creates a note list view on instantiation')
    function NoteControllerCreatesANoteslistViewOnInstantiation(){
      var noteList = new NoteList;
      var noteController = new NoteController(noteList);
      assert.isTrue(noteController.noteListView.html() === "<ul><li><div>My Favourite drink is fanta</div></li></ul>")

    }
    NoteControllerCreatesANoteslistViewOnInstantiation()

    // describe('note controller gets HTML and inserts it into app element')
    // function NoteControllerCreatesANoteslistViewOnInstantiation(){
    //   var noteList = new NoteList;
    //   var noteController = new NoteController(noteList);
    //   assert.isTrue(noteController.noteListView.html() === "<ul><li><div>My Favourite drink is fanta</div></li></ul>")
    //
    // }
    // NoteControllerCreatesANoteslistViewOnInstantiation()


  })(this);
