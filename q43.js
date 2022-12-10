make_great=(megicians)=>{
    new_megicians = megicians.splice(0, megicians.length)
    for(let index = 0; index < new_megicians.length; index++){
        new_megicians[index]=`Great, ${new_megicians[index]}`
    }
    return new_megicians;
}

show_magicians=(megicians)=>{
    console.log("Original Array:", megicians)
    console.log("New Array:",make_great(megicians))
}

megicians = ["Rimsha", "Ali", "Fiza"]
show_magicians(megicians)