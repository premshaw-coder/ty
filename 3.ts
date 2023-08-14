const Test = require('assert')

function reverseWords(area: string) {
    return area.trim().split(' ').reverse().join(' ')
}
console.log(reverseWords("  the sky is blue"));

function test() {
    Test.strictEqual(reverseWords("hello world!"), "world! hello",)
    Test.strictEqual(reverseWords("blue is sky the"), "the sky is blue")
    Test.strictEqual(reverseWords("a good example"), "example good a")
    Test.strictEqual(reverseWords("fraud! of example another is this"), "this is another example of fraud!")
    Test.strictEqual(reverseWords("man! the are You"), "You are the man!")
}
test()

/*
reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello   world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a"
*/