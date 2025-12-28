//40. Implement the bubble sort algorithm for an array of numbers

let arr = [4,3,5,2,6,1,9,7,8];

function bubble_sort(arr){
    let temp=0;
    for(let i = 0;i<arr.length;i++){
        for(let j=0;j+1<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

bubble_sort(arr);