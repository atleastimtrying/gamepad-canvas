class window.classes.Pointer
  constructor: ->
    @div = document.createElement 'div'
    document.querySelector('body').appendChild @div

  move: (x,y)->
    @div.style.top = y + "px"
    @div.style.left = x + "px"