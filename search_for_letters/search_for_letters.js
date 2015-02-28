function change(string){
  var results = [];
  var alphabet = 26;
  string = string.toLowerCase();
  
  while(alphabet--){
    results.push(0);
  }

  for(var i = 0; i < string.length; i++){
    var base = string.charCodeAt(i);
    results[base - 97] = 1;
  }
  return results.join('');
}
