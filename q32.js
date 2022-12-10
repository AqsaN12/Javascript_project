current_users = ["Ali", "Ibrahim","Ahmad", "Asad", "Husnain"]
new_users = ["Ali", "Ibrahim","Babar", "Husnain"]
is_user_exist = false
new_users.map((new_user)=>{
    for(let index = 0; index <current_users.length; index++){
        if(current_users[index] == new_user){
            is_user_exist = true
            break;
        }else{
            is_user_exist = false
        }
    }
    if(!is_user_exist){
        console.log(`${new_user} username is available`);
    }else{
        console.log(`${new_user} already exist, Please enter a new username`);
    }
})
