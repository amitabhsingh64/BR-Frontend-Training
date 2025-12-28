//42. Create a function that will return a Boolean value indicating if 
// two circles defined by center coordinates and radius are intersecting

// format coordinate => [X, Y, radius];

let coordinate1 = [2, 4, 1];
let coordinate2 = [5, 9, 2];

// my logic =>  if euclidian_distance <= radius1 + radius2 , then intersecting = True
function euclidian_distance(coordinate1, coordinate2){
    let distance = Math.sqrt((Math.pow((coordinate1[0]-coordinate2[0]),2)) + Math.pow((coordinate1[1]-coordinate2[1]),2));
    return distance
}

function isIntersecting(coordinate1, coordinate2, euclidian_distance){
    let distance=euclidian_distance(coordinate1,coordinate2);
    if(distance<=coordinate1[2]+coordinate2[2]){
        return true;
    }else{
        return false;
    }
}

console.log(isIntersecting(coordinate1, coordinate2, euclidian_distance));
