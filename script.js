console.log("Hello World");

// gsap.to('.coke', { duration: 3, scale: 1.1, ease: "power4.out" })
// gsap.to('.can', { duration: 2, scale: 1, rotation: 720, ease: "power4.out" })

// Use timeline instead of repeating a lot of messy animation code
const timeline = gsap.timeline({ defaults: { duration: 2 } })
// Now we dont have to repeat duration:1 everywhere, we have it as default
// -->timeline.from('.coke', { y: '-100%', ease: 'back.out' })
// -->timeline.to('.can', { scale: 1, rotation: 720, ease: "power4.out" })
// to make it even better, we can just do it like a real animation timeline

timeline
    .from('.coke', { y: '-100%', ease: 'back.out' })
    .to('.can', { scale: 1, rotation: 720, ease: "power4.out" })

    // using this method, we dont need delays, as it will be timed correctly anyways. note we can still use delay using "absolute or relative delays,find below"
    // .to('.can', { scale: 1, rotation: 720, ease: "power4.out", '<.5' })

    // we can also reverse our entire animation sequence, by using some trigger(probably a button), adding event listener with onclick and then:
    // timeline.reverse