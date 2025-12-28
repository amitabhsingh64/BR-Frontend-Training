//19. Create a function that will return in an array the first “p” prime numbers greater than “n”

//question unclear
/*
You need to build a logical process (a function) that takes two inputs and produces one specific output list.:

Input n: The starting threshold. You only care about numbers strictly larger than this number.
Input p: The "target count." This is how many prime numbers you need to find.
Output: An array (or list) containing exactly p prime numbers.
*/

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
let ans=[];
function custom_prime_list(p,n){
    for(i=n+1;(ans.length<=p-1);i++){
        if(isPrime(i)){
            ans.push(i);
        }
    }
}
custom_prime_list(5,1);
console.log(ans);