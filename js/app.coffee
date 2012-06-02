class window.App
  constructor: ->
    @deaths = 0
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
    $('#size').html @player.getSize()
    $('#deaths').html @deaths

$ ->
  window.utils = new window.classes.Utils()
  window.app = new window.App()
  window.utils.animate()
