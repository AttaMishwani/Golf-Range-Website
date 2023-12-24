let nav = document.getElementById("nav");
let cursor = document.querySelector("#cursor");
let cursorCircle = document.querySelector("#cursor-circle");
let dot1 = document.querySelector("#fd-dt-1");
let dot2 = document.querySelector("#fd-dt-2");
let dot3 = document.querySelector("#fd-dt-3");
let imgInner = document.querySelector("#fd-img-inner");
let footerLogo = document.getElementById("fo-logo")
let navAllH4 = document.querySelectorAll("#nav a");
let movingCards = document.querySelectorAll("#cards-container .card");
let menu = document.querySelector(".menu");
let toggleBtn = document.querySelector("#toggle-Btn");
let closeBtn = document.querySelector("#close-btn");


movingCards.forEach(function(cd){
    cd.addEventListener("mouseenter",function(){
        cursor.style.backgroundColor = "transparent";
        cursor.style.scale = 4;
        cursor.style.border = "1px solid white"
    })
    cd.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.backgroundColor = "rgb(8, 230, 8)";
        cursor.style.border = "none";
    })
})


navAllH4.forEach( function(elem) {

    elem.addEventListener("mouseenter", function(){
 
        cursor.style.backgroundColor = "transparent";
        cursor.style.scale = 3;
        cursor.style.border = "1.5px solid white"
    })
    elem.addEventListener("mouseleave", function(){
       
        cursor.style.scale = 1;
        cursor.style.backgroundColor = "rgb(8, 230, 8)";
        cursor.style.border = "none";
    })
    
});

footerLogo.addEventListener("mouseenter",function(){

    cursor.style.backgroundColor = "transparent";
    cursor.style.scale = 3;
    cursor.style.border = "1.5px solid white";
})
footerLogo.addEventListener("mouseleave",function(){
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "rgb(8, 230, 8)";
    cursor.style.border = "none";
})

document.addEventListener("mousemove", function(cs){
    cursor.style.left = cs.x + "px";
    cursor.style.top = cs.y + "px";
    cursorCircle.style.left = cs.x -10 + "px";
    cursorCircle.style.top = cs.y -33 + "px";
})


dot1.addEventListener("click",function(){
    imgInner.src = "bg.jpg"
})
dot2.addEventListener("click",function(){
    imgInner.src = "bg2.jpg";
    
})
dot3.addEventListener("click",function(){
    imgInner.src = "bg3.jpg"
})


window.addEventListener("scroll", function() {
    if(this.window.scrollY > 20){
        nav.classList.add("active");

    }else{
        nav.classList.remove("active")
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})


gsap.from("#about,#about-text",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 60%",    
        end:"top 55%",
        scrub:2   
    }
})


gsap.from(".card",{
    scale:0.9,
    opacity:0,
    duration:0.8,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",    
        end:"top 55%",
        scrub:2   
    }
})


gsap.from(".banner-text h3",{
    y:50,
    opacity:0,
    duration:0.5,
    
    scrollTrigger:{
        trigger:".banner-text h3",
        scroller:"body",
        start:"top 80%",    
        end:"top 55%",
        scrub:1  
    }
})
gsap.from("#page4 h1",{
    y:50,
    opacity:0,
    duration:0.5,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",    
        end:"top 55%",
        scrub:1  
    }
})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    
    
    
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",    
        end:"top 45%",
        scrub:4  
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    
    
    
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 80%",    
        end:"top 45%",
        scrub:4  
    }
})



toggleBtn.addEventListener("click",function(){
    menu.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menu.classList.remove("active");
})