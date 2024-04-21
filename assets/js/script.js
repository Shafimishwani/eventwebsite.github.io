

gsap.from(".content h1,.content p,.content input,.play-btn,button",{
    y:300,
    duration:2,
    delay:1,
    scale:0,
    stagger:"true"
})

gsap.from(".container .box",{
    scale:0,
    delay:0.5,
    duration:2,
    scrollTrigger:{
        trigger:".container .box",
    }
})
/*
gsap.from(".area-of-map .seeec",{
    scale:0,
    x:200,
    delay:0.5,
    duration:2,
    scrollTrigger:".area-of-map .seeec"
})

gsap.from(".sponsor-content",{
    y:200,
    delay:0.5,
    duration:2,
    scrollTrigger:".sponsor-content"
})

gsap.from(".faq-section #accordiann",{
    y:200,
    delay:0.5,
    duration:2,
    scrollTrigger:".faq-section #accordiann"
})
gsap.from(".search-section",{
    y:200,
    delay:0.5,
    duration:2,
    scrollTrigger:".search-section"
})
gsap.from(".ticket-grid",{
    scale:0,
    x:200,
    delay:0.5,
    duration:2,
    scrollTrigger:".ticket-grid"
})


*/
