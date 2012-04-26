window.utils = {
  animate: function(){
    window.app.animate();
    requestAnimationFrame(window.utils.animate);
  },
  roundom:function(num){
    return Math.round(Math.random()*num);
  },
  dist:function(x1,y1,x2,y2){
    dx = x1 - x2;
    dx = dx * dx;
    
    dy = x2 - y2;
    dy = dy * dy;
    
    return Math.sqrt( dx + dy );
  },
  intersect:function(obj1,obj2){
    var distance = this.dist(obj1.getX(), obj1.getY(), obj2.getX(), obj2.getY());
    var range = (obj1.getSize() + obj2.getSize()) /2;
    return distance < range;
  }
};