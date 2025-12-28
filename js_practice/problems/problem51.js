//51. Find the frequency of letters inside a string. Return the result as an
//  array of arrays. Each subarray has 2 elements: letter and number of occurrences.

let text = "this is fun";

function freqMap(text){
    let fmap = new Map();
    for(let i=0;i<text.length;i++){
        if(fmap.has(text.charAt(i))){
            fmap.set(text.charAt(i),fmap.get(text.charAt(i))+1);
        }else{
            fmap.set(text.charAt(i),1);
        }
    }
    let arr = [];
    for(let records of fmap.entries()){
        arr.push(records);
    }
    return arr;
}

console.log(freqMap(text));