// Generated by CoffeeScript 1.3.3
(function() {

  window.Gamepad = (function() {

    function Gamepad() {}

    Gamepad.prototype.getPad = function(id) {
      var result;
      result = false;
      if (navigator.webkitGetGamepads()) {
        result = navigator.webkitGetGamepads()[id].axes;
      }
      return false;
    };

    return Gamepad;

  })();

}).call(this);
