class window.classes.Enemy
  constructor: (@ctx, @collection)->
    @player = app.player
    @size = utils.roundom(10) + 1
    @x = utils.roundom 700
    @y = utils.roundom 500
    @xVel = 0
    @yVel = 0
    @aimlessX = Math.random(2) - 1
    @aimlessY = Math.random(2) - 1
    @sightRange = @size * 10
    @alive = true
    @colour = "black"

  edges: ->
    @x = 0 if @x > app.canvas.width
    @y = 0 if @y > app.canvas.height
    @x = app.canvas.width if @x < 0
    @y = app.canvas.height if @y < 0

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
    if utils.dist(@player.getX(), @player.getY(), @x, @y) < @sightRange
      if utils.isPlayerBigger @player, @
        @xVel -= 0.1
        @yVel -= 0.1
      else
        @colour = "red"
    else
      #@xVel = @aimlessX
      #@yVel = @aimlessY

  animate: ->
    #if @alive
    @sense()
    @move()
    @edges()
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