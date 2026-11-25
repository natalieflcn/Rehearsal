/* A Closer Look at Functions */

// 1) Write greet(name = 'Guest'). Predict the output of greet(), greet(undefined), greet(null), and greet(''). Then explain in a comment why name = name || 'Guest' would behave differently for ''.

// 2) Write calculatePrice(price, discount = price * 0.1). Then reverse the parameter order and call it with no arguments. Predict the error type and explain why.

// 3. Predict, then run:

function change(num, obj, arr) {
  num = 10;
  obj.x = 2;
  arr = [99];
}
let n = 1;
const o = { x: 1 };
let a = [1];
change(n, o, a);
console.log(n, o, a);

// Explain each result in a comment, using the phrase “a copy of the reference.”

// 4. Write addItem(list, item) that mutates the array, and addItemPure(list, item) that returns a new one. Check the original after each, and note which is safer to hand to other people’s code.

// 5) Write transformer(str, fn) that returns fn(str). Call it with an anonymous function, an arrow function, and a named function. Log fn.name for each.

// 6) Predict the output order, and label each callback as sync or async:

console.log(1);
[1, 2].forEach((n) => console.log("cb", n));
setTimeout(() => console.log("later"), 0);
console.log(2);

// 7) Write your own myMap(arr, callback) and myFilter(arr, callback) without using the built-in versions. The callback should receive (item, index). This is a classic interview question.

// 8) Write makeGreeter(greeting) that returns a function. Create hello from it, then also call makeGreeter('Hi')('Bob') directly. In a comment, explain why this is both a function factory and a higher-order function.

// 9) Given const user = { name: 'Ann', greet(greeting, punct) { return ${greeting}, ${this.name}${punct}; } } and const other = { name: 'Bob' }, run greet for other with call, apply, and bind. Explain the difference in a comment, from memory.

// 10) Write multiply(a, b). Create double using multiply.bind(null, 2). Then write your own partial(fn, ...preset) using a closure and rest/spread, and rebuild double with it.

// 11) Write an IIFE that declares a private variable and logs it. Try to read the variable outside. Then do the same with a plain { let x = 1; } block, and explain in a comment why IIFEs are rarer now.

// 12) Write makeBankAccount(initial) that returns deposit, withdraw, and getBalance functions, where the balance can’t be read or changed directly. (If you did createCounter earlier, this is the same idea with more state.)

// 13) Write boardPassengers(n, wait) from your card and call it twice with different values. In a comment, explain why n and wait still work after the function has returned, and why each call has its own copy.

// 14) Predict what outer() produces, and explain why a and b don’t interfere:
function outer() {
  let count = 0;
  return () => ++count;
}
const a1 = outer(),
  b = outer();
a1();
a1();
console.log(a1(), b());

// 15) Take your var loop with setTimeout from the earlier exercise and fix it three ways: with let, with an IIFE, and with a helper function that takes i as a parameter. Explain in a comment why each works. This is the most famous closure interview question, so be ready to write it on a whiteboard.

// 16) Write memoize(fn) that caches results by argument, so memoize(slowSquare)(4) is fast the second time. Explain where the cache lives and why it isn’t global. It combines closures, higher-order functions, and Maps from your earlier cards.

// 17) Write a function that returns a closure over a large array. In a comment, describe when the array can be garbage collected, and what you’d do to release it.
