//24. Create a function that will merge two arrays and return the result as a new array

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

console.log(`Array 1:   ${arr1}`);
console.log(`Array 2:   ${arr2}`);

for(i = 0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}

console.log(`Merged Array ${arr1}`);