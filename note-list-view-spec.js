// function createNoteListViewOnInstantiation() {
//   describe('creates a note list view');
//   it('returns a string of HTML');
//
//   var notelist = new Notelist();
//   var notelistview = new NoteListView(notelist);
//   var html = "<ul><li><div>EMPTY</div></li><li><div>EMPTY</div></li></ul>"
//   expect.toBeEqual(notelistview.createNoteListView(), html);
// };
// createNoteListViewOnInstantiation();

function createNoteListViewOnInstantiation() {
  describe('creates a note list view');
  it('returns a string of HTML with notes');

  var notelist = new Notelist();
  var newnote = new Note("hello");
  var newnote2 = new Note("Bye");
  notelist.list.push(newnote);
  notelist.list.push(newnote2);
  var notelistview = new NoteListView(notelist);
  var html = "<ul><li><div>hello</div></li><li><div>Bye</div></li></ul>"
  expect.toBeEqual(notelistview.createNoteListView(), html);
};
createNoteListViewOnInstantiation();
