var guestList = ["Rimsha", "Noorain", "Aqsa", "Ali"]
console.log("you can invite only two people for dinner\n")
// remove member untill two remain and save removed members to another variable
var removedGuestList=guestList.splice(0,2)
removedGuestList.map(function(removedGuest){
    console.log(`Sorry, ${removedGuest} can't make the dinner.`)
})
console.log("\n")

// Invite last two guest for dinner
guestList.map(function(guest){
    console.log(`Hello ${guest}, I am inviting you to dinner.`)
})

// remove last two guest
guestList.splice(0,2)
console.log("\n", guestList)
