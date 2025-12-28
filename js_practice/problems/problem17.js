//17. Calculate the sum of digits of a positive integer number

num=String(12345)
console.log(typeof(num));
sum=0;
for(i=0;i<num.length;i++){
    sum+=Number(num.charAt(i))
}
console.log(sum);