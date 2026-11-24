/* Working with JavaScript Strings */

// 1) Write lastChar(str) that returns the last character using bracket notation and .length.

// 2) Loop over a string with a for loop and log each character on its own line.

// 3) Predict the results of typeof 'hi' and typeof new String('hi'). Then explain in a comment why you can call 'hi'.toUpperCase() even though 'hi' is a primitive.

// 4) Write countOccurrences(str, char) using indexOf in a loop. (Hint: it accepts a second argument for where to start searching.)

// 5) Given "archive.tar.gz", use lastIndexOf and substring to get the file extension.

// 6) Write findWord(sentence, word) that returns "Found at index X" or "Not found", handling the -1 case.

// 7) Write a function that returns the first 3 and last 3 characters of any string.

// 8) Predict, then verify, the output of 'airline'.substring(1, -1), 'airline'.substring(4, 1), and 'airline'.substring(2).

// 9) Given "John Smith", use indexOf and substring to extract the first and last name into separate variables.

// 10) Write fixName(name) so "jOHN" becomes "John", using charAt(0), toUpperCase, substring, and toLowerCase.

// 11) Write titleCase(sentence) so "the quick brown fox" becomes "The Quick Brown Fox" (you’ll need split, map, and join).

// 12) Write normalizeEmail(email) so "Alice@Example.COM" becomes "alice@example.com".

// 13) Write equalsIgnoreCase(a, b) that returns true for "Knife" and "knife". Then explain why "Knife" === "knife" is false.

// 14) In a single chained expression, take "Hello World", lowercase it, replace "world" with "there", then uppercase the whole thing.

// 15) Replace only the first "cat" in "cat cat cat".

// 16) Replace every "cat" in that string with "dog" two ways: a regex with the g flag, then replaceAll.

// 17) Write censor(text, badWord) that replaces every occurrence of badWord with "***".

// 18) Predict the output of "a.b.c".replace(".", "-") and "a.b.c".replaceAll(".", "-").

// 19) Write wordCount(sentence) using split.

// 20) Reverse a string using split, reverse, and join. (reverse is the one new method here.)

// 21) Convert "snake_case_string" to "kebab-case-string" using split and join.

// 22) Reverse the order of the words in a sentence: "I love JS" becomes "JS love I".

// 23) Format the number 7 as "007" using padStart. (What do you have to do to the number first?)

// 24) Write maskCard(number) so "4111111111111234" becomes "************1234", using slice(-4) and padStart.

// 25) Given an array of {name, price} objects, print a table where names are left-aligned with padEnd and prices are right-aligned with padStart.

// 26) Write formatTime(hours, minutes) so (5, 3) returns "05:03".

// 27) Predict the output of "5" + 3, 5 + 3 + "5", and "5" + 3 + 5.

// 28) Print a triangle of stars, one row per line, using repeat:

// 29) Write divider(title) that returns the title surrounded by = characters, like "==== Title ====".

// 30) Write isSecure(url) that returns true if the URL starts with "https://".

// 31) Given an array of filenames, return only those ending in ".js".

// 32) Write containsBanned(text, bannedWords) that checks, case-insensitively, whether the text includes any word from the array.

// 33) Write looksLikeEmail(str) that returns true if the string includes "@" and ends with ".com".

// 34) Write makeUsername(first, last) that returns the lowercase first initial plus the last name, like "jsmith", padded with "_" at the end to at least 8 characters.

// 35) Write countVowels(str) that is case-insensitive.

// 36) Write isPalindrome(str) that ignores case and spaces, so "Taco cat" returns true. This one shows up in coding interviews.
