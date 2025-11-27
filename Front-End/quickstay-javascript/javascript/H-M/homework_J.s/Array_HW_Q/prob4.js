// 4.	4. Find the minimum number in an array.

let arr = [38, 669, 60, 98, 675, 99, 209];
let min= arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }


}
console.log(min);

// output
// 38
