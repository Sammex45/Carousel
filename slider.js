const buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons)
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

element= document.getElementById("ul-slides")

let btn=document.getElementsByClassName("prev")
let btnNext=document.getElementsByClassName("next")


console.log(btn)

console.log(element)

element.addEventListener("mouseover",mouseEnter )
element.addEventListener("mouseleave",mouseLeave )


function mouseEnter() {
  btn[0].classList.remove("hidden");
  btnNext[0].classList.remove("hidden");


  console.log("hello")
  
}
 
function mouseLeave() {
  btn[0].classList.add("hidden");
  btnNext[0].classList.add("hidden");

}
