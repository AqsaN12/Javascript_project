var guest_list = ["Rimsha", "Noorain", "Aqsa", "Ali"]
console.log(`Sorry, ${guest_list[0]} can't make the dinner.`)
// remove the person who cannot make the dinner from the list and add new guest
guest_list.splice(0,1,"Muskan")

// print new list of guest to invite on dinner
guest_list.map(function(guest){
    console.log(`Hello ${guest}, I am inviting you to dinner.`)
})