/* Asynchronous JavaScript */

// 1) Write three lines of synchronous code and one setTimeout(..., 0) between them. Predict the order, then explain in a comment why 0 doesn’t mean “now.”

// 2) Set an img.src to a real image URL and log before, after, and inside img.onload. Predict the order. Explain why this must be async.

// 3) Write sleep(ms) that returns a promise resolving after ms. Use it with .then, then rewrite it with await.

// 4) Write blockFor(ms) with a busy loop. Schedule a setTimeout for 0, call blockFor(2000), and note when the timeout actually fires. Explain it in terms of the call stack.

// 5) Predict the order, then run it:
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// 6) Predict the order, and explain each line using the words “call stack,” “microtask queue,” and “task queue”:
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve()
  .then(() => console.log("C"))
  .then(() => console.log("D"));
(async () => {
  console.log("E");
  await null;
  console.log("F");
})();
console.log("G");

// 7) Predict what logs, noting that the Promise executor is synchronous:
new Promise((resolve) => {
  console.log("x");
  resolve();
}).then(() => console.log("y"));
console.log("z");

// 8) Add a setTimeout(..., 0) inside a .then callback and a .then inside a setTimeout callback. Predict the order, then explain why the microtask queue is fully drained before the next task.

// 9) Write a callback-based getUser(id, cb) using setTimeout. Chain three dependent calls (getUser, then getPosts, then getComments) by nesting callbacks, and feel the pyramid.

// 10) Rewrite exercise 9 with promises, then with async/await. Compare the readability in a comment.

// 11) Promisify getUser from exercise 9, either by hand with the Promise constructor or with a reusable promisify(fn) helper.

// 12) Create a promise that resolves after 1 second, and one that rejects. Use .then, .catch, and .finally on both. Log what runs when, and explain what .finally receives (nothing).

// 13) Predict what this logs, and explain why:

Promise.resolve(1)
  .then((v) => v + 1)
  .then((v) => {
    throw new Error("boom");
  })
  .then((v) => console.log("skipped"))
  .catch((e) => {
    console.log("caught");
    return 10;
  })
  .then((v) => console.log(v));

// 14) Use Promise.resolve('hi') and Promise.reject(new Error('no')). Attach handlers and predict the timing (they’re handled asynchronously, even though already settled).

// 15) Write getJSON(url) using fetch that throws a custom error when response.ok is false, and returns parsed JSON otherwise. Test it with a good URL (e.g. https://jsonplaceholder.typicode.com/todos/1) and a bad one that gives a 404. Explain in a comment why fetch alone doesn’t reject on 404.

// 16) Chain two fetches: fetch a user, then fetch that user’s posts. Handle errors with one .catch at the end. Explain why returning the inner promise from .then matters (what happens if you forget return?).

// 17) Rewrite exercise 16 with async/await and try/catch. Confirm that a thrown error inside await is caught.

// 18) Write an async function that returns 5. Log its return value without awaiting. Predict what you see, and fix it two ways: .then and await.

// 19) Predict the total time for each version, then measure with console.time:

// A: sequential
const a = await sleep(1000);
const b = await sleep(1000);
// B: parallel
const [c, d] = await Promise.all([sleep(1000), sleep(1000)]);

// Explain which one beginners write by accident. This is a classic “what’s wrong with this code” question.

// 20) Call an async function that throws, with and without try/catch or .catch. Predict what an unhandled rejection looks like in the console.

// 21) Show that await doesn’t block everything: start an async function that awaits sleep(1000), and log something right after calling it. Predict the order.

// 22) Write Promise.all on three sleeps, then make one reject. Predict when the rejection arrives, and whether the others still run.

// 23) Write Promise.race of a fetch and a timeout promise that rejects after 2 seconds. This is a common real-world pattern (“fetch with timeout”).

// 24) Use Promise.allSettled on a mix of successful and failing promises, then separate successes from failures with filter.

// 25) Use Promise.any on three promises where two reject. Then make all three reject and read the AggregateError.

// 26) Make a table (in a comment) of all, race, allSettled, and any: what each returns, and what makes it reject.

// 27) Write your own myPromiseAll(promises) that returns a promise. It should resolve with an array of results in order, and reject on the first rejection. Handle an empty array.

// 28) Write retry(fn, times) that calls an async function and retries on failure up to times, then throws. Test it with a function that fails twice and succeeds on the third try.

// 29) Write fetchWithTimeout(url, ms) using Promise.race. Then look up AbortController to cancel the fetch for real, and explain what race alone doesn’t do (it doesn’t cancel the request).

// 30) Build a mini-project: a country (or Pokémon) lookup. An input, a button, and a fetch to a public API. Show a loading message, the result, or a friendly error. Handle both network failure and non-OK responses. Reuse your getJSON.

// 31) In the browser DevTools Network tab, load any page and find one request. Identify the method, URL, status code, request headers, and response body, and note where you’d see a CORS error if you tried to fetch a site that doesn’t allow your origin.

// 32) Use XMLHttpRequest once, to fetch the same todo, then rewrite it with fetch. In a comment, say why fetch is preferred.

// 33) Write down the steps from typing a URL to seeing data (DNS, TCP connection, TLS if HTTPS, HTTP request, response). Explain what TCP and IP each do in one sentence.

// 34) Cause an error three functions deep, then read the stack trace and match each line to a function call. Then cause an error inside a .then callback and a setTimeout callback and compare how the traces differ.
