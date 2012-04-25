var Pointer = function(){
  var setupDiv = function(){
    var div = document.createElement('div');
    document.querySelector('body').appendChild(div);
    return div;
  };

  var div = setupDiv();

  this.move = function(x,y){
    div.style.top = y + "px";
    div.style.left = x + "px";
  };
}