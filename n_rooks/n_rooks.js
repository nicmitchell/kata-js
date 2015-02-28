function towerCombination(n){
  var fac = n - 1;
  var total = n;
  while(fac){
    total *= fac--;
  }
  return total;
}
