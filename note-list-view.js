(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };

  NoteListView.prototype.createNoteListView = function() {
    var array = this.notelist.getsNotes();

    if (array.length === 0) {
      return "Notes Empty"
    } else {
      var string = "<ul>"
      for (var i = 0; i < array.length; ++i) {
        string += `<li><div>${array[i].text}</div></li>`;
      }
      string += "</ul>"
      return string
    }
  };

  exports.NoteListView = NoteListView;
})(this);
