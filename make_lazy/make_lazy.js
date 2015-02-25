var make_lazy = function (callback) {
  var args = Array.prototype.slice.call(arguments, 1);
  // console.log(args);
  // if (args.length === 1){
  //   return callback(args);
  // } else {
    return function(){
      return callback.apply(null, args);
    };
  // }
};


// Methods taking in a single parameter

var double = function (n) {
  // console.log(n * 2);
  return n * 2;
};

var lazy_value = make_lazy(double, 5);
console.log(lazy_value());

// Test.expect(lazy_value() === 10, 'Evaluates the expression when required');

// Methods taking in multiple parameters

var add = function (a, b) {
  console.log('a in add', a);
  console.log('b in add', b);
  return a + b;
};

var lazy_sum = make_lazy(add, 2, 3);
console.log('lazy', lazy_sum);
console.log('invoke lazy', lazy_sum());


// Test.expect(lazy_sum() === 5, 'Evaluates the expression when required');