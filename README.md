# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install blesmateo/lotide`

**Require it:**

`const _ = require('blesmateo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: function which declares that two arrays are equal.
* assertEqual: function that compares primitive types such as Numbers and Strings.
* assertObjectsEqual: function that takes in two objects and console.log's a message.
* countLetters: function that takes in a sentence as a string and returns a count of each letters within it.
* countOnly: function that takes a collection of items and returns a specific subset of the counts.
* eqArrays: function that takes in two arrays and returns a boolean based on an exact match.
* eqObjects: function that takes in two objects and returns a boolean.
* findKey: function that function that takes in an object and value, it scans the object and returns the first key carrying the given value. It returns undefined when there is no key.
* findKeyValue: function that takes in an object and a value, it scans the object and returns the first key carrying the given value.
* head: function that returns the first item in an array.
* letterPositions: function that returns all zero-based positions in the string where each character is located.
* map: function that returns a new array based on the outcome of the callback function.
* middle: function that returns an array with the middle elements of said array.
* myModule: function that introduces exporting functions.
* tail: function that returns everything in an array with the exception of the first item.
* takeUntil: function that will continually collect items from an array until the callback function returns a truthy value
* without: function that returns a subsection of an array by removing undesired elements.