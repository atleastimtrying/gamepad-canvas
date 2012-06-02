class window.classes.Enemy
  constructor: (@ctx, @collection)->
    @id = Math.random()
    @player = app.player
    @size = utils.roundom(utils.maxSize) + 1
    @x = utils.roundom 700
    @y = utils.roundom 500
    @xVel = (Math.random()*2) - 1
    @yVel = (Math.random()*2) - 1
    @sightRange = @size * 10
    @chaseSpeed = 0.005 #utils.maxSize - @size
    @colour = "black"
    @chasing = false

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
  
  canSee: (target)->
    utils.dist(target.getX(), target.getY(), @x, @y) < @sightRange
  
  sense: (target)->
    if @canSee(target) and !@chasing and target.id isnt @id
      @chase target

  senseOthers: ->
    @sense enemy for enemy in app.enemies.collection
  
  chase: (target)->
    @chasing = true
    if utils.isBigger target, @
      mod = -@chaseSpeed
    else
      mod = @chaseSpeed
    
    xDiff = target.getX() - @x
    yDiff = target.getY() - @y

    @x += xDiff * mod
    @y += yDiff * mod
  
  animate: ->
    @chasing = false
    @sense @player
    @sense
    if !@chasing
      @move()
    @edges()
    @draw()

  eat: -> "wuh?"

  getX: -> @x

  getY: -> @y

  getSize: -> @size

  setVelocity: (newX, newY)->
    @xVel = newX
    @yVel = newY
  
  die: -> 
    @size = utils.roundom(10) + 1
    @x = utils.roundom app.canvas.width
    @y = utils.roundom app.canvas.height
    @sightRange = @size * 10
    @chaseSpeed = utils.maxSize - @size
    @chasing = false