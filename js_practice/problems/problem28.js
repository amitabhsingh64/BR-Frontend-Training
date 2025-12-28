//28. Calculate the sum of first 100 prime numbers and return them in an array

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

let sum = 0;
let arr = [];

function prime_arr(arr,sum){
    for(i = 2;arr.length<100;i++){
        if(isPrime(i)){
            sum+=i;
            arr.push(i);
        }
    }
    console.log(`Sum => ${sum}`);
    console.log(`Array => ${arr}`);
}

prime_arr(arr,sum);