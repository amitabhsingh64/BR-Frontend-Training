//47. Deep copy a jagged array with numbers or other arrays in a new array

let jagged_arr = [1, 2, [3, 4], [5, [6, 7]], 8];

function custonDeepCopy(jagged_arr){
    let copy = [];
    for(let i = 0;i<jagged_arr.length;i++){
        if(!Array.isArray(jagged_arr[i])){
            copy.push(jagged_arr[i]);
        }else{
            copy.push(custonDeepCopy(jagged_arr[i]));
        }
    }
    return copy;
}

console.log(jagged_arr);
console.log(custonDeepCopy(jagged_arr));