function hasEmptyArrayOnInstantiation() {
    describe('Notelist');
    it('has empty array on instantiation');

    var notelist = new Notelist();
    expect.toBeEqual(notelist.list.length, 0);
};
hasEmptyArrayOnInstantiation();

