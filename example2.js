var fs = require('fs');
var Promise = require('bluebird');

function run(generatorCreator) {
  var generator = generatorCreator();
  function reject(err) {
    return generator.throw(err);
  }
  function resolve(data) {
    //generator.send(returnValue);
    //var iterator = generator.next();

    var iterator = generator.next(data);
    // remember, generator.next() always returns a iterator
    // iterator has 2 properties, done:boolean, value:any
    if (!iterator.done) {
      iterator.value.then(resolve, reject);
    }
  }

  // Kick off the async loop
  resolve();
}

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

run(function*() {
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