class window.App
  constructor: ->
    @deaths = 0
    @input = new window.classes.Input()
    @canvas = new window.classes.Canvas()
    @ctx = @canvas.getContext()
    @players = []
    @players.push new window.classes.Player @ctx 
    @players.push new window.classes.Player @ctx 
    @enemies = new window.classes.Enemies @ctx, @players

  animate: ->
    @canvas.clear()
    results = @input.read()
    @players[0].setVelocity results[0], results[1]
    @players[1].setVelocity results[2], results[3]
    @players[0].animate()
    @players[1].animate()
    @enemies.animate()
    $('#size').html @players[0].getSize() + "|" + @players[1].getSize() 
    $('#deaths').html @deaths

$ ->
  window.utils = new window.classes.Utils()
  window.app = new window.App()
  window.utils.animate()
