


document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("theme_circle");
    var isClicked = false;
    const themeToggle = document.querySelector('#theme_selector');
    const root = document.documentElement;
    

    
    themeToggle.addEventListener('click', () => {
        
        root.classList.toggle('dark');
        //updateFilter();

    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
    }

    document.querySelector("#theme_selector").addEventListener("click", function(){ 
        const icons = document.querySelectorAll(".icons");
        if (isClicked){  
            circle.style.marginLeft = "0px";
            isClicked = true;
            icons.forEach(icon => {
                icon.style.filter = "invert(0)";
            })
            
    
        } else {
            circle.style.marginLeft = "20px";
            isClicked = false;
            icons.forEach(icon => {
                icon.style.filter = "invert(1)";
            })
 
        }
        isClicked = !isClicked;
    }); 

});

document.addEventListener("DOMContentLoaded", function() {
   var isMenuClicked = false;

   document.querySelector("#menu-wrapper").addEventListener("click", function(){ 
    const lineT = document.querySelector("#tLine");
    const lineM = document.querySelector("#mLine");
    const lineB = document.querySelector("#bLine");
    const menuMobile = document.querySelector("#mobile-menu") 

    if (!isMenuClicked){ 
        menuMobile.style.display = "inline-block"
        lineT.animate([
            {transform: "rotateZ(0) translateY(0)"},
            {transform: "rotateZ(-135deg) translateY(-14px)"}
        ],
        {   
            duration: 300,
            fill: 'forwards'
            },
        );

        lineM.animate([
            {   
                transform: "translateX(0)",
                visibility: "visible"
            },
            {   
                transform: "translateX(45px)",
                visibility: "hidden"
            }
        ],
        {   
            duration: 300,
            fill: 'forwards'
            },
        );

        lineB.animate([
            {transform: "rotateZ(0) translateY(0)"},
            {transform: "rotateZ(135deg) translateY(14px)"}
        ],
        {   
            duration: 300,
            fill: 'forwards'
            },
        );

    } else {

        menuMobile.style.display = "none"
        lineT.animate([
            {transform: "rotateZ(45deg) translateY(14px)"},
            {transform: "rotateZ(0) translateY(0)"}
        ],
        {   
            duration: 300,
            fill: 'forwards'
            },
        );

        lineM.animate([
            {   
                transform: "translateX(45px)",
                visibility: "hidden"
            },
            {   
                transform: "translateX(0)",
                visibility: "visible"
            }
        ],
        {   
            duration: 300,
            fill: 'forwards'
            },
        );

        lineB.animate([
            {transform: "rotateZ(-45deg) translateY(-14px)"},
            {transform: "rotateZ(0) translateY(0)"}
        ],
        {   
            duration: 300,
            fill: 'forwards'
            },
        );
    
    }
    isMenuClicked = !isMenuClicked;
    }); 

});

document.getElementById("github-link").addEventListener("mouseover", function(){
    document.querySelector(".git-icon").style.height = "24px"
    this.style.fontSize = "18px";
  });

  document.getElementById("github-link").addEventListener("mouseout", function(){
    document.querySelector(".git-icon").style.height = "20px"
    this.style.fontSize = "16px";
  });

  document.getElementById("linkedin-link").addEventListener("mouseover", function(){
    document.querySelector(".linkedin-icon").style.height = "24px"
    this.style.fontSize = "18px";
  });

  document.getElementById("linkedin-link").addEventListener("mouseout", function(){
    document.querySelector(".linkedin-icon").style.height = "20px"
    this.style.fontSize = "16px";
  });


  // circle menus

  addEventListener("load", function(){
    circleParagraph = document.getElementById("p01");
    circleParagraph.style.fontSize = "1px";
    circleParagraph.style.visibility = "hidden";
});

addEventListener("load", function(){
    circleParagraph = document.getElementById("p02");
    circleParagraph.style.fontSize = "1px";
    circleParagraph.style.visibility = "hidden";
});

addEventListener("load", function(){
  circleParagraph = document.getElementById("p03");
  circleParagraph.style.fontSize = "1px";
  circleParagraph.style.visibility = "hidden";
});


document.getElementById("c01").addEventListener("mouseover", function(){
    let c02 = document.getElementById("c02")
    let c03 = document.getElementById("c03")
    let c04 = document.getElementById("c04")

    document.getElementById("centerEnd").style.fontSize = "36px"    
    document.getElementById("p01").style.fontSize = "16px"
    document.getElementById("p01").style.visibility = "visible"

    c02.style.right = "-200px";
    c03.style.left = "-200px";
    c04.style.right = "-200px";
});

