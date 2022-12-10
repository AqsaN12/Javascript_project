// check fruit exist in array

isExist = (fruits, selectedItem) =>{
    for(let index=0; index<fruits.length; index++){
        if(fruits[index] == selectedItem){
            return true;
        }
        if(index == fruits.length-1){
            if(fruits[index] == selectedItem){
                return true;
            }
            return false;
        }
    }
}


favorite_fruits = ["Bananas", "Apple", "Orange", "Graps"]
if(isExist(favorite_fruits, "Apple")){
    console.log(`You really like Apple!`)
}
if(isExist(favorite_fruits, "Graps")){
    console.log(`You really like Graps!`)
}
if(isExist(favorite_fruits, "Mango")){
    console.log(`You really like Mango!`)
}
if(isExist(favorite_fruits, "Pineapple")){
    console.log(favorite_fruits, `You really like Pineapple!`)
}
if(isExist(favorite_fruits, "Watermelon")){
    console.log(`You really like Watermelon!`)
}
