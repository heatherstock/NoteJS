(function(exports) {
  var expect = {
    toBeTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Test passes");
        console.log(' ')
      }
    }
  };

  var describe = function(string) {
    console.log(string)
  };

  var it = function(string) {
    console.log('     ' + string)
  };

  exports.expect = expect;
  exports.describe = describe;
  exports.it = it;
})(this);
