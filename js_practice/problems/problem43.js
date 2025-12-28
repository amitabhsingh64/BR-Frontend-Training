//43. Create a function that will receive a bi-dimensional array as argument and a number
//  and will extract as a unidimensional array the column specified by the number

let matrix = [
  ["John", 120, "Red"],
  ["Jane", 115, "Blue"],
  ["Joe",  100, "Green"]
];
let colIndex = 1;

function columnExtracter(matrix, colIndex){
    let arr = [];
    for(let i = 0;i<matrix.length;i++){
        let row=matrix[i];
        arr.push(row[colIndex]);
    }
    return arr;
}

console.log(columnExtracter(matrix, colIndex));