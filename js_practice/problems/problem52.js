//52. Calculate Fibonacci(500) with high precision (all digits)

function fibN(num){
    let a = 0n;
    let b = 1n;

    if(num==0) return a;
    if(num==1) return b;

    for(let i=0;i<=500;i++){
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibN(500).toString());