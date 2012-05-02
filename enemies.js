window.classes.Enemies = function(context, player){
  var collection = [];
  this.player = player;
  
  var add = function(){
    collection.push(new window.classes.Enemy(context, this));
  };
  
  var remove = function(enemy){
    collection.splice(collection.indexOf(enemy), 1);
  };
  
  this.animate = function(){
    for(var i = 0, l = collection.length; i < l; ++i){
      var enemy = collection[i];
      if(utils.intersect(player,enemy)){
        utils.fight(player,enemy).die();
      }
      enemy.animate();
    }
    if(collection.length < 1){
      add();
    }
    
    for(var i = 0, l = collection.length; i < l; ++i){
      if(!collection[i].isAlive()){
        remove(collection[i]);
      }
    };
  };
}