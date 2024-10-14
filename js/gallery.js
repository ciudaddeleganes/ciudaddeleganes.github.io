const images = [
    "images/foto.webp",
    "images/foto.webp",
    "images/foto.webp",
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function updateImage() {
    galleryImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Desplazamiento automático cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}, 10000);