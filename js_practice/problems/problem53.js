//53. Calculate 70! with high precision (all digits)

function high_precision_Factorial(num){
    let a = 0n;
    let b = 1n;

    if(num==0 || num==1) return 1;
    let prod =1n;
    for(let i=2n;i<=num;i++){
        prod *=i;
    }
    return prod;
}

console.log(high_precision_Factorial(70).toString());