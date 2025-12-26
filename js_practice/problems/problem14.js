//14. Print the first 10 Fibonacci numbers without recursion


let num=10;

function fibonacci(n) {
    if(n<=1) return n;// Handle 0 and 1
    let a=0;
    let b=1;
    for(let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fib_series(num));