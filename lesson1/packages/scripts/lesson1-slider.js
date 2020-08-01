document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

    images.init();
    hideLoadIcon(loadIcon);
});

function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}


function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

let images = {
    currentIdx: 0,

    slides: [],

    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.remove('hidden-slide');
    },

    hideVisibleImages() {
        this.slides.forEach(function (slide) {
            slide.classList.add('hidden-slide');
        });
    },

    setNextLeftImage() {
        this.hideVisibleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-rightToLeftAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('slider-rightToLeftAnimation');
        }, 500);
    },

    setNextRightImage() {
        this.hideVisibleImages();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-leftToRightAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('slider-leftToRightAnimation');
        }, 500);
    },
}
