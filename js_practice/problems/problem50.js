//50. Create a function that will receive n as argument and return an array 
// of n random numbers from 1 to n. The numbers should be unique inside the array.

let n = 50;

function shuffler(arr){
    for(let i = 0;i<arr.length;i++){
        let random_idx=Math.floor(Math.random()*arr.length);
        let temp = arr[i]
        arr[i] = arr[random_idx];
        arr[random_idx] = temp;
    }
    return arr;
}

function unique_n_shuffler(n){
    let arr = [];
    for(let i = 1;i<n+1;i++){
        arr.push(i);
    }
    arr = shuffler(arr);
    return arr;
}

console.log(unique_n_shuffler(50).length);