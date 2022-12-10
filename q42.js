megicians = ["Rimsha", "Ali", "Fiza"]
make_great=(megicians)=>{
    for(let index = 0; index < megicians.length; index++){
        megicians[index]=`Great, ${megicians[index]}`
    }
}

show_magicians=()=>{
    make_great(megicians)
    return megicians;
}

console.log(show_magicians())