const Test = require('assert')
function testJackpot(result) {
    return new Set(result).size === 1 ? true : false
}

console.log(testJackpot(["@", "@", "@", "@"]));

function test() {
    Test.strictEqual(testJackpot(['@', '@', '@', '@']), true)
    Test.strictEqual(testJackpot(['!', '!', '!', '!']), true)
    Test.strictEqual(testJackpot(['abc', 'abc', 'abc', 'abc']), true)
    Test.strictEqual(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true)
    Test.strictEqual(testJackpot(['SS', 'SS', 'SS', 'SS']), true)
    Test.strictEqual(testJackpot([':(', ':)', ':|', ':|']), false)
    Test.strictEqual(testJackpot(['&&', '&', '&&&', '&&&&']), false)
    Test.strictEqual(testJackpot(['hee', 'heh', 'heh', 'heh']), false)
    Test.strictEqual(testJackpot(['SS', 'SS', 'SS', 'Ss']), false)
    Test.strictEqual(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false)
}

test()
/*
testJackpot(["@", "@", "@", "@"]) ➞ true
*/