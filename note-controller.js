(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    notelist.storeNotes('Favourite drink: seltzer');
    this.noteview = new NoteListView(notelist);

  }

  NoteController.prototype.getHTML = function(){
    document.getElementById('app').innerHTML = this.noteview.createNoteListView();
  };
  exports.NoteController = NoteController;
})(this);

var notelist = new Notelist();
var notecontroller = new NoteController(notelist);
notecontroller.getHTML();
