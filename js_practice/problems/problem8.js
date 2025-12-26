//8. Create a function that will convert from Celsius to Fahrenheit
let input_temp=-40;
function convert(input_temp){
    temp = Number(input_temp);
    temp = temp * 9 / 5 + 32;
    return temp.toFixed(1) + "°F";
}

console.log(convert(input_temp));