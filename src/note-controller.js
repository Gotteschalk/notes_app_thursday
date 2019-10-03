(function(exports) {
  function controllerTest(){
    document.getElementById('app').innerHTML = "Howdy"
  }
  exports.controllerTest = controllerTest

function NoteController(noteList){
  this.noteList = noteList
  this.noteList.add("My Favourite drink is fanta")
  this.noteListView = new NoteListView(this.noteList);
}



exports.NoteController = NoteController;


})(this);
