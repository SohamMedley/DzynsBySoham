document.addEventListener("DOMContentLoaded", () => {
  const shapes = document.querySelectorAll(".elegant-shape")
  const content = document.querySelector(".content")

  // Animate shapes
  shapes.forEach((shape, index) => {
    shape.style.opacity = "0"
    shape.style.transform = `translateY(-150px) rotate(${-15 + index * 10}deg)`

    setTimeout(() => {
      shape.style.transition = "opacity 1.2s, transform 2.4s cubic-bezier(0.23, 0.86, 0.39, 0.96)"
      shape.style.opacity = "1"
      shape.style.transform = `translateY(0) rotate(${index * 10}deg)`
    }, index * 200)

    // Add floating animation
    setInterval(() => {
      shape.style.transition = "transform 12s ease-in-out"
      shape.style.transform = `translateY(0) rotate(${index * 10}deg) translateY(15px)`
      setTimeout(() => {
        shape.style.transform = `translateY(0) rotate(${index * 10}deg) translateY(0)`
      }, 6000)
    }, 12000)
  })

  // Fade in content
  content.style.opacity = "0"
  content.style.transform = "translateY(30px)"

  setTimeout(() => {
    content.style.transition = "opacity 1s, transform 1s cubic-bezier(0.25, 0.4, 0.25, 1)"
    content.style.opacity = "1"
    content.style.transform = "translateY(0)"
  }, 500)

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
})

