describe("the universe", function() {
  it("did not break", function(){
    expect(1).to.not.eql(2);
  });
});
describe('The function', function(){
 it('Should pass some cases', function(){
  expect(change("a **&  bZ")).to.eq("11000000000000000000000001");
 });
});
