function* anotherGenerator() {
  yield 11;
  yield 12;
  yield 13;
}

function* generator() {
  yield 10;
  yield* anotherGenerator();
  yield 15;
}

var gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());