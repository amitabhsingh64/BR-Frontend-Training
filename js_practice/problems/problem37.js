//37. Create a function that will convert a string 
// in to an array containing the ASCII codes of each character

let text = "This is fun";

function text2ascii(text){
    let word_arr = text.split(" ");
    let ascii_arr = [];
    for(i = 0;i<word_arr.length;i++){
        let word = word_arr[i];
        let arr = [];
        for(j =0;j<word.length;j++){
            arr.push(word.charCodeAt(j));
        }
        ascii_arr.push(arr);
        arr = [];
    }
    return ascii_arr;
}
console.log(text2ascii(text));