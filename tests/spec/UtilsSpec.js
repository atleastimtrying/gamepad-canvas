describe("Utils", function() {

  it("has a working dist function", function() {
    expect(utils.dist(1,1,2,1)).toEqual(1);
  });

  it("has a roundom function that returns <= the number", function(){
    expect(utils.roundom(100)).toBeLessThan(100);
  });

  it("has a roundom function that returns >= 0", function(){
    expect(utils.roundom(100)).toBeGreaterThan(0);
  });
  
  it("has objects that collide", function(){
    var obj1 = {getX:function(){ return 1; }, getY:function(){ return 1; }, getSize:function(){ return 10; }};
    var obj2 = {getX:function(){ return 9; }, getY:function(){ return 0; }, getSize:function(){ return 5; }};
    expect(utils.intersect(obj1,obj2)).toEqual(true);
  });
  
  it("has objects that miss", function(){
    var obj1 = {getX:function(){ return 1; }, getY:function(){ return 1; }, getSize:function(){ return 2; }};
    var obj2 = {getX:function(){ return 9; }, getY:function(){ return 0; }, getSize:function(){ return 2; }};
    expect(utils.intersect(obj1,obj2)).toEqual(false);
  });

  it("can compare sizes player > enemy",function(){
    var player = { getSize:function(){ return 3; }};
    var enemy = { getSize:function(){ return 1; }};
    expect(utils.fight(player,enemy)).toEqual(player);
  });

  it("can compare sizes enemy > player",function(){
    var player = { getSize:function(){ return 3; }};
    var enemy = { getSize:function(){ return 5; }};
    expect(utils.fight(player,enemy)).toEqual(enemy);
  });

  it("can compare sizes enemy = player",function(){
    var player = { getSize:function(){ return 5; }};
    var enemy = { getSize:function(){ return 5; }};
    expect(utils.fight(player,enemy)).toEqual(player);
  });
  
});