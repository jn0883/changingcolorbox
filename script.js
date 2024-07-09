var container = document.querySelector(".container");
container.addEventListener("mousemove",function(dets){
    var location = container.getBoundingClientRect();
    var diff = dets.clientX - location.left;
    
    if(diff < location.width/2){
        var redcolor = gsap.utils.mapRange(0,location.width/2,255,0,diff);
        gsap.to(container,{
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(location.width/2,location.width,0,255,diff);
        gsap.to(container,{
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        })
    }
    container.addEventListener("mouseleave",function(){
        gsap.to(container,{
            backgroundColor: "white",
            ease: Power4,
        })
    })
})