describe("the universe", function() {
  it("did not break", function(){
    expect(1).to.not.eql(2);
  });
});
describe('The function', function(){
 it('Should pass some cases', function(){
  expect(towerCombination(2)).to.eq(2);
  expect(towerCombination(3)).to.eq(6);
  expect(towerCombination(4)).to.eq(24);
  expect(towerCombination(5)).to.eq(120);
  expect(towerCombination(6)).to.eq(720);
  expect(towerCombination(7)).to.eq(5040);
  expect(towerCombination(8)).to.eq(40320);
 });
});
