function* generator() {
  var res;
  res = yield 1; // a
  console.log('res: ' + res);
  res = yield 2; // b
  console.log('res: ' + res);
  res = yield 3; // c
  console.log('res: ' + res);
  res = yield 4; // d
  console.log('res: ' + res);
  res = yield 5; // e
  console.log('res: ' + res);
  // do something
}

var gen = generator();
var ret;
ret = gen.next(); // 1
console.log('ret.value: ' + ret.value + ', ret.done: ' + (ret.done ? 'true' : 'false'));
ret = gen.next('a'); // 2
console.log('ret.value: ' + ret.value + ', ret.done: ' + (ret.done ? 'true' : 'false'));
ret = gen.next('b'); // 3
console.log('ret.value: ' + ret.value + ', ret.done: ' + (ret.done ? 'true' : 'false'));
ret = gen.next('c'); // 4
console.log('ret.value: ' + ret.value + ', ret.done: ' + (ret.done ? 'true' : 'false'));
ret = gen.next('d'); // 5
console.log('ret.value: ' + ret.value + ', ret.done: ' + (ret.done ? 'true' : 'false'));
ret = gen.next('e'); // undefined
console.log('ret.value: ' + ret.value + ', ret.done: ' + (ret.done ? 'true' : 'false'));

