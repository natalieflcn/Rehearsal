## JavaScript Mini-Projects Curriculum

**Debounced search.**

An input that searches a public API (movies, countries, GitHub users) using your own debounce. Show loading, results, “no results,” and error states. Cancel stale requests with AbortController so old responses can’t overwrite new ones. This is a great interview talking point.

**Infinite scroll or “scroll to top” button.**
Use your throttle on the scroll event, then compare with IntersectionObserver. Explain in the README which you’d pick and why.

**Todo app with persistence.** State array, a render() function, event delegation, localStorage, filter (all/active/done), and edit/delete. Make sure a refresh keeps the data. (add, toggle complete, delete, filter tasks, localStorage persistence)

**Quiz app.** Questions from an API (such as Open Trivia DB) or a local array. Track score and a timer with setInterval, show results at the end, and let the user restart. Practice cleaning up the interval.

**Weather or country dashboard.** Two fetches (a geocode, then the data), Promise.all for parallel requests, try/catch, and a loading state. Cache results in a Map with an expiry time.

**Typeahead autocomplete.** Debounce, keyboard navigation (arrow keys and Enter), highlight the matched text, and close on outside click using event delegation.

**Mini state manager.** Write createStore(reducer) with getState, dispatch, and subscribe (it’s about 15 lines and uses closures). Then use it to rebuild your todo app. It’s a good way to show you understand how libraries like Redux work.

**Flashcard app (your own deck).** Use your real flashcards, with spaced repetition: cards you miss come back sooner. Persist progress in localStorage. You’ll use it to study, which is a nice detail to mention.

---

**To-Do List**

**Task Manager** (add, toggle complete, delete, filter tasks, localStorage persistence)

**Interactive Search/Filter/Autocomplete**
(filter list or table dynamically as the user types, fetch results from a public API with debouncing)

**Counter, Clock, Countdown Timer** (increment/decrement, start/pause/reset using intervals, clean state)

**Forms with Validation, Conditional Fields** (validate required fields, email/password rules, show/hide inputs with radio buttons/checkboxes)

**UI Components** (accordions, modals/toasts, star ratings, tabs, progress bars)

**Browser game** (Tic-tac-toe, memory card matching game)
