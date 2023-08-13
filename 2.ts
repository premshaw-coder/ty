
function removeLeadingTrailing(x: string) {
   return Math.abs(+x)
}
console.log(removeLeadingTrailing("30"));

/*

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"

*/
