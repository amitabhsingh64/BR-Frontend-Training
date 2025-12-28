//33. Calculate the sum of numbers received in a comma delimited string

let num_string = "1,2,3,4,5";

function sum_string(num_string){
    let arr = num_string.split(",");
    let sum = 0;
    for(i = 0;i<arr.length; i++){
        sum+= Number(arr[i]);
    }
    return sum;
}
console.log(sum_string(num_string));