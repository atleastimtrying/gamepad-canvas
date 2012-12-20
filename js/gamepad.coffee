class window.Gamepad
  constructor: ->
  getPad: (id)->
    navigator.webkitGetGamepads()[id].axes
