// Tests for equality and inequality with strings
let car = 'subaru';
console.log(car=="bmw" ? "True" : "False")

console.log(car!="bmw" ? "True" : "False")

//  Tests using the lower case function
car = 'Subaru';
console.log(car=="subaru".toLowerCase() ? "True" : "False")

console.log(car!="subaru".toLowerCase() ? "True" : "False")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
totalCar = 2;
if (totalCar == 2){
    console.log("Equality ", totalCar)
}
if(totalCar != 2){
    console.log( totalCar, " Not Equalt to 2 ")
}
if(totalCar >= 2){
    console.log( totalCar, " Greater than and Equalt to 2 ")
}
if(totalCar <= 2){
    console.log( totalCar, " Less than and Equalt to 2 ")
}
// Tests using "and" and "or" operators

car = "bmw"
console.log(car == "bmw" && car == "suzuki" ? "True" : "False")
console.log(car == "bmw" || car == "suzuki" ? "True" : "False")

// Test whether an item is in a array OR //  Test whether an item is not in a array
itemName = "USA";
countries = ["Pakistan", "USA", "Germany", "China", "Japan"]
for(let index = 0; index < countries.length; index++){
    if(countries[index] == itemName){
        console.log(`${itemName} Found!`)
        break;
    }else{
        if(index == (countries.length -1)){
            console.log(`${itemName} Not  Found!`)
        }
    }
}


