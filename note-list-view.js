(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };
  NoteListView.prototype.createNoteListView = function() {
    // var html = "<ul><li><div>EMPTY</div></li><li><div>EMPTY</div></li></ul>"
    // return html;

    return `<ul><li><div>${this.notelist.getsNotes()[0].text}</div></li><li><div>${this.notelist.getsNotes()[1].text}</div></li></ul>`

  };

  exports.NoteListView = NoteListView;
})(this);