document.getElementById("c01").addEventListener("mouseout", function(){
    let c02 = document.getElementById("c02")
    let c03 = document.getElementById("c03")
    let c04 = document.getElementById("c04")

    document.getElementById("centerEnd").style.fontSize = "25px"
    document.getElementById("p01").style.fontSize = "1px"
    document.getElementById("p01").style.visibility = "hidden"

    c02.style.right = "-70px";
    c03.style.left = "-70px";
    c04.style.right = "-70px";
});

document.getElementById("c02").addEventListener("mouseover", function(){
    let c01 = document.getElementById("c01")
    let c03 = document.getElementById("c03")
    let c04 = document.getElementById("c04")

    document.getElementById("p02").style.fontSize = "16px"
    document.getElementById("p02").style.visibility = "visible"

    document.getElementById("centerMiddle").style.fontSize = "36px"    

    c01.style.left = "-200px";
    c03.style.left = "-200px";
    c04.style.right = "-200px";
});

document.getElementById("c02").addEventListener("mouseout", function(){
    let c01 = document.getElementById("c01")
    let c03 = document.getElementById("c03")
    let c04 = document.getElementById("c04")

    document.getElementById("centerMiddle").style.fontSize = "25px"    
    document.getElementById("p02").style.fontSize = "1px"
    document.getElementById("p02").style.visibility = "hidden"

    c01.style.left = "-70px";
    c03.style.left = "-70px";
    c04.style.right = "-70px";
});

document.getElementById("c03").addEventListener("mouseover", function(){
    let c01 = document.getElementById("c01")
    let c03 = document.getElementById("c03")
    let c04 = document.getElementById("c04")

    document.getElementById("centerSobre").style.fontSize = "36px"    
    document.getElementById("p03").style.fontSize = "16px"
    document.getElementById("p03").style.visibility = "visible"

    c01.style.left = "-200px";
    c02.style.right = "-200px";
    c04.style.right = "-200px";
});

document.getElementById("c03").addEventListener("mouseout", function(){
    let c01 = document.getElementById("c01")
    let c03 = document.getElementById("c03")
    let c04 = document.getElementById("c04")

        document.getElementById("centerSobre").style.fontSize = "25px"
    document.getElementById("p03").style.fontSize = "1px"
    document.getElementById("p03").style.visibility = "hidden"

    c01.style.left = "-70px";
    c02.style.right = "-70px";
    c04.style.right = "-70px";
});

document.getElementById("c04").addEventListener("mouseover", function(){
    let c02 = document.getElementById("c02")
    let c03 = document.getElementById("c03")
    let c01 = document.getElementById("c01")

    c02.style.right = "-200px";
    c03.style.left = "-200px";
    c01.style.left = "-200px";
});

document.getElementById("c04").addEventListener("mouseout", function(){
    let c02 = document.getElementById("c02")
    let c03 = document.getElementById("c03")
    let c01 = document.getElementById("c01")

    c02.style.right = "-70px";
    c03.style.left = "-70px";
    c01.style.left = "-70px";
});

// center commands

document.getElementById("centerSobre").addEventListener("click", function() {
    
    const sectionToCenterOn = document.getElementById("top");
  
    const viewportHeight = window.innerHeight;
  
    const sectionPosition = sectionToCenterOn.getBoundingClientRect().top;
  
    const scrollPosition = sectionPosition - (viewportHeight / 20);
  
    window.scrollBy({ top: scrollPosition, behavior: "smooth" });
  });
  
  document.getElementById("centerEnd").addEventListener("click", function() {
      
      const sectionToCenterOn = document.getElementById("end");
  
      const viewportHeight = window.innerHeight;
  
      const sectionPosition = sectionToCenterOn.getBoundingClientRect().top;
  
      const scrollPosition = sectionPosition - (viewportHeight / 20);
  
      window.scrollBy({ top: scrollPosition, behavior: "smooth" });
    });
  
    document.getElementById("centerMiddle").addEventListener("click", function() {
      
      const sectionToCenterOn = document.getElementById("middle01");
  
      const viewportHeight = window.innerHeight;
  
      const sectionPosition = sectionToCenterOn.getBoundingClientRect().top;
  
      const scrollPosition = sectionPosition - (viewportHeight / 20);
  
      window.scrollBy({ top: scrollPosition, behavior: "smooth" });
    });
  
  
    document.getElementById("centerFooter").addEventListener("click", function() {
      
      const sectionToCenterOn = document.getElementById("footer");
    
      const viewportHeight = window.innerHeight;
    
      const sectionPosition = sectionToCenterOn.getBoundingClientRect().top;
    
      const scrollPosition = sectionPosition - (viewportHeight / 20);
    
      window.scrollBy({ top: scrollPosition, behavior: "smooth" });
    });
  