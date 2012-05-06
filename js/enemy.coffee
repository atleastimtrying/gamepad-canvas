class window.classes.Enemy
  constructor: (@ctx, @collection)->
    @size = utils.roundom(7) + 1
    @x = utils.roundom 700
    @y = utils.roundom 500
    @xVel = 0
    @yVel = 0
    @sightRange = @size * 10
    @alive = true
    @colour = "black"

  move: ->
    @x += @xVel
    @y += @yVel

  draw: ->
    @ctx.translate @x, @y
    @ctx.fillStyle = @colour
    @ctx.fillEllipse 0, 0, @size
    @ctx.fillStyle = "rgba(0,0,0,0.1)"
    @ctx.fillEllipse 0, 0, @sightRange
    @ctx.translate -@x, -@y

  #dieTest: -> collection.remove(this) if !@alive
  
  sense: ->
    #console.log app.player.getX()

  animate: ->
    #if @alive
    @sense()
    @move()
    @draw()
    #@dieTest()

  eat: -> "wuh?"

  getX: -> @x

  getY: -> @y

  getSize: -> @size

  setVelocity: (newX, newY)->
    @xVel = newX
    @yVel = newY
  
  die: -> @alive = false