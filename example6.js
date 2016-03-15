var fs = require('fs');
var co = require('co');
var thunkify = require('thunkify');

fs.readFile = thunkify(fs.readFile);

co(function*() {
  console.log(yield fs.readFile('content1.txt', 'utf8'));
  console.log(yield fs.readFile('content2.txt', 'utf8'));
  console.log(yield fs.readFile('content3.txt', 'utf8'));
  console.log(yield fs.readFile('content4.txt', 'utf8'));
}).catch(function (e) {
  console.error('Got cha!');
  console.error(e.message);
});