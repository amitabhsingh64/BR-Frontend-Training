//15. Create a function that will find the nth Fibonacci number using recursion

//formula: Fn = Fn-1 + Fn-2

let num=10;

function fib_series(num){
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    return fib_series(num-1) + fib_series(num-2)
}

console.log(fib_series(num));