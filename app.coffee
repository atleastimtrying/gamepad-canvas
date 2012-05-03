class window.App
  constructor: ->
    @input = new window.classes.Input()
    @canvas = new window.classes.Canvas()
    @ctx = @canvas.getContext()
    @player = new window.classes.Player @ctx 
    @enemies = new window.classes.Enemies @ctx, @player
  animate: ->
    @canvas.clear()
    results = @input.read()
    @player.setVelocity results.leftStickX, results.leftStickY
    @player.animate()
    @enemies.animate()

window.onload = ->
  window.app = new window.App()
  window.utils.animate()
