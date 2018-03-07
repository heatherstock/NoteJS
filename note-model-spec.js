(function(exports) {
  function takesNotesOnInstantiation() {
    var note = new Note();
    if (note.text !== "test string") {
      throw new Error("Test fails")
    } else {
      console.log('Test passes')
    }
  }
  takesNotesOnInstantiation();
})(this);
