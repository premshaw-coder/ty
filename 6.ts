const Test = require('assert')
function matchLastItem(arr: any[]) {
    let lastvalue = arr.pop()
    return arr.join('') === lastvalue ? true : false
}

console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

function test() {

    Test.strictEqual(matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']), true)
    Test.strictEqual(matchLastItem([ 0, 1, 2, 3, 4, 5, '12345' ]), false)
    Test.strictEqual(matchLastItem([ 'for', 'mi', 'da', 'bel', 'formidable' ]), false)
    Test.strictEqual(matchLastItem([8, 'thunder', true, '8thundertrue']), true)
    Test.strictEqual(matchLastItem([ 1, 1, 1, '11' ]), false)
    Test.strictEqual(matchLastItem(['tocto','G8G','xtohkgc','3V8','ctyghrs',100.88,'fyuo','Q','toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ']), true)
}

test()
/*
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
*/