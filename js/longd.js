//script 
let tl = gsap.timeline({delay: 1});
tl.from('header',{ duration: 0.6, ease: "power2.out", y: -60});
tl.from('.neos-content',{ duration: 0.6, ease: "power2.out", opacity: 0,  x: -40});
tl.from('.neos-svg',{ duration: 0.6, ease: "power2.out", opacity: 0});
// gsap.from('header',{ duration: 0.6, ease: "power2.out", y: -60});
// gsap.from('.neos-content',{ duration: 0.6, ease: "power2.out", opacity: 0,  x: -40, delay: 1});
// gsap.from('.neos-svg',{ duration: 0.6, ease: "power2.out", opacity: 0, delay: 1.7});

gsap.to("#red-car",

{
    duration: 8,
    x: 1960,
    y: 439,
    ease: "none",
    repeat: 4,
    repeatDelay: 2,

});
gsap.to("#blue-car",

{
    duration: 16,
    x: 612,
    y: 210,
    ease: "none",
    repeat: 5,
    repeatDelay: 1,

});
gsap.to("#yellow-car",

{
    duration: 7,
    x: 884,
    y: 1114,
    ease: "none",
    repeat: 8,
    repeatDelay: 2,

});
