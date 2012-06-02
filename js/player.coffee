class window.classes.Player
  constructor: (@ctx, enemies)->
    @id = Math.random()
    @size = 10
    @x = utils.roundom 600
    @y = utils.roundom 400
    @xVel = 0
    @yVel = 0
    @colour = "red"

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
    @ctx.translate -@x,-@y

  animate: ->
    @move()
    @edges()
    @draw()

  getX: -> @x
    
  getY: -> @y

  getSize: -> @size

  eat: -> @size += 1
    #@collection.delete @

  setVelocity: (newX, newY)->
    @xVel = newX * 2
    @yVel = newY * 2
  
  die: ->
    app.deaths += 1
    @x = utils.roundom app.canvas.width
    @y = utils.roundom app.canvas.width