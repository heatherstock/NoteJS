(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    console.log(notelist + " line 4");
    notelist.storeNotes('Favourite drink: seltzer');
    console.log(notelist + " line 6");
    this.noteview = new NoteListView(notelist);
    console.log(notelist + " line 8");
  }
console.log(NoteController());
  NoteController.prototype.getHTML = function(){
    document.getElementById('app').innerHTML = this.noteview.createNoteListView();;
  };
console.log(NoteController.getHTML());
  exports.NoteController = NoteController;
})(this);

var notelist = new Notelist();
var notecontroller = new NoteController(notelist);
NoteController(notelist);
console.log(notecontroller.getHTML());
