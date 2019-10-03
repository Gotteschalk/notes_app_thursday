(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.html = function() {
    var listArray = this.noteList.all;
    var htmlArray = ["<ul>"]
    for (let i = 0; i < listArray.length; i++) {
      htmlArray.push("<li><div>" + listArray[i].text + "</div></li>")
    }
    htmlArray.push("</ul>")
    return htmlArray.join("")
  }

  exports.NoteListView = NoteListView;
})(this);
