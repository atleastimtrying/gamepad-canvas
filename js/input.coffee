class window.classes.Input
  constructor:->
    $(window).keypress @keyPress
    @x = 0
    @y = 0
  read: =>
    pad = Gamepad.getState(0);
    if pad
      result = pad;
    else
      result =
        leftStickX: @x
        leftStickY: @y
        faceButton0: 0
        faceButton1: 0
        faceButton2: 0
        faceButton3: 0
        select: 0
    result
  keyPress: (event)=>
    @y += -0.1 if event.keyCode is 119 and @y > -1#w
    @y += 0.1 if event.keyCode is 115 and @y < 1#s
    @x += 0.1 if event.keyCode is 100 and @x < 1#d
    @x += -0.1 if event.keyCode is 97 and @x > -1#a