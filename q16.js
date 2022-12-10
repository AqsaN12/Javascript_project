var guest_list = ["Rimsha", "Noorain", "Aqsa", "Ali"]
// add new guest to the beginning of array
guest_list.unshift("Tayab")
console.log("Show list after adding guest in the beginning of array.")
console.log(guest_list)
//  add new guest to the middle of array
console.log("Show list after adding guest in the middle of array.")
guest_list.splice(guest_list.length/2,0,"Huzaifa")
console.log(guest_list)

//  add new guest to the middle of array
console.log("Show list after adding guest in the end of array.")
guest_list.push("Alia Butt")
console.log(guest_list)
console.log("\n")
// print new list of guest to invite on dinner
guest_list.map(function(guest){
    console.log(`Hello ${guest}, I am inviting you to dinner.`)
})