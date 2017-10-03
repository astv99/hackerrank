### October 2, 2017 - javascript/longestevenword ###

**Goal of exercise**: Write a function that takes a string of English-language sentence form and returns the first longest even-length word that appears in the sentence (if there are multiple equally-sized even-length words).

**Examples**:

* `It is a pleasant day today` should return `pleasant`
* `hey` should return `00` (due to no even-length words)

**Files**:

* q4-longestevenword.js *(source)*
* q4-longestevenword-test.js *(Chai test case)*

Use the following commands to install Chai & run the test case:

    npm install chai --save-dev
	mocha q4-longestevenword-test.js

----------

### June 28, 2017 - java/mergestrings ###

**Goal of exercise**: Write a function that takes a list (array) of strings and merges them all into a single string with all of the letters re-arranged in alphabetical order.

**Examples**:

* `["abc", "cde"]` should return `"abccde"` and `["cde", "abc"]` should also return `"abccde"`
* `["def", "cde", "abc"]` should return `"abccddeef"`

**Files**:

* MergeStrings.java *(source)*
* MergeStringsTest.java *(jUnit test case)*

Use the following commands to run the JUnit test case on Windows CMD:

    javac -cp .;junit-4.12.jar MergeStrings.java
    java -cp .;junit-4.12.jar;hamcrest-core-1.3.jar org.junit.runner.JUnitCore MergeStringsTest