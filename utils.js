window.utils = {
  animate: function(){
    window.app.animate();
    requestAnimationFrame(window.utils.animate);
  },

  roundom:function(num){
    return Math.round(Math.random()*num);
  },

  dist: function(x1, y1, x2, y2) {
    var xs = x2 - x1;
    xs = xs * xs;
    var ys = y2 - y1;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
  },

  intersect:function(obj1,obj2){
    var distance = this.dist(obj1.getX(), obj1.getY(), obj2.getX(), obj2.getY());
    var range = obj1.getSize() + obj2.getSize();
    return distance < range;
  },

  fight:function(player,enemy){
    var loser;
    if(player.getSize() < enemy.getSize()){
      loser = player;
    }else{
      loser = enemy;
    }
    return loser;
  },
  
  amIBigger: function(me, them){
    return me.getSize() < them.getSize();
  }
};