(function() {
  window.classes.Pointer = (function() {
    function Pointer() {
      this.div = document.createElement('div');
      document.querySelector('body').appendChild(this.div);
    }
    Pointer.prototype.move = function(x, y) {
      this.div.style.top = y + "px";
      return this.div.style.left = x + "px";
    };
    return Pointer;
  })();
}).call(this);
