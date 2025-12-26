//13. Find the maximum number in an array of numbers

const arr = [104,-34,12,-57,89];

function maxInArr(arr){
    let max_arr=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max_arr){
            max_arr = arr[i];
        }
    }
    return max_arr;
}

console.log(`arr => ${arr}`);
console.log(`maxInArr => ${maxInArr(arr)}`);