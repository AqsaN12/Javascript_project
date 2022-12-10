obj={
    mountains:["K2", "Karakoram","Kangchenjunga", "HimalayasMount", "Everest", "Himalayas"],
    rivers:["Indus", "Jhelum", "Chenab", "Ravi", "Sutlej", "Kabul"], 
    countries:["Pakistan", "USA", "Germany", "China", "Japan"], 
    cities:["Lahore", "Multan", "Karachi", "Sialkot", "Hydrabad"], 
    languages:["English", "Urdu", "French", "Arabic"] 
}
keys=Object.keys(obj)
keys.map(key =>{
    console.log("PRINT",key.toUpperCase())
    obj[key].forEach(item => {
        console.log(item)
    });
    console.log("\n")
})