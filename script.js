var images=document.querySelector(".left")
var image1=document.querySelector(".img1")
var image2=document.querySelector(".educator1")
var image3=document.querySelector(".educator2")
var dabbe=document.querySelector(".img")
var dabbe1=document.querySelector(".img11")
var dabbe2=document.querySelector(".img2")
var dabbe3=document.querySelector(".img3")
var uparrow=document.querySelector(".arrow")
var uparrow1=document.querySelector(".arrow1")
var uparrow2=document.querySelector(".arrow2")
var uparrow3=document.querySelector(".arrow3")
var flag=0;

image2.addEventListener("mouseover",function(){
    image2.style.width="100%"
    // image1.style.width="150px"
}) 
image2.addEventListener("mouseout",function(){
        image2.style.width="150px"
})

image1.addEventListener("mouseover",function(){
    //   image1.style.width="100%"
      image1.style.width="350px"
})
image1.addEventListener("mouseout",function(){
    // image2.style.width="350px"
    image1.style.width="350px"

})

image3.addEventListener("mouseover",function(){
    image3.style.width="100%"
    image1.style.width="350px"
    image2.style.width="150px"
}) 
image3.addEventListener("mouseout",function(){
        image3.style.width="150px"
})

dabbe.addEventListener("mouseover",function(){
       uparrow.style.top="10%"
})
dabbe.addEventListener("mouseout",function(){
    uparrow.style.top="-200%"
})
// 

dabbe1.addEventListener("mouseover",function(){
    uparrow1.style.left="44%"
})
dabbe1.addEventListener("mouseout",function(){
 uparrow1.style.left="-200%"
})
// 
dabbe2.addEventListener("mouseover",function(){
    uparrow2.style.left="67%"
})
dabbe2.addEventListener("mouseout",function(){
 uparrow2.style.left="-200%"
})
// 
dabbe3.addEventListener("mouseover",function(){
    uparrow3.style.left="90%"
})
dabbe3.addEventListener("mouseout",function(){
 uparrow3.style.left="-200%"
})
var cancel=document.querySelector(".ri-close-fill")
var subcribepage=document.querySelector(".page5")
uparrow.addEventListener("mouseover",function(){
      subcribepage.style.top="100%"

})
// 
uparrow1.addEventListener("click",function(){
    subcribepage.style.top="100%"

})
// 
uparrow2.addEventListener("click",function(){
    subcribepage.style.top="100%"

})
// 
uparrow3.addEventListener("click",function(){
    subcribepage.style.top="100%"

})
cancel.addEventListener("click",function(){
        subcribepage.style.top="-700%"
})


// gsap works

gsap.from(".page1 .nav",{
     opacity:0,
     duration:1,
     delay:1,
     scale:1,
     y:-200
})
gsap.from(".main .right",{
    opacity:0,
    duration:1,
    delay:1,
    // scale:1,
    x:-200
})
var hea=document.querySelector("h2")
hea.addEventListener("click",function(){
    gsap.from("hea",{
        opacity:0,
        duration:2,
        delay:2,
        // scale:1,
        yoyo:true
    })
})