function solution(number){
  var total = 0;
  var count = 0;

  while(count < number){
    if (count % 3  === 0 && count % 5 === 0){
      total += count;
    } else if (count % 3 === 0){
      total += count;
    } else if (count % 5 === 0){
      total += count;
    }
    count++;
  }
  return total;
}