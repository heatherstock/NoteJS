(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };
  NoteListView.prototype.createNoteListView = function() {
    // var html = "<ul><li><div>EMPTY</div></li><li><div>EMPTY</div></li></ul>"
    // return html;
    var array = this.notelist.getsNotes();
    for (var i = 0; i < array.length; ++i) {
      return `<ul><li><div>${array[i].text}</div></li></ul>`;
    }

  };

  exports.NoteListView = NoteListView;
})(this);
