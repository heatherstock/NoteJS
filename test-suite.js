(function(exports) {
  var expect = {
    toBeTrue: function(testParameter) {
      if (!testParameter) {
        throw new Error("Test failed: " + testParameter + " is not truthy");
      } else {
        console.log("Test passes");
        console.log(' ')
      }
    },

    toBeEqual: function(testParameter, equalityCheck) {
      if (testParameter !== equalityCheck) {
        throw new Error(`Test failed: ${testParameter} does not equal ${equalityCheck}`);
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
