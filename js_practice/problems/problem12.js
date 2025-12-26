//12. Create a function that receives an array of numbers as argument and 
//     returns an array containing only the positive numbers.

// let arr = [10,34,12,57,89];
// // reversed arr = [89,57,12,34,10]


// function reverse_arr(arr){
//     for(let i=0;i<Math.floor(arr.length/2);i++){
//         let temp = arr[i];
//         arr[i]=arr[arr.length-1-i];
//         arr[arr.length-1-i]=temp;
//     }
//     return arr;
// }

// console.log(`arr => ${arr}`);
// console.log(`reversed_arr => ${reverse_arr(arr)}`);

let arr = [10,-34,12,-57,89];
// reversed arr = [10,12,89]


function positive_arr(arr){
    let arr_ans=[];
    for(let i=0;i<arr.length;i++){
        if(Number(arr[i])>0){
            arr_ans.push(arr[i]);
        }
    }
    return arr_ans;
}

console.log(`arr => ${arr}`);
console.log(`positive_arr => ${positive_arr(arr)}`);