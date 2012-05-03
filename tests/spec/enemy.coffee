describe "Enemy", ->
  beforeEach ->
    #player = new Player()
    @enemy = new window.classes.Enemy()

  it "can die", ->
      @enemy.die()
      expect(@enemy.isAlive()).toEqual(false)