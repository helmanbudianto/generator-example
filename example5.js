var fs = require('fs');
var Promise = require('bluebird');
var co = require('co');

function readFile(path) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      fs.readFile(path, 'utf8', function (err, data) {
        //if (path === 'content2.txt') {
        //  reject(new Error('Lets have some errors'))
        //}
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    }, Math.random() * 500 + 200);
  });
}

co(function*() {
  var res = [
    yield readFile('content1.txt'),
    yield readFile('content2.txt'),
    yield readFile('content3.txt'),
    yield readFile('content4.txt')
  ];
  console.log(res);
}).catch(function (e) {
  console.error('Got cha!');
  console.error(e.message);
});