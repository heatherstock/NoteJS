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
  expect.toBeEqual(notelist.list[0].text, 'test note');
};

storesNotesInArray();
