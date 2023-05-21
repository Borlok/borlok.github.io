window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})
let pastDate = new Date('1988-10-28T00:00:00').getFullYear();
document.getElementById("years").innerText = new Date().getFullYear() - pastDate + ' лет';
