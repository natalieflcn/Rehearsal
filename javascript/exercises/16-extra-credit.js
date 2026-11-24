// 1) Write debounce(fn, delay) that only calls fn after delay ms have passed with no new calls. Test it by calling it 5 times quickly and confirming fn runs once. In a comment, say where the timer id lives and why it needs a closure.

// 2) Make your debounce preserve this and arguments. Test it as an object method and with fn(a, b). (Hint: use a regular function for the returned wrapper, not an arrow, and fn.apply(this, args).)

// 3) Attach your debounced function to an input’s input event and log the value. Compare typing fast vs. slow, and explain why the un-debounced version would be a problem for an API search.

// 4) Add a cancel() method to your debounced function, and a flush() that runs the pending call immediately.

// 5) Add a leading option so the first call runs immediately and later calls within the delay are ignored. Predict how many times fn runs for a burst of 5 calls with leading on vs. off.

// 6) Write throttle(fn, limit) that runs fn at most once per limit ms, using a timestamp. Call it in a tight loop and in a setInterval to test it.

// 7) Rewrite it with setTimeout instead of timestamps. Compare the behavior, especially whether the last call in a burst is ever dropped.

// 8) Write a comment explaining debounce vs. throttle in one sentence each, with one real use case for each (e.g. search box vs. scroll handler). This is the most common question about them.

// 9) Add trailing-call support so the final call in a burst still runs after the limit expires. Test with 10 rapid calls and predict how many run.

// 10) Attach a throttled handler to window.scroll that logs scrollY, and compare the number of logs with and without throttling.

// 11) Write curry2(fn) so curry2(add)(1)(2) returns 3.

// 12) Write a general curry(fn) using fn.length, so curry(sum3)(1)(2)(3), curry(sum3)(1, 2)(3), and curry(sum3)(1)(2, 3) all work.

// 13) Explain in a comment the difference between currying and partial application. Then rebuild partial(fn, ...preset) and compare it to your curry. This one gets asked a lot.

// 14) Implement the “infinite sum” question: sum(1)(2)(3)() returns 6, where an empty call ends the chain.

// 15) Make sum(1)(2)(3) work without the final () by returning a function with a valueOf or toString method. Predict what console.log(+sum(1)(2)) gives, and note why this trick is a bit hacky.

// 16) Add placeholder support so curry(fn)(_, 2)(1) fills the first argument later.

// 17) Use currying for something practical: const log = curry((level, time, msg) => ...), then create errorLog = log('ERROR') and errorLogNow = errorLog(Date.now()).

// 18) Write compose(...fns) and pipe(...fns) with reduce. Test with pipe(trim, toUpperCase, exclaim)(' hi '). In a comment, say which direction each runs.

// 19) Write once(fn), memoize(fn), and after(n, fn). Combine two of them. (You’ve done once and memoize before, so do them from memory this time.)

// 20) Write myReduce(arr, cb, initial). Handle the case where initial is missing (use the first element and start at index 1) and the empty-array error.

// 21) Write myForEach, mySome, myEvery, and myFind on Array.prototype or as standalone functions. Which ones can stop early?

// 22) Write flatten(arr) recursively, then iteratively with a stack, then with an optional depth argument. Compare with arr.flat(Infinity).

// 23) Write deepEqual(a, b) that handles nested objects and arrays. Test with NaN, null, and key order differences.

// 24) Write myBind, myCall, and myApply (if you did myBind earlier, extend it so the bound function also works with new).

// 25) Write myNew(Constructor, ...args) that does what the new keyword does: creates an object, links the prototype, runs the constructor, and returns the object (or the constructor’s returned object, if any).

// 26) Write groupBy(arr, keyFn) and countBy(arr, keyFn) with reduce, then again with a Map.

// 27) Write chunk(arr, size), unique(arr), zip(a, b), and range(start, end, step).

// 28) Predict each, then explain: 0.1 + 0.2 === 0.3, typeof null, typeof NaN, [] + [], [] + {}, [10, 9, 1].sort(), 'b' + 'a' + +'a' + 'a', [1, 2, 3] == '1,2,3'.

// 29) Explain why [10, 9, 1].sort() gives [1, 10, 9], then fix it with a comparator. Also check whether sort mutates the original, and compare with toSorted.

// 30) Predict arr.map(parseInt) for ['1', '2', '3'] and explain the result. (A famous trap about callback arguments.)

// 31) Predict what console.log(a) prints and why: var a = 1; (function () { console.log(a); var a = 2; })();

// 32) Predict the output of a method passed as a callback: setTimeout(obj.method, 0). Fix it three ways.

// 33) Use ?? and ?. on { a: { b: 0 } }. Predict obj.a.b || 5 vs. obj.a.b ?? 5, and obj.x.y vs. obj.x?.y.

// 34) Destructure with defaults and renaming: const { a: x = 1, ...rest } = obj, and swap two variables with array destructuring.

// 35) Compare Object.keys, Object.values, Object.entries, for...in, and Object.hasOwn on an object with an inherited property.

// 36) Implement event delegation: one click listener on a <ul> that handles clicks on dynamically added <li> items. Use event.target and closest(). Explain why this beats one listener per item.

// 37) Explain event.target vs. event.currentTarget, and bubbling vs. capturing. Build a nested div demo that logs each handler’s order, then use stopPropagation and see what changes.

// 38) Use preventDefault on a form submit and on a link click, and read form data with FormData.

// 39) Use localStorage to save and load an object. Predict what happens if you skip JSON.stringify, and what happens if the stored JSON is corrupt (wrap in try/catch).

// 40) Write a Stack class (push, pop, peek, isEmpty, size) and a Queue class. Then write MinStack again from scratch with the two-stack approach, from memory.

// 41) Create Animal and Dog extends Animal, override a method, and call super.speak(). Then check Object.getPrototypeOf(Dog.prototype) === Animal.prototype.

// 42) Write the same object with a class, a constructor function with prototype methods, and a factory function. In a comment, say how this and privacy differ among them.
