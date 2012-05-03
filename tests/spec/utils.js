(function() {
  describe("Utils", function() {
    it('has a working dist function', function() {
      return expect(utils.dist(1, 1, 2, 1)).toEqual(1);
    });
    it('has a roundom function that returns <= the number', function() {
      return expect(utils.roundom(100)).toBeLessThan(100);
    });
    it('has a roundom function that returns >= 0', function() {
      return expect(utils.roundom(100)).toBeGreaterThan(0);
    });
    it('has objects that collide', function() {
      var obj1, obj2;
      obj1 = {
        getX: function() {
          return 1;
        },
        getY: function() {
          return 1;
        },
        getSize: function() {
          return 10;
        }
      };
      obj2 = {
        getX: function() {
          return 9;
        },
        getY: function() {
          return 0;
        },
        getSize: function() {
          return 5;
        }
      };
      return expect(utils.intersect(obj1, obj2)).toEqual(true);
    });
    it('has objects that miss', function() {
      var obj1, obj2;
      obj1 = {
        getX: function() {
          return 1;
        },
        getY: function() {
          return 1;
        },
        getSize: function() {
          return 2;
        }
      };
      obj2 = {
        getX: function() {
          return 9;
        },
        getY: function() {
          return 0;
        },
        getSize: function() {
          return 2;
        }
      };
      return expect(utils.intersect(obj1, obj2)).toEqual(false);
    });
    it('can compare sizes player > enemy', function() {
      var enemy, player;
      player = {
        getSize: function() {
          return 3;
        }
      };
      enemy = {
        getSize: function() {
          return 1;
        }
      };
      return expect(utils.fight(player, enemy)).toEqual(enemy);
    });
    it('can compare sizes enemy > player', function() {
      var enemy, player;
      player = {
        getSize: function() {
          return 3;
        }
      };
      enemy = {
        getSize: function() {
          return 5;
        }
      };
      return expect(utils.fight(player, enemy)).toEqual(player);
    });
    return it('can compare sizes enemy = player', function() {
      var enemy, player;
      player = {
        getSize: function() {
          return 5;
        }
      };
      enemy = {
        getSize: function() {
          return 5;
        }
      };
      return expect(utils.fight(player, enemy)).toEqual(enemy);
    });
  });
}).call(this);
