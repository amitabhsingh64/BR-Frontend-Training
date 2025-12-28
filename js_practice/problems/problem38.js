//38. Create a function that will convert an array containing ASCII codes in a string

let ascii_arr =[ [ 84, 104, 105, 115 ], [ 105, 115 ], [ 102, 117, 110 ] ];

function ascii2text(ascii_arr){
    let text = "";
    for(i = 0;i<ascii_arr.length;i++){
        let word_ascii = ascii_arr[i];
        for(j = 0;j<word_ascii.length;j++){
            text+=String.fromCharCode(word_ascii[j]);
        }
        text+=" ";
    }
    return text;
}

console.log(ascii2text(ascii_arr));