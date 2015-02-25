describe("it should", function() {
  it("return a number", function(){
    var total = solution(0);
    expect(typeof total).to.be.eql('number');
  });

  it("return a sum of multiples of 3 and 5", function(){
    var total = solution(9);
    expect(total).to.eql(14);
  });

  it("it should not include the ceiling", function(){
    var total = solution(10);
    expect(total).to.eql(23);
  });

  it("it should accept large numbers", function(){
    var total = solution(100);
    expect(total).to.eql(2318);
  });

  it("it should accept larger numbers", function(){
    var total = solution(200);
    expect(total).to.eql(9168);
  });

  it("it should accept even larger numbers", function(){
    var total = solution(1000);
    expect(total).to.eql(233168);
  });

  it("it should accept even still larger numbers", function(){
    var total = solution(10000);
    expect(total).to.eql(23331668);
  });

  it("it should accept very large numbers", function(){
    var total = solution(1000000);
    expect(total).to.eql(233333166668);
  });
});