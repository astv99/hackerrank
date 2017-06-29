### June 28, 2017 - MergeStrings ###

**Goal of exercise**: Write a function that takes a list (array) of strings and merges them all into a single string with all of the letters re-arranged in alphabetical order.

**Examples**:

* `["abc", "cde"]` should return `"abccde"` and `["cde", "abc"]` should also return `"abccde"`
* `["def", "cde", "abc"]` should return `"abccddeef"`

**Files**:

* MergeStrings.java *(source)*
* MergeStringsTest.java *(jUnit test case)*

Use the following commands to run the jUnit test case on Windows CMD:

    javac -cp .;junit-4.12.jar MergeStrings.java
    java -cp .;junit-4.12.jar;hamcrest-core-1.3.jar org.junit.runner.JUnitCore MergeStringsTest