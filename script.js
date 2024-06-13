// RÃ©cupÃ¨re le header
var header = document.querySelector('header');

// Ajoute un Ã©vÃ©nement scroll pour ajuster l'opacitÃ© du header en fonction de la position de dÃ©filement de la page
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

// Ajoute un Ã©vÃ©nement mouseover pour repasser Ã  100% d'opacitÃ© lorsque la souris entre dans le header
header.addEventListener('mouseover', function() {
    header.classList.remove('scroll');
});

// Ajoute un Ã©vÃ©nement mouseout pour rÃ©tablir l'opacitÃ© rÃ©duite lorsque la souris quitte le header
header.addEventListener('mouseout', function() {
    // VÃ©rifie si la page est en train d'Ãªtre scrollÃ©e
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    }
});

const images = ['images/polo1.jpg', 'images/polo2.jpg', 'images/polo3.jpg'];
let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('tshirt-image');
    imageElement.classList.add('fade-out');
    setTimeout(() => {
        imageElement.src = images[index];
        imageElement.classList.remove('fade-out');
    }, 200); // Match the duration of the CSS transition
}


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

//------------------------------------------------------


const imagesB = ['images/bonnet1.jpg', 'images/bonnet2.jpg', 'images/bonnet3.jpg'];
let currentIndexB = 0;

function showImageB(indexB) {
    const imageElementB = document.getElementById('bonnet-image');
    imageElementB.classList.add('fade-out');
    setTimeout(() => {
        imageElementB.src = imagesB[indexB];
        imageElementB.classList.remove('fade-out');
    }, 200); // Match the duration of the CSS transition
}

function prevImageB() {
    currentIndexB = (currentIndexB - 1 + imagesB.length) % imagesB.length;
    showImageB(currentIndexB);
}

function nextImageB() {
    currentIndexB = (currentIndexB + 1) % imagesB.length;
    showImageB(currentIndexB);
}

// Initialize with the first image
showImage(currentIndex);
showImageB(currentIndexB)
