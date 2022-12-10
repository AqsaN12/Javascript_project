var name = "Rimsha Malik"

console.log("UpperCase")
console.log(name.toUpperCase())
console.log("LowerCase")
console.log(name.toLowerCase())
console.log("TitleCase")
var lowerString = name.toLowerCase()
var arrayString = lowerString.split(' ')
var caseTitleName = ""
for(let i=0; i<arrayString.length; i++){
    // replace first charactor with upper case
    caseTitleName = caseTitleName.concat(" ", arrayString[i].replace(arrayString[i].split('')[0], 
    arrayString[i].split('')[0].toUpperCase())).trim()
}

console.log(caseTitleName)


