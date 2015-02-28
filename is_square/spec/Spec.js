describe("the universe", function() {
  it("did not break", function(){
    expect(1).to.not.eql(2);
  });
});

describe("the universe", function() {
  it("should work for some examples", function(){
    expect(!isSquare(-1), "Negative numbers cannot be square numbers");
    expect(!isSquare( 3));
    expect( isSquare( 4));
    expect( isSquare(25));
    expect(!isSquare(26));
  });
  it("should work for random square numbers", function(){
    var r, i;
    for(i = 0; i < 100; ++i){
      r = (Math.random() * 0xfff0) | 0;
      expect(isSquare(r*r), (r * r) + " is a square number");
    }
  });
  it("should work for zero", function(){
    expect(isSquare(0));
  });
});