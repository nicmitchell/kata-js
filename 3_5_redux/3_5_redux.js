function solution(number){
  number = number - 1;
  if (number <= 0) return 0;
  var total = 0;

  var threes = Math.floor((number) / 3);
  var fives = Math.floor((number) / 5);
  var fifteens = Math.floor((number) / 15);
  
  while (threes){
    total += 3 * threes;
    threes--;
  }
  while (fives){
    total += 5 * fives;
    fives--;
  }
  while (fifteens){
    total -= 15 * fifteens;
    fifteens--;
  }

  return total;
}