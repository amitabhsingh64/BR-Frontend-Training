//25. Create a function that will receive two arrays of numbers as arguments and return an array 
// composed of all the numbers that are either in the first array or second array but not in both

let arr1 = [1,2,3,4,10,2];
let arr2 = [5,6,7,8,10];

function merge_unique(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let ans = [];
    let i = 0;
    for(;i<Math.max(arr1.length,arr2.length);i++){
        if(i<arr1.length && !(set2.has(arr1[i]))){
            ans.push(arr1[i]);
        }
        if(i<arr2.length && !(set1.has(arr2[i]))){
            ans.push(arr2[i]);
        }
    }
    console.log(ans);
}
merge_unique(arr1,arr2);