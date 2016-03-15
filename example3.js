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
    }, Math.random() * 5000 + 1000);
  });
}

co(function*() {
  try {
    console.log(yield readFile('content1.txt'));
    console.log(yield readFile('content2.txt'));
    console.log(yield readFile('content3.txt'));
    console.log(yield readFile('content4.txt'));
  } catch (e) {
    console.error('Got cha!');
    console.error(e.message);
  }
});