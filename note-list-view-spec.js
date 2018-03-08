function createNoteListViewOnInstantiation() {
  describe('creates a note list view');
  it('returns a string of HTML with notes');

  var notelist = new Notelist();
  var newnote = new Note("hello");
  var newnote2 = new Note("Bye");
  var newnote3 = new Note("yesokey")
  notelist.list.push(newnote);
  notelist.list.push(newnote2);
  notelist.list.push(newnote3);
  var notelistview = new NoteListView(notelist);
  var html = "<ul><li><div>hello</div></li><li><div>Bye</div></li><li><div>yesokey</div></li></ul>"
  expect.toBeEqual(notelistview.createNoteListView(), html);

  describe("Empty notes array");
  it("returns 'Notes Empty' when  array is empty");

  var notelist = new Notelist();
  var notelistview = new NoteListView(notelist);
  var html = "Notes Empty"
  expect.toBeEqual(notelistview.createNoteListView(), html);
};
createNoteListViewOnInstantiation();
