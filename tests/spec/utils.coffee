describe "Utils", ->
  it 'has a working dist function', ->
    expect(utils.dist 1,1,2,1).toEqual 1
  

  it 'has a roundom function that returns <= the number', ->
    expect(utils.roundom 100 ).toBeLessThan 100
  

  it 'has a roundom function that returns >= 0', ->
    expect(utils.roundom 100 ).toBeGreaterThan 0
  
  
  it 'has objects that collide', ->
    obj1 = 
      getX: -> return 1 
      getY: -> return 1 
      getSize: -> return 10 
    obj2 = 
      getX: -> return 9
      getY: -> return 0 
      getSize: -> return 5 
    expect(utils.intersect obj1, obj2).toEqual true
  
  it 'has objects that miss', ->
    obj1 = 
      getX: -> return 1
      getY: -> return 1 
      getSize: -> return 2
    obj2 = 
      getX: -> return 9 
      getY: -> return 0 
      getSize: -> return 2
    expect(utils.intersect obj1, obj2).toEqual false
  
  it 'can compare sizes player > enemy', ->
    player = getSize:-> return 3
    enemy = getSize:-> return 1
    expect(utils.fight player, enemy).toEqual enemy
  
  it 'can compare sizes enemy > player', ->
    player = getSize: -> return 3
    enemy = getSize: -> return 5
    expect(utils.fight player, enemy).toEqual player
  
  it 'can compare sizes enemy = player', ->
    player = getSize: -> return 5
    enemy = getSize: -> return 5
    expect(utils.fight player, enemy).toEqual enemy
  