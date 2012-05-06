class window.classes.Player
  constructor: (@ctx, enemies)->
    @size = 5
    @x = utils.roundom 600
    @y = utils.roundom 400
    @xVel = 0
    @yVel = 0
    @colour = "red"

  move: ->
    @x += @xVel
    @y += @yVel

  draw: ->
    @ctx.translate @x, @y
    @ctx.fillStyle = @colour
    @ctx.fillEllipse 0, 0, @size
    @ctx.translate -@x,-@y

  animate: ->
    @move()
    @draw()

  getX: -> @x
    
  getY: -> @y

  getSize: -> @size

  eat: -> @size += 1
    #@collection.delete @

  setVelocity: (newX, newY)->
    @xVel = newX
    @yVel = newY
  
  die: ->
    alert 'player died'
    @x = 0
    @y = 0