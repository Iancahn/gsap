console.log("Hello World");

// gsap.to('.coke', { duration: 3, scale: 1.1, ease: "power4.out" })
// gsap.to('.can', { duration: 2, scale: 1, rotation: 720, ease: "power4.out" })

// Use timeline instead of repeating a lot of messy animation code
const timeline = gsap.timeline({ defaults: { duration: 1.5 } })
// Now we dont have to repeat duration:1 everywhere, we have it as default
// -->timeline.from('.coke', { y: '-100%', ease: 'back.out' })
// -->timeline.to('.can', { scale: 1, rotation: 720, ease: "power4.out" })
// to make it even better, we can just do it like a real animation timeline

timeline
    .to('.coke-text', { duration: 0.001, opacity: '0' })
    .to('.coke', { y: '40%', ease: 'back.out' })
    .from('.can', { scale: 1, rotation: 720, ease: "power4.out" })

// using this method, we dont need delays, as it will be timed correctly anyways. note we can still use delay using "absolute or relative delays,find below"
// .to('.can', { scale: 1, rotation: 720, ease: "power4.out", '<.5' })

// we can also reverse our entire animation sequence, by using some trigger(probably a button), adding event listener with onclick and then:
// timeline.reverse

function expand() {
    gsap.to('.coke', { duration: 1, width: '60%', ease: "power4.out" })
    gsap.to('.can', { duration: 1, x: '65%' })
    gsap.to('.coke-text', { duration: 1, x: '30%', y: '50%' })
    gsap.to('.coke-text', { duration: 0.8, opacity: '1', delay: '1.5' })
    console.log("Expand")
}

function retract() {
    gsap.to('.coke', { duration: 1.5, width: '-60%', ease: "power4.out" })
    console.log("Retract")
}

document.getElementsByClassName('coke')[0].onmouseover = () => {
    expand();
}

// document.getElementsByClassName('coke')[0].onmouseout = () => {
//     retract();
// }

// document.getElementById('menuBtn').onclick = e => {
//     e.preventDefault();
//     openMenu();
// }

// document.addEventListener('onmouseover', () => {
//     gsap.to('.coke', { duration: 2, width: '100%', ease: "power4.out" })
//     console.log("This is still running")
// })

// const openMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop active';
//     document.querySelector('aside').className = 'active';
// }

// const closeMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop';
//     document.querySelector('aside').className = '';
// }



// document.querySelector('aside button.close').onclick = e => {
//     closeMenu();
// }

// document.querySelector('.backdrop').onclick = e => {
//     closeMenu();
// }