//48. Create a function to return the longest word in a string

let text = "This is fun";

function longestWord(text){
    let arr = text.split(" ");
    let longest = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(longest.length<arr[i].length){
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longestWord(text));