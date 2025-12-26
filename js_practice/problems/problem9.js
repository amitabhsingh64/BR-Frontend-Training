//9. Create a function that will convert from Fahrenheit to Celsius

let input_temp=100;
function convert(input_temp){
    temp = Number(input_temp);
    temp = (temp-32) * (5 /9);
    return temp.toFixed(1) + "°C";
}

console.log(convert(input_temp));