var fs = require('fs');

function run(generatorCreator) {
  var generator = generatorCreator();
  // This is the async loop pattern / continuation passing style
  function next(err, returnValue) {
    if (err) {
      return generator.throw(err);
    }

    //generator.send(returnValue);
    //var iterator = generator.next();

    var iterator = generator.next(returnValue);
    // remember, generator.next() always returns a iterator
    // iterator has 2 properties, done:boolean, value:any
    if (!iterator.done) {
      iterator.value(next);
    }
  }

  // Kick off the async loop
  next();
}

function readFile(path) {
  return function value(next) {
    setTimeout(function () {
      fs.readFile(path, 'utf8', function (err, data) {
        //if (path === 'content2.txt') {
        //  next(new Error('Lets have some errors'));
        //  return;
        //}
        next.apply(null, arguments);
      });
    }, Math.random() * 5000 + 1000);
  };
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