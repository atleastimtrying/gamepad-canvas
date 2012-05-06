class window.classes.Enemies
  constructor: (@context, @player)->
    @collection = [];
  
  add: ->
    @collection.push new window.classes.Enemy(@context, @)
  
  remove: (enemy)->
    @collection.splice @collection.indexOf(enemy), 1
  
  animate: ->
    for enemy in @collection
      if enemy.alive
        enemy.animate()
        utils.fight @player, enemy if utils.intersect @player,enemy
    @add() if @collection.length < 30
