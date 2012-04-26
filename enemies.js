window.classes.Enemies = function(context, player){
  var collection = [];
  
  var add = function(){
    collection.push(new window.classes.Enemy(context, this));
  };
  
  var remove = function(player){
    collection.splice(collection.indexOf(removePlayer), 1);
  };
  
  this.animate = function(){
    for(var i = 0, l = collection.length; i < l; ++i){
      var enemy = collection[i];
      if(utils.intersect(player,enemy)){
        console.log('intersection');
      }else{
        enemy.animate();
      }
    }
    if(collection.length < 5){
      add();
    }
  };
}