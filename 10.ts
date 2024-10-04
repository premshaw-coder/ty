function sevenBoom(arr: number[]) {
    let res: string = 'there is no 7 in the array'
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]).includes('7')) {
            res = 'Boom!'
            break;
        }
        else res
    }
    return res
}

console.log(sevenBoom([2, 55, 60, 96, 86, 78,32]))




/*

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

*/
