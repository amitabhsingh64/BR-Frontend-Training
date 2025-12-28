//27. Create a function that will receive an array of numbers 
// as argument and will return a new array with distinct elements

let arr = [1,2,2,3,4,4];

let set1 = new Set(arr);

let ans = Array(set1);
console.log(typeof(ans));