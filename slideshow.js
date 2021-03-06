// functions
function classSwitcher() {
    // at first get all active's class from slides , then get active class to slide that's active
    slides.forEach(slide => slide.classList.remove("active"))
    slides[active].classList.add("active")
        // button
    points.forEach(point => point.classList.remove("active"))
    points[active].classList.add("active")

}
// go next get active's slide and go next
// slides.length - 1 defined last slide
let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1
    classSwitcher()
}

let goPrev = () => {
    active = (active == 0) ? slides.length - 1 : active - 1
    classSwitcher()
}

// active is number of slideshow thats on
// timer defined each slide change after ... second

// variables
let active = 0
let timer = 3000

let slideshow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

// setInterval
let runSlideshow = setInterval(goNext, timer)

// point event
points.forEach((point, index) => {
    point.addEventListener("click", e => {
        active = index
        classSwitcher()
    })
})

// next event
next.addEventListener("click", e => goNext())

// prev event
prev.addEventListener("click", e => goPrev())

// mouseover
slideshow.addEventListener("mouseover", e => clearInterval(runSlideshow))

// mouseleave
slideshow.addEventListener("mouseleave", e => runSlideshow = setInterval(goNext, timer))