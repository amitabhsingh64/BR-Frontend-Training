//21. Rotate an array to the right 1 position

let arr = [1,2,4,5,6];
let num=arr[arr.length-1];
console.log(arr);
arr.pop();
arr.unshift(num);

console.log(arr);