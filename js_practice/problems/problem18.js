//18. Print the first 100 prime numbers
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

for(i=1;i<=100;i++){
    if(isPrime(i)){
        console.log(`<=${i}=>`);
    }
}

