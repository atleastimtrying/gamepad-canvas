describe("Utils", function() {

  it("has a working dist function", function() {
    expect(utils.dist(1,5,1,1)).toEqual(5);
  });

  it("has a roundom function that returns <= the number", function(){
    expect(utils.roundom(100)).toBeLessThan(100);
  });

  it("has a roundom function that returns >= 0", function(){
    expect(utils.roundom(100)).toBeGreaterThan(0);
  });
});