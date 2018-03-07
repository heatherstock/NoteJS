(function(exports) {
  function takesNotesOnInstantiation() {
    var note = new Note("test string");
    if (note.text !== "test string") {
      throw new Error("Test fails")
    } else {
      console.log('Test passes')
    }
  }
  takesNotesOnInstantiation();
})(this);
