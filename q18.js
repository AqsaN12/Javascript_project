var places = ["Positano", "Italy", "Kauai", "Hawaii", "Paris"]
console.log("Original Order =", places)
// sort array alphabetically order
console.log("\nAlphabetical Order =", places.sort())

// Original Array
console.log("Sort to original order =", places.so)

console.log("\nReverse Alphabetical Order =", places.sort().reverse())

console.log("Reverse Alphabetical to original Order =", places)

// Reverse Order of Array
temArray = places.slice()
count=0
for(let index=temArray.length; temArray.length>=0; index --){
    if(index-1 == 0){
        places[count] =temArray[index-1]
        break;
    }else{
        places[count] =temArray[index-1]
    }
    count ++
}
console.log("\nReverse Order of Array =", places)

// Reverse Order of Array
temArray = places.slice()
count=places.length
for(let index=0; temArray.length<=0; index ++){
    if(index == places.length){
        places[count] =temArray[index]
        break;
    }else{
        places[count] =temArray[index]
    }
    count --
}
console.log("Reverse Order to Original Array =", places)
