//31. Create a function that will return the number of words in a text

let sentence = "This is fun.";

function word_count(sentence){
    let sentence_arr = sentence.split(" ");
    return sentence_arr.length
}

console.log(word_count(sentence));