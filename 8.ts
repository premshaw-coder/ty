const Test = require('assert')

function removeDups(arr:any[]) {
  return Array.from(new Set(arr))
}

console.log(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]));

function test() {
  Test.strictEqual(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor' ])
  Test.strictEqual(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
  Test.strictEqual(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])
  Test.strictEqual(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [1, 2, 3, 5, 6, 7])
  Test.strictEqual(removeDups(['#', '#', '%', '&', '#', '$', '&']), ['#', '%', '&', '$'])
  Test.strictEqual(removeDups([3, 'Apple', 3, 'Orange', 'Apple']), [3, 'Apple', 'Orange'])
}

test()

/*
removeDups([1, 0, 1, 0]) ➞ [1, 0]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
*/