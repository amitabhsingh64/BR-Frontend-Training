//11. Calculate the average of the numbers in an array of numbers

let arr = [10,34,12,57,89];
//average=40.4
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
let average=sum/arr.length;
console.log(average);