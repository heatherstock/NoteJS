(function(exports) {
    function Notelist() {
        this.list = [];
    };

    Notelist.prototype.storeNotes = function(string) {
      var note = new Note(string)
      this.list.push(note)
    };

    Notelist.prototype.getsNotes = function(string) {
      return this.list;
    };

    exports.Notelist = Notelist;
})(this);
