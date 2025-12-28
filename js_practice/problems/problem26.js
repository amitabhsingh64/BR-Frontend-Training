//26. Create a function that will receive two arrays and will return an array 
// with elements that are in the first array but not in the second.

let arr1 = [1,2,3,4,10];
let arr2 = [2,7,8,9];
let ans = [];

function left_join(arr1, arr2){
    let set2 = new Set(arr2);
    for(i = 0;i<arr1.length;i++){
        if(!set2.has(arr1[i])){
            ans.push(arr1[i]);
        }
    }
    return ans;
}

console.log(left_join(arr1,arr2));