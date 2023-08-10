var isClicked = false

document.getElementById("menuSandwich").addEventListener("click", function(){

    if (isClicked=false){
        document.getElementById("line01").style.rotate = "45deg"
        document.getElementById("line02").style.rotate = "45deg"
        document.getElementById("line03").style.rotate = "45deg"  
        isClicked = true
        console.log("gira")
    } 
    return isClicked
});

document.getElementById("menuSandwich").addEventListener("click", function(){

    if (isClicked=true){
        document.getElementById("line01").style.rotate = "0deg"
        document.getElementById("line02").style.rotate = "0deg"
        document.getElementById("line03").style.rotate = "0deg"  
        isClicked = false
        console.log("volta")
    } 
    return isClicked

});
   
    