(function() {
  describe("Enemy", function() {
    beforeEach(function() {
      return this.enemy = new window.classes.Enemy();
    });
    return it("can die", function() {
      this.enemy.die();
      return expect(this.enemy.isAlive()).toEqual(false);
    });
  });
}).call(this);
