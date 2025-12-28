//35. Create a function to convert a CSV text to a “bi-dimensional” array

let text = "Name,Age,City\nJohn,25,New York\nAlice,30,London";
function csv2arr2d(text){
    let arr = text.split("\n");
    let final_arr = [];
    for(i = 0;i<arr.length;i++){
        let row = arr[i];
        let row_arr = row.split(",");
        final_arr.push(row_arr);
    }
    return final_arr;
}
console.log(csv2arr2d(text));