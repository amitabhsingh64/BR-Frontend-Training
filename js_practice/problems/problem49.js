//49. Shuffle an array of strings

let arr = ["this", "is", "not","random"];

function shuffler(arr){
    for(let i = 0;i<arr.length;i++){
        let random_idx=Math.floor(Math.random()*arr.length);
        let temp = arr[i]
        arr[i] = arr[random_idx];
        arr[random_idx] = temp;
    }
    return arr;
}
console.log(arr);
console.log(shuffler(arr));