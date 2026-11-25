/* JavaScript Fundamentals */

// 1) Write the same task, summing [1, 2, 3, 4], in an imperative style (a for loop) and a declarative style (reduce). Add a comment explaining what “multi-paradigm” means using your two versions.

// 2) Declare one variable of each of the seven primitive types and log typeof for each. Which result surprises you?

// 3) Declare let x = 5, then reassign it to a string, then a boolean, logging typeof x each time. In a comment, explain what makes this “dynamic typing.”

// 4) Run var name = 42; console.log(typeof name) in a browser console, then in Node. Predict both results, then explain the difference.

// 5) Predict the results of 2**3, 2**0, 10 % 3, and 2**-1.

// 6) Calculate BMI (mass / height ** 2) for two people, store markHigherBMI as a boolean, and log a sentence using a template literal.

// 7) Predict the results of '23' + 10, '23' - 10, '23' * '2', '10' / '2', true + 1, and 'a' - 1.

// 8) Predict the results of Number('9'), Number('abc'), Number(''), Number(null), Number(undefined), and String(23).

// 9) Loop over [0, '', undefined, null, NaN, false, '0', [], {}, ' '] and log Boolean(value) for each. Count the falsy ones and compare to your card.

// 10) Predict the results of 0 == '0', 0 === '0', null == undefined, null === undefined, NaN == NaN, and '' == 0.

// 11) Write getHeight(value) that returns value, or 170 if it’s missing. Make it work when value is 0. First try ||, see the problem, then fix it with === undefined. (This is the same bug as !this.min in your MinStack.)

// 12) Classify each as an expression or a statement: 3 + 7, if (x) {}, 'hi', x = 5, const y = 1, a ? b : c. Then test which ones work inside ${} in a template literal.

// 13) Rewrite an if/else that logs “can drink” or “too young” as a ternary. Then put a ternary inside a template literal.

// 14) Use prompt("What's your favorite number?"), convert the answer to a number, and log whether it’s 23 using ===. Handle the user pressing Cancel (null) and typing text (NaN).

// 15) Put 'use strict' at the top and write hasLicense = true without declaring it. Predict the result, then remove strict mode and compare. Also try let interface = 1 in both modes.

// 16) Call a function declaration before its definition. Then do the same with a function expression stored in a const. Predict what happens and what kind of error you get.

// 17) Write calcAge(birthYear) as a declaration, then again as an expression.

// 18) Write a function with two parameters and label which are parameters and which are arguments in a comment. Call it with one argument, then with three. Predict the output.

// 19) Start with const arr = ['b', 'c']. Use push, pop, unshift, and shift one at a time. Predict the array and the return value after each, then log both.

// 20) Try arr = [] on your const array and predict the result. Then try arr.push('x'). Explain the difference in a comment.

// 21) Predict [1, 2, 3].includes('2'), then check. Does includes use == or ===?

// 22) Implement a stack (push/pop) and a queue (push/shift) using arrays. Explain in a comment which end each one removes from.

// 23) Create an object jonas with firstName, lastName, and age. Read properties with dot notation and with bracket notation, including jonas['last' + 'Name'].

// 24) Write getProp(obj, key) where key is a string variable. Show why obj.key doesn’t work, and handle the case where the property doesn’t exist.

// 25) Loop over [3, 'x', 12, 7, 20]. Use continue to skip non-numbers and break to stop at the first number over 10.

// 26) Print a multiplication table with nested loops, but break the inner loop once a product exceeds 30.

// 27) Use console.warn, console.error, and console.table on an array of three objects.

// 28) Apply the four-step process to this problem: given an array of temperatures, find the amplitude (max minus min), but some entries are the string 'error'. Write your understanding questions, subproblems, and pseudo-code before any real code. Then implement it.

// 29) Here is a buggy version. Use debugger; and breakpoints to find the bug:

function amplitude(temps) {
  let max = 0,
    min = 0;
  for (const t of temps) {
    if (typeof t !== "number") continue;
    if (t > max) max = t;
    if (t < min) min = t;
  }
  return max - min;
}
console.log(amplitude([3, 5, 1]));

// 30) Write FizzBuzz for 1 to 100, using %, ===, and a loop.

// 31) Write typeOf(value) that returns 'null' for null and 'array' for arrays, and otherwise returns typeof value.

// 32) Write hasDuplicate(arr) using includes. It’s an interview staple (LeetCode’s “Contains Duplicate”). Once it works, think about its time complexity.
