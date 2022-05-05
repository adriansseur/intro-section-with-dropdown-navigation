const heroImage = document.querySelector(".hero-image").children[0]
const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const closeBtn = document.querySelector(".close-btn")
const body = document.querySelector(".body")
const darkener = document.querySelector(".menu-bg-darkener")

window.addEventListener("resize", renderUI)
menuBtn.addEventListener("click", showMenu)
closeBtn.addEventListener("click", closeMenu)

function renderUI() {
    if (window.innerWidth >= 768) {
        heroImage.src = "./images/image-hero-desktop.png"
        menu.classList.remove("open-menu")
    } else {
        heroImage.src = "./images/image-hero-mobile.png"
    }
}

function showMenu() {
    menu.classList.add("open-menu")
    darkener.classList.add("darkener-on")
}

function closeMenu() {
    menu.classList.remove("open-menu")
    darkener.classList.remove("darkener-on")
}

renderUI()