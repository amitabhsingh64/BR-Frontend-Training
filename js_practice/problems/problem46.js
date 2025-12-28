//46. Find the maximum number in a jagged array of numbers or array of numbers

let jagged_arr = [1, 2, [3, 4], [5, [6, 7]], 8];

function jagged_arr_max(jagged_arr){
    let maxNum = -Infinity;
    for(let i = 0;i<jagged_arr.length;i++){
        if(!Array.isArray(jagged_arr[i])){
            if(maxNum<jagged_arr[i]){
                maxNum = jagged_arr[i];
            }
        }else{
            let maxNumLocal = jagged_arr_max(jagged_arr[i]);
            if(maxNumLocal>maxNum){
                maxNum = maxNumLocal;
            }
        }
    }
    return maxNum;
}

console.log(jagged_arr_max(jagged_arr));