function takesNotesOnInstantiation() {
  describe('Note');
  it('takes string as argument on instantiation');
  var note = new Note("test string");
  expect.toBeTrue(note.text === "test string");
};
takesNotesOnInstantiation();

function returnsNoteText() {
  describe('#returnNote');
  it('returns note text');
  var note = new Note("test string");
  expect.toBeTrue(note.returnNote() === "test string");
};
returnsNoteText();