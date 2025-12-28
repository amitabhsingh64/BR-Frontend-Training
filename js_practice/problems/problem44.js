//44. Create a function that will convert a string containing a binary number into a number

let binaryNotaion = "1111";

function binary2num(binaryNotaion){
    let num = 0;
    for(let i = binaryNotaion.length-1;i>-1;i--){
        if(binaryNotaion.charAt(i)!="0"){
            num += Math.pow(2,i);
        }
    }
    return num;
}

console.log(binary2num(binaryNotaion));