(function(exports) {
  var expect = {
    toBeTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Test passes")
      }
    }
  };
  exports.expect = expect;
})(this);
