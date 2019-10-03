(function(exports) {
  function controllerTest(){
    document.getElementById('app').innerHTML = "Howdy"
  }
  exports.controllerTest = controllerTest


  function NoteController(noteList){
      this.noteList = noteList;
      this.noteList.add("Favourite drink: Seltzer");
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.insertHtmlFromController = function(){    
    document.getElementById('app').innerHTML = this.noteListView.html();
  }
  exports.NoteController = NoteController;



})(this);
