function factorial (n) {
  if (n === 0) return 1;
  if (n < 0) return null;

  var fac = 1;
  var total = 1;

  while(fac < n){
    total *= ++fac;
    console.log('fac', fac);
    console.log('total', total);
  }
  
  return total;
}

console.log(factorial(5));