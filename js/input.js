(function() {
  window.classes.Input = (function() {
    function Input() {}
    Input.prototype.read = function() {
      var pad, result;
      pad = Gamepad.getState(0);
      if (pad) {
        result = pad;
      } else {
        result = {
          leftStickX: 0,
          leftStickY: 0,
          faceButton0: 0,
          faceButton1: 0,
          faceButton2: 0,
          faceButton3: 0,
          select: 0
        };
      }
      return result;
    };
    return Input;
  })();
}).call(this);
