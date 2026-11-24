/* DOM Manipulation */

// Use this starter HTML for most exercises:
<>
  <p class="message">Start guessing...</p>
  <input class="guess" type="number" />
  <button class="check">Check</button>
  <p class="score">0</p>
  <script src="script.js"></script>
</>;

// 1) In the browser console, log document.querySelector('.message') and then document.querySelector('.message').textContent. Predict what each shows, then set the text to something new.

// 2) Select the same element by class (.message), by tag (p), and by adding an id to it (#msg). Then use querySelectorAll('p') and loop over the result.

// 3) Predict what happens with document.querySelector('.nope').textContent. Run it and read the error message. Explain in a comment why it happens.

// 4) Run console.dir(document.querySelector('.message')). In a comment, describe the DOM as a tree: what is the parent of your <p>, and what are its siblings?

// 5) Run document in the browser console, then in Node. Explain in a comment which one works, and why this shows the DOM isn’t part of the JavaScript language.

// 6) Set textContent to '<b>hi</b>', then try the same with innerHTML. Predict the difference. (Never put user input into innerHTML.)

// 7) Read document.querySelector('.guess').value and log its typeof. Predict first. Then convert it with Number().

// 8) Try .textContent on the input, then .value. Explain why only one works.

// 9) Make the button clear the input after a click, using .value = ''.

// 10) Show “No number!” in .message when the input is empty. Then test a guess of 0. Does your check treat it as empty? This is the same falsy bug as your MinStack !this.min, so fix it by checking value === '' instead.

// 11) Attach a click listener to the button using an anonymous function that logs “clicked”.

// 12) Rewrite it with a named function. Then try removing each version with removeEventListener. Explain in a comment why only one of them can be removed.

// 13) Find every anonymous function in this snippet and list them in a comment:

setTimeout(function () {
  console.log("hi");
}, 1000);
[1, 2, 3].map(function (n) {
  return n * 2;
});
const greet = function () {};
function named() {}

// 14) Rewrite your click handler as an arrow function. Is it still anonymous?

// 15) Build a counter with + and - buttons. Keep the count in a variable (let count = 0) and update the DOM from it.

// 16) Break it on purpose. Read the current count with Number(document.querySelector('.score').textContent) instead of using your variable. Then explain in a comment why a state variable is the better source of truth than the DOM.

// 17) Add score and highScore state variables. Update the high score only when the score beats it.

// 18) Write render() that reads your state variables and updates all DOM text in one place. Call it after every state change.

// 19) Guess My Number. Pick a secret number from 1 to 20 (hint: Math.trunc(Math.random() * 20) + 1). On each click, show “Too high!”, “Too low!”, or “Correct!”. Track score (starts at 20, drops on each wrong guess) and highScore. Add an “Again” button that resets the state but keeps the high score.

// 20) Tip calculator. Two inputs (bill and tip %) and a button. Show the tip and total. Handle empty or non-numeric input without showing NaN.

// 21) Character counter. A textarea that shows “42 / 140” as you type (use the input event). Turn the count red past the limit by setting style.color.

// 22) Todo list. Keep todos in a state array and write a render() that rebuilds the list from it. Add and remove items by changing the array, then re-rendering.

// 23) Flashcard app with your own cards. Show a question, click to reveal the answer, then click “Got it” or “Again”. Keep currentIndex and a gotItCount in state, and re-queue the cards you missed.

// 24) Refactor this handler without changing its behavior:
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secret) {
    document.querySelector(".message").textContent = "Correct!";
  } else if (guess > secret) {
    document.querySelector(".message").textContent = "Too high!";
  } else {
    document.querySelector(".message").textContent = "Too low!";
  }
});

// Extract a displayMessage(message) helper and collapse the repeated document.querySelector calls. Before you start, write down five manual tests (including a guess of 0) so you can confirm afterward that behavior didn’t change.

// 25) Refactor your Guess My Number project: extract displayMessage, an init() function used by both the first load and the “Again” button, and a render() function. Compare the line count and readability before and after.

// 26) Look at your counter, todo list, or flashcard app and find the first piece of duplicated code. Refactor it and describe in a comment what you improved.
