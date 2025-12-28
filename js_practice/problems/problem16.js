//16. Create a function that will return a Boolean specifying if a number is prime

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

console.log(isPrime(879103));