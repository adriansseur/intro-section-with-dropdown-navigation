window.addEventListener("resize", renderUI)
const heroImage = document.querySelector(".hero-image").children[0]


function renderUI() {
    if (window.innerWidth >= 768 &&
        heroImage.src !== "./images/image-hero-desktop.png") {
            heroImage.src = "./images/image-hero-desktop.png"
    } else {
        heroImage.src = "./images/image-hero-mobile.png"
    }
}

renderUI()