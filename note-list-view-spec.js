function createNoteListViewOnInstantiation() {
  describe('creates a note list view');
  it('returns a string of HTML');

  var notelist = new Notelist();
  var notelistview = new NoteListView(notelist);
  var html = "<ul><li><div>EMPTY</div></li><li><div>EMPTY</div></li></ul>"
  expect.toBeEqual(notelistview.createNoteListView(), html);
};
createNoteListViewOnInstantiation();
