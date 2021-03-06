const heroImage = document.querySelector(".hero-image").children[0]
const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const closeBtn = document.querySelector(".close-btn")
const body = document.querySelector(".body")
const darkener = document.querySelector(".menu-bg-darkener")
const featuresBtn = document.querySelector(".features-btn")
const featuresList = document.querySelector(".features-list")
const companyBtn = document.querySelector(".company-btn")
const companyList = document.querySelector(".company-list")
const featuresDownArrow = document.querySelector(".features-down-arrow")
const featuresUpArrow = document.querySelector(".features-up-arrow")
const companyDownArrow = document.querySelector(".company-down-arrow")
const companyUpArrow = document.querySelector(".company-up-arrow")

window.addEventListener("resize", renderUI)
menuBtn.addEventListener("click", 
    () => toggleMenu("open-menu", "darkener-on"))
closeBtn.addEventListener("click", 
    () => toggleMenu("open-menu", "darkener-on"))
featuresBtn.addEventListener("click",
    () => toggleMenuList(featuresList, "open-menu-list"))
companyBtn.addEventListener("click",
    () => toggleMenuList(companyList, "open-menu-list"))

renderUI()

function renderUI() {
    if (window.innerWidth >= 768) {
        heroImage.src = "./images/image-hero-desktop.png"
        menu.classList.remove("open-menu")
        darkener.classList.remove("darkener-on")
    } else {
        heroImage.src = "./images/image-hero-mobile.png"
    }
}

function toggleMenu(menuClass, darkenerClass) {
    menu.classList.toggle(menuClass)
    darkener.classList.toggle(darkenerClass)
}

function toggleMenuList(target, listClass) {
    target.classList.toggle(listClass)
    if (target === featuresList) {
        featuresDownArrow.classList.toggle("arrow-hidden")
        featuresUpArrow.classList.toggle("arrow-shown")
    }
    if (target === companyList) {
        companyDownArrow.classList.toggle("arrow-hidden")
        companyUpArrow.classList.toggle("arrow-shown")
    }
}