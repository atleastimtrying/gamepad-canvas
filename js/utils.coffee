class window.classes.Utils
  animate: ->
    window.app.animate()
    requestAnimationFrame window.utils.animate

  roundom: (num)->
    Math.round Math.random()*num
    
  dist: (x1, y1, x2, y2)->
    xs = x2 - x1
    xs = xs * xs
    ys = y2 - y1
    ys = ys * ys
    Math.sqrt xs + ys

  intersect: (obj1,obj2)->
    distance = this.dist obj1.getX(), obj1.getY(), obj2.getX(), obj2.getY()
    range = obj1.getSize() + obj2.getSize()
    distance < range

  fight: (player,enemy)->
    if player.getSize() < enemy.getSize()
      loser = player
      winner = enemy
    else
      loser = enemy
      winner = player
    loser.die()
    winner.eat()
  
  amIBigger: (player, enemy)->
    player.getSize() < enemy.getSize()