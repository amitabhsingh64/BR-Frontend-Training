//34. Create a function that returns an array with words inside a text.

let text = ("Hello, world! How are you?");
//let parsed_text = text.split(/[,;! ]+/);


function text_parser(text){
    let arr = text.split(" ");
    for( i = 0;i<arr.length;i++){
        let word = arr[i];
        let parsed_word = "";
        for(j = 0;j<word.length;j++){
            if((word.charCodeAt(j)>=65 && word.charCodeAt(j)<=90) || word.charCodeAt(j)>=97 && word.charCodeAt(j)<=122){
                parsed_word+=word.charAt(j);
            }
        }
        arr[i]=parsed_word;
        parsed_word = "";
    }
    return arr;
}
console.log(text_parser(text));