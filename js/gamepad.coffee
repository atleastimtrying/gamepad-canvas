class window.Gamepad
  constructor: ->
  getPad: (id)->
    result = false
    if navigator.webkitGetGamepads()
      result = navigator.webkitGetGamepads()[id].axes
    false