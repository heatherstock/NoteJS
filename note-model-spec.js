function takesNotesOnInstantiation() {
  var note = new Note("test string");
  expect.toBeTrue(note.text === "test string")
};
takesNotesOnInstantiation();
