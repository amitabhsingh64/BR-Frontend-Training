//41. Create a function to calculate the distance between 
// two points defined by their x, y coordinates

let coordinate1 = [2,4];
let coordinate2 = [5,9];

function euclidian_distance(coordinate1, coordinate2){
    let distance = Math.sqrt((Math.pow((coordinate1[0]-coordinate2[0]),2)) + Math.pow((coordinate1[1]-coordinate2[1]),2));
    return distance.toFixed(2)
}

console.log(euclidian_distance(coordinate1,coordinate2));