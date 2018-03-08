function hasEmptyArrayOnInstantiation() {
    describe('Notelist');
    it('has empty array on instantiation');

    var notelist = new Notelist();
    expect.toBeEqual(notelist.list.length, 0);
};
hasEmptyArrayOnInstantiation();


function storesNotesInArray() {
  describe('#storeNotes');
  it('stores notes in Array');

  var notelist = new Notelist();
  notelist.storeNotes('test note');
  notelist.storeNotes('second note');
  expect.toBeEqual(notelist.list[1].text, 'second note');
};
storesNotesInArray();

function getsNotesInArray() {
  describe('#getsNotes');
  it("returns notes in array");

  var notelist = new Notelist();
  var newnote = new Note("hello");
  notelist.list.push(newnote);
  expect.toBeEqual(notelist.getsNotes(), [newnote]);
};
getsNotesInArray();
