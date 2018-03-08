(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };
  NoteListView.prototype.createNoteListView = function() {
    var html = "<ul><li><div>EMPTY</div></li><li><div>EMPTY</div></li></ul>"
    return html;
  };

  exports.NoteListView = NoteListView;
})(this);
