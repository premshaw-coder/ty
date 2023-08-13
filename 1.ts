
function generation(x: number, y: string): string {
    let object = [{
        'g': -3,
        "f": "great grandmother",
        "m": "great grandfather"
    }, {
        'g': -2,
        "f": "grandmother",
        "m": "grandfather"
    }]
    let val 
    object.forEach((data:any) => {
       if (data?.g === x && Object.keys(data).includes(y)) return val= data[y]
    })
    return val
}
console.log(generation(-2, 'f'));

/*
generation(-2, "f") ➞ "grandmother"

generation(-3, "m") ➞ "great grandfather"

*/
