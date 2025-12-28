//29. Print the distance between the first 100 prime numbers
function isPrime(num){
    max_f=Number(Math.ceil(num/2));
    n=2;
    while(n<=max_f){
        if(num%n===0){
            return false;
        }
        n++;
    }
    return true;
}
let arr = [];

function prime_arr(arr){
    for(i = 2;arr.length<100;i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    // console.log(`Sum => ${sum}`);
    // console.log(`Array => ${arr}`);
    return arr;
}
arr = prime_arr(arr);
function gap_calculator(arr){
    let arr_gap = [];
    for(i = 1;i<arr.length;i++){
        arr_gap.push(arr[i]-arr[i-1]);
    }
    return arr_gap;
}
arr = gap_calculator(arr);
console.log(arr);