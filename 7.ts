const Test = require('assert')
function DECIMATOR(arr:string) {
  return arr.slice(0,arr.length-Math.ceil((arr.length)/10))   
}

console.log(DECIMATOR("123"));

function test() {

    Test.strictEqual(DECIMATOR("1234567890"), "123456789")
    Test.strictEqual(DECIMATOR("1234567890AB"), "1234567890")
    Test.strictEqual(DECIMATOR("123"), "12")
    Test.strictEqual(DECIMATOR("123456789012345678901"), "123456789012345678")
    Test.strictEqual(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ABCDEFGHIJKLMNOPQRSTUVW")
    Test.strictEqual(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst")
    Test.strictEqual(DECIMATOR("A"), "")
    Test.strictEqual(DECIMATOR(""), "")
}

test()
/*
DECIMATOR("1234567890") ➞ "123456789"
// 10 characters, removed 1.

DECIMATOR("1234567890AB") ➞ "1234567890"
// 12 characters, removed 2.

DECIMATOR("123") ➞ "12"
// 3 characters, removed 1.

DECIMATOR("123456789012345678901") ➞ "123456789012345678"
// 21 characters, removed 3.
*/