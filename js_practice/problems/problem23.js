//23. Reverse a string

let s = "123";
let ans = "";
console.log(s);
for(i = s.length-1;i>-1;i--){
    ans=ans.concat(s.charAt(i));
}

console.log(ans);