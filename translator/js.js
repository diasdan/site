
var isClick = false;

document.getElementById("countryBall").addEventListener("click", function(){
    
    let img = document.getElementById("countryIcon");
    
    if(!isClick){
        img.outerHTML = '<img id="countryIcon" src="assets/img/us.png" alt="">'
        this.style.marginLeft = "12px";
        this.style.backgroundImage.replace("assets/img/br.png","assets/img/us.png");
        isClick = true;
    }
    else {
        img.outerHTML = '<img id="countryIcon" src="br.png" alt="">'
        this.style.marginLeft = "1px";
        this.style.backgroundImage = "assets/img/us.png";
        isClick = false;
        
    }
    translate(isClick);
});

function translate(isClick){
    console.log("Funcionou!")
}