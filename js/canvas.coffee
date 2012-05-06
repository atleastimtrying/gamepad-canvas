class window.classes.Canvas
  constructor: ->
    @canvas = $ '<canvas></canvas>'
    @ctx = @canvas[0].getContext '2d'
    @resize()  
    @bgColour = "grey"
    @ctx.fillEllipse = (x,y,radius)->
      @beginPath()
      @arc x, y, radius, 0, Math.PI * 2, false
      @closePath()
      @fill()
    $(window).resize @resize
    $('body').append @canvas

  clear: =>
    @ctx.fillStyle = @bgColour
    @ctx.fillRect 0, 0, @width, @height
    

  resize: =>  
    @width = $(window).width()
    @height = $(window).height()
    @canvas[0].width = @width
    @canvas[0].height = @height

  getContext: -> @ctx