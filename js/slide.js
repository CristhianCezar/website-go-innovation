let currentImageIndex = 0;
const images = document.getElementsByClassName("slide");
const max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0;
        }

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage();     
    }, 2200);
}

window.addEventListener("load", start);