// //45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)

let jagged_arr = [1, 2, [3, 4], [5, [6, 7]], 8];

function jagged_arr_sum(jagged_arr){
    let sum = 0;
    for(let i = 0;i<jagged_arr.length;i++){
        if(!Array.isArray(jagged_arr[i])){
            sum +=jagged_arr[i];
        }else{
            sum += jagged_arr_sum(jagged_arr[i]);
        }
    }
    return sum;
}

console.log(jagged_arr_sum(jagged_arr));