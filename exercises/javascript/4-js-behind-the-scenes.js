/* JavaScript Behind the Scenes */

// 1) Sum [1, 2, 3, 4] three ways: procedural (a loop), functional (reduce), and object-oriented (a class Accumulator with an add method). Label each paradigm in a comment.

// 2) Store three functions in an array and in an object, then call them. Explain in a comment what “first-class” means from your code.

// 3) Write applyTwice(fn, x) so applyTwice(n => n * 2, 3) returns 12.

// 4) Write makeMultiplier(n) that returns a function. Create double and triple from it.

// 5) For const arr = [1, 2, 3], predict, then check: Object.getPrototypeOf(arr) === Array.prototype, arr.hasOwnProperty('push'), and Array.prototype.hasOwnProperty('push'). Where does push live?

// 6) Walk an array’s prototype chain with a while loop, logging each prototype until you reach null.

// 7) Create const animal = { speak() { return 'noise'; } } and const dog = Object.create(animal). Call dog.speak(), then give dog its own speak and predict what changes.

// 8) Add Array.prototype.last, which returns the final element. Then write a comment on why modifying built-in prototypes is discouraged.

// 9) Predict the output order, then run it:

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

// Explain in a comment why setTimeout(..., 0) doesn’t run immediately.

// 10) Write blockFor(ms) with a busy while loop. Schedule a setTimeout of 0, call blockFor(2000), and observe. In a browser, try it with a button click handler to watch the page freeze.

// 11) Write a() calling b() calling c(), where c throws an error. Read the stack trace and match each line to a call stack frame.

// 12) Cause a stack overflow with a recursive function that has no base case and catch the RangeError. Then add a base case.

// 13) Predict what this logs for each loop:

for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j), 0);

// 14) Draw the scope chain for this code. Then predict what happens if you uncomment the last line:

const a = "global";
function outer() {
  const b = "outer";
  function inner() {
    const c = "inner";
    console.log(a, b, c);
  }
  inner();
  // console.log(c);
}
outer();

// 15) Predict what this logs, and explain whether it’s lexical or dynamic scoping:

const x = "global";
function show() {
  console.log(x);
}
function run() {
  const x = "local";
  show();
}
run();

// 16) Declare one var and one let inside an if block, then try to read both after the block. Predict each result.

// 17) Shadow a variable: declare const name = 'outer', declare another name in an inner function, and log both. Does the outer one change?

// 18) Predict each line separately, noting the error message for any that fail:

console.log(d);
var d = 1;
console.log(e);
let e = 2;
console.log(typeof fn1);
function fn1() {}
console.log(typeof fn2);
var fn2 = function () {};
fn3();
const fn3 = () => {};

// 19) Predict what this logs, then explain why it’s a better proof of let hoisting than your flashcard suggests:

let y = 1;
{
  console.log(y);
  let y = 2;
}

// 20) Predict the output of console.log(typeof foo); var foo = 1; function foo() {}. What does this tell you about which wins during hoisting?

// 21) Rewrite a function expression that fails because it’s called too early, in two ways: move it, or turn it into a declaration. Explain the tradeoff in a comment.

// 22) Log this in these four places and predict each: top level, a regular function, an object method, and an arrow function. Run the regular function in both strict and non-strict mode.

// 23) Predict, then fix it with bind:

const user = {
  name: "Ann",
  greet() {
    console.log(this.name);
  },
};
const g = user.greet;
g();

// 24) Turn greet into an arrow function and predict what this.name gives. Why isn’t an arrow function a good object method?

// 25) Write a method that has a nested regular function using this, so this is lost. Fix it three ways: const self = this, an arrow function, and .bind(this).

// 26) Use call, apply, and bind to borrow greet for a second object. Explain the difference between the three in a comment.

// 27) Attach a click handler as a regular function and as an arrow function. Log this in each, and compare it with event.currentTarget.

// 28) Write sum() with no parameters that adds up any number of arguments using arguments. Rewrite it as an arrow function and predict what happens.

// 29) Check Array.isArray(arguments), then convert it with Array.from(arguments). Rewrite sum using rest parameters (...nums) and explain why that’s preferred today.

// 30) Predict what this logs, and describe the difference in a comment:

let h = 5;
let j = h;
j = 10;
console.log(h);
const o1 = { n: 1 };
const o2 = o1;
o2.n = 2;
console.log(o1.n);

// 31) Write birthday(person) that mutates person.age, and birthdayPure(person) that returns a new object. Pass an object to each and check the original. Then pass a number into a function that “increments” it and see why that never changes the caller’s value.

// 32) Predict {} === {}, [1] === [1], and const a = [1]; a === a. Then write arraysEqual(a, b).

// 33) Declare const obj = { x: 1 }, then try obj.x = 2 and obj = {}. Connect this to your earlier const array exercise.

// 34) Copy { name: 'Ann', address: { city: 'SJ' } } with Object.assign and with spread. Change copy.name and then copy.address.city. Predict which one affects the original.

// 35) Make a deep copy with structuredClone. Then try JSON.parse(JSON.stringify(obj)) on an object that contains a Date, undefined, and a function. Predict what gets lost.

// 36) Write your own recursive deepClone that handles nested objects and arrays. Test it on the object from exercise 34.

// 37) Call Object.freeze on an object that has a nested object, then try to change the nested property. Is freeze shallow or deep?

// 38) In Chrome DevTools, open the Memory tab and take a heap snapshot. Push 100,000 objects into a global array, take another snapshot, set the array to null, force garbage collection (the trash icon), and take a third. Compare the three.

// 39) Create a leak with a setInterval that references a large array and is never cleared. Fix it with clearInterval.

// 40) Create a leak by adding an event listener inside a function that’s called repeatedly. Fix it with removeEventListener, or by attaching it once.

// 41) Build a cache using a Map that grows forever. Fix it with a size cap, then try a WeakMap and explain when each one fits.

// 42) Draw a small graph of objects, including one cycle that nothing reachable points to. Mark which objects survive mark-and-sweep. Then explain why a cycle of unreachable objects still gets collected (compare with reference counting).

// 43) Write createCounter() that returns increment and getCount functions, with the count hidden from outside. Explain how it relies on the scope chain.

// 44) Implement your own myBind(fn, context, ...args) using apply and a closure.

// 45) Write once(fn) that returns a function which only runs fn the first time it’s called and returns the cached result afterward.

// 46) Explain out loud, in 60 seconds with no notes: what happens from the moment you call a function until it returns, covering execution context, the call stack, and the scope chain. If you stall, that tells you which card to rework.
