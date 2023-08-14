const Test = require('assert')
function findNemo(result: string) {
    if(result.split(' ').indexOf('Nemo')===-1) return "I can't find Nemo :("
    return `I found Nemo at ${result.split(' ').indexOf('Nemo')}!`
}

console.log(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"));

// function test() {

// Test.assertEquals(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!")
// Test.assertEquals(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!")
// Test.assertEquals(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!")
// Test.assertEquals(findNemo("Oh, hello !"), "I can't find Nemo :(")
// Test.assertEquals(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"), "I can't find Nemo :(")
// Test.assertEquals(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"), "I found Nemo at 1!")

// }

// test()
/*
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/