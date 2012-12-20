class window.classes.Enemies
  constructor: (@context, @players)->
    @collection = [];
  
  add: ->
    @collection.push new window.classes.Enemy(@context, @)
  
  remove: (enemy)->
    @collection.splice @collection.indexOf(enemy), 1
  
  animate: ->
    for player in @players
      for enemy in @collection
        enemy.animate()
        utils.fight player, enemy if utils.intersect player,enemy
    @add() if @collection.length < 10
