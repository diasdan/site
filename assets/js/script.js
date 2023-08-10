
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

// Button

document.getElementById("centerSobre").addEventListener("click", function() {
    
  const sectionToCenterOn = document.getElementById("middle");

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
    
    const sectionToCenterOn = document.getElementById("bottom");

    const viewportHeight = window.innerHeight;

    const sectionPosition = sectionToCenterOn.getBoundingClientRect().top;

    const scrollPosition = sectionPosition - (viewportHeight / 20);

    window.scrollBy({ top: scrollPosition, behavior: "smooth" });
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

  // Country Selector

  
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
        img.outerHTML = '<img id="countryIcon" src="assets/img/br.png" alt="">'
        this.style.marginLeft = "1px";
        this.style.backgroundImage = "assets/img/us.png";
        isClick = false;
        
    }
    translate(isClick);
});


function translate(isClick){

  if(isClick){
    toEnglish()
  }
  else {
    location.reload() 
  }
}

function toEnglish(isClick){
  console.log("Funcionou!")

  document.querySelector("#inicio>h3").innerText = "I.T. Professional & Full-Stack Developer"
  document.querySelector("#p01").innerHTML = "My <strong>experience</strong> and <br> <strong>projects</strong> as a"
  document.querySelector("#p02").innerHTML = "My <strong>path</strong> and <strong>Professional <br> Experience</strong> on"
  document.querySelector("#centerMiddle").innerText = "I.T."
  document.querySelector("#p03").innerHTML = "A summary about me and <br>my <strong>professional path</strong>"
  document.querySelector("#centerSobre").innerText = "ABOUT"
  document.querySelector("#about").innerHTML = `  
  <p>
  <h3>Developer & I.T. Analyst</h3>
<br>
Information Technology professional and an enthusiastic software and game developer. My journey is driven by the relentless pursuit of creative and innovative solutions.
  <br>
  <br>
  I possess skills in the Python, C/C++, and Java programming languages. Currently, I am seeking to acquire skills in Verse, a powerful platform by Epic Games. Additionally, I also develop for the web using HTML, CSS, Javascript, PHP, and the Flask framework, creating engaging and functional interfaces.
  <br>
  <br>
  Feel free to explore my projects and share this universe of innovation and technology. Let's create something amazing together!
</p>`
  document.querySelector("#middle>h1").innerText = "About me"
  document.querySelector("#end>h1").innerText = "Software Developer"
  document.querySelector("#linkedin-link").innerHTML = '<img class="linkedin-icon" src="assets/img/linkedin.png" alt="">Know my path on my Linkedin Profile'
  document.querySelector("#github-link").innerHTML = '<img class="git-icon" src="assets/img/github-logo.png" alt=""> Know my projects in my Github'
  document.querySelector("#ITdescription>p").innerHTML = `
  I am a passionate professional in Information Technology, with advanced skills in Hardware and Operating Systems. My experience spans across Windows environments, Windows servers, and Linux environments, providing a broad and versatile perspective in the IT world.
  <br>
  <br>
  Furthermore, my knowledge of networks and their main topologies and protocols, combined with expertise in information security and data protection, enables me to develop more efficient, secure, and seamlessly functioning applications across different platforms.
  <br>
  <br>
  I am excited to collaborate with engaged teams and projects that drive technology to new heights.
`
  document.querySelector("#bottom>h1").innerText = "Information Technology"
  document.querySelector("footer>p").innerText = "Site created by Danilo Dias"
  document.querySelector("#contatos>h3").innerText = "Know my projects and profiles:"
  document.querySelector("#networking>p").innerText = "Networking"  
}




