// Generated by CoffeeScript 1.3.3
(function() {

  window.Gamepad = (function() {

    function Gamepad() {}

    Gamepad.prototype.getPad = function(id) {
      return navigator.webkitGetGamepads()[id].axes;
    };

    return Gamepad;

  })();

}).call(this);
