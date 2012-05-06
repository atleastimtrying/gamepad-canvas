class window.classes.Input
  read: ->
    pad = Gamepad.getState(0);
    if pad
      result = pad;
    else
      result =
        leftStickX: 0
        leftStickY: 0
        faceButton0: 0
        faceButton1: 0
        faceButton2: 0
        faceButton3: 0
        select: 0
    result