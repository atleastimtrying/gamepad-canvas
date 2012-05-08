(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.classes.Input = (function() {
    function Input() {
      this.keyPress = __bind(this.keyPress, this);
      this.read = __bind(this.read, this);      $(window).keypress(this.keyPress);
      this.x = 0;
      this.y = 0;
    }
    Input.prototype.read = function() {
      var pad, result;
      pad = Gamepad.getState(0);
      if (pad) {
        result = pad;
      } else {
        result = {
          leftStickX: this.x,
          leftStickY: this.y,
          faceButton0: 0,
          faceButton1: 0,
          faceButton2: 0,
          faceButton3: 0,
          select: 0
        };
      }
      return result;
    };
    Input.prototype.keyPress = function(event) {
      if (event.keyCode === 119 && this.y > -1) {
        this.y += -0.1;
      }
      if (event.keyCode === 115 && this.y < 1) {
        this.y += 0.1;
      }
      if (event.keyCode === 100 && this.x < 1) {
        this.x += 0.1;
      }
      if (event.keyCode === 97 && this.x > -1) {
        return this.x += -0.1;
      }
    };
    return Input;
  })();
}).call(this);
