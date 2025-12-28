//32. Create a function that will capitalize the first letter of each word in a text

let sentence = "This is fun.";

function cap_each_word(sentence){
    let sentence_arr = sentence.split(" ");
    for( i = 0; i<sentence_arr.length;i++){
        sentence_arr[i] = sentence_arr[i].charAt(0).toUpperCase() + sentence_arr[i].slice(1);
    }
    //console.log(sentence_arr);
    return sentence_arr.join(" ");
}

console.log(cap_each_word(sentence));