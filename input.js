window.classes.Input = function(){
  this.read = function(){
    var pad = Gamepad.getState(0);
    if (pad) {
      return pad;
    }else{
      return {
        leftStickX: 0,
        leftStickY: 0,
        faceButton0: 0,
        faceButton1: 0,
        faceButton2: 0,
        faceButton3: 0,
        select: 0
      };
    }
  };
};