// 5.	5. Count how many even numbers are in an array.

let arr = [1,2,3,4,5,6,6,7,8,9,0,10,54,33,65,76,53,87,88,68,55,68,]
let even = []
for (let i = 0; i< arr.length; i++) {
    if (arr[i]%2 === 0 ) {
        even.push(arr[i])
    //    even = arr[i];
    //    even ++;
    }
   
}
// console.log(even);

console.log(even);

// output
// 2, 4, 6, 6, 8, 0, 10, 54, 76, 88, 68, 68;

