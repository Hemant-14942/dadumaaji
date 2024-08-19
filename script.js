let tl =gsap.timeline();
tl.from(".imgd",{
    opacity: 1,
    x: -400,
    duration:2,
},'a')
tl.from(".imgm",{
    opacity: 0,
    x: 400,
    duration:2,
},'a')
tl.to('.imgh',{
    opacity: 1,
    y: -200,
    
    duration:2,
})