/* JavaScript Additional Info */

// 1) Create new Set([1, 2, 2, 3, 3, 3]). Log its size and contents, then add(2) again and predict the size.

// 2) Predict new Set([NaN, NaN]).size, new Set([0, -0]).size, new Set([{}, {}]).size, and new Set(['1', 1]).size.

// 3) Chain .add(1).add(2).add(2) in one expression. Predict what add returns and why chaining works.

// 4) Call has, delete, and clear. Log the return value of each, including delete on a value that isn’t there.

// 5) Log [...set.keys()], [...set.values()], and [...set.entries()]. Use the output to explain in a comment why the “stores only keys” card is misleading.

// 6) Iterate a Set with for...of and with forEach. Log all arguments your forEach callback receives and predict them first.

// 7) Add 3, 1, 2, delete 1, then add 1 again. Predict the iteration order, then check.

// 8) Remove duplicates from an array in one line, using both Array.from and spread.

// 9) Given an array of {id, name} objects with repeated ids, return one object per id.

// 10) Write union, intersection, and difference for two Sets using filter and has. Then check whether your runtime has built-in versions (recent engines do).

// 11) Write hasDuplicate(arr) with a Set. Compare it to your includes version from earlier: what’s the time complexity of each?

// 12) LeetCode “Longest Substring Without Repeating Characters”: use a Set and a sliding window. Compare it with your checkInclusion approach.

// 13) LeetCode “Happy Number”: use a Set to detect when you’ve seen a number before.

// 14) Create { 'first name': 'Ann', age: 30 } and try to read first name with dot notation. Then use brackets.

// 15) Declare const key = 'age' and predict obj.key and obj[key].

// 16) Given obj = { a: 1, b: 2 } and arr2 = ['a', 'b'], build [1, 2] using obj[arr2[i]]. Then try obj.arr2[i] and read the error message. Explain why it fails.

// 17) Predict obj[1] and obj['1'] after obj[1] = 'x'. Is obj.1 valid syntax?

// 18) Write countLetters(str) with a plain object and counts[ch] = (counts[ch] || 0) + 1. Then run it on the words "constructor" and "toString" as keys. Predict what breaks.

// 19) Fix exercise 18 three ways: Object.create(null), Object.hasOwn, and a Map. Write down when each is best.

// 20) Create a Map, then set, get, has, delete, and check size. Predict what get returns for a missing key, and what set returns.

// 21) Initialize a Map from [['a', 1], ['b', 2]].

// 22) Use an object as a key: map.set({}, 1); map.get({}). Predict the result, then fix it. Also test NaN as a key.

// 23) Do the same with a plain object: obj[{a: 1}] = 'x'; obj[{b: 2}] = 'y'. Log Object.keys(obj) and explain.

// 24) Log Array.from(map), [...map.keys()], [...map.values()], and [...map.entries()]. Predict the shape of each.

// 25) Iterate with for (const [key, value] of map) and with forEach. Predict the callback’s argument order, and compare with array forEach. (This is one reason map.values().every(...) in your earlier code needed a spread.)

// 26) Convert between Map and object with Object.fromEntries(map) and new Map(Object.entries(obj)). What gets lost with non-string keys?

// 27) Predict JSON.stringify(new Map([['a', 1]])), then write a function that serializes a Map properly.

// 28) Create { b: 1, a: 2, 2: 3, 1: 4 } and predict Object.keys. Do the same entries in a Map and compare the order.

// 29) Benchmark adding and deleting 1,000,000 keys in a Map vs an object using console.time. Run it several times. Does the “Maps are faster” card hold up?

// 30) Rewrite your checkInclusion from earlier as a proper sliding window with a Map of counts.

// 31) LeetCode “Two Sum” with a Map of value to index.

// 32) LeetCode “Valid Anagram”, then “Group Anagrams” (key = sorted letters, value = array of words).

// 33) Find the first non-repeating character in a string using a Map, relying on its insertion order.

// 34) Build an LRU cache with a Map. Delete and re-set a key to mark it recently used, and evict the first key when over capacity.

// 39) Loop over [10, 20, 30] with both. Log typeof the variable in each, and predict i + 1 in the for...in version.

// 40) Add arr.foo = 'x' and then an enumerable Array.prototype.extra = 1. Predict what each loop shows, then remove the prototype change.

// 41) Use for...of on a plain object and read the error. Fix it with Object.entries.

// 42) Use Object.create(parent) and run for...in on the child. Filter out inherited keys with Object.hasOwn.

// 43) Compare '😀'.length with [...'😀'].length, and loop over it with both an index loop and for...of.

// 44) Use for (const [i, v] of arr.entries()) to get both index and value. Then write isIterable(x) by checking Symbol.iterator.
