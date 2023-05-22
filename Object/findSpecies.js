// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;

let black={age:5,species:'dog'}
function findSpecies(arr) {
    let arr1=[]
    for (let i=0 ; i<arr.lengh;i++){
        arr1.push(arr[i].species)
    }
    return arr1;
}
