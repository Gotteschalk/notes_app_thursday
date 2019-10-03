(function(exports) {

describe("Note object contains text")
  function testNoteObjectReturnsText() {
    var note = new Note("My favourite language is Javascript");
    assert.isTrue(note.text === "My favourite language is Javascript");
  }

  testNoteObjectReturnsText();
})(this);
