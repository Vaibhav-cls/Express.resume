let exp = 1;
let newE = document.createElement('textarea');
newE.name = `no:${exp}`;
newE.style.display ="none";
let temp = document.getElementById("resumeForm");
temp.appendChild(newE);
VanillaTilt.init(document.querySelector(".banners"),{
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.5,
});

function addExp(){
    exp++;
    let newElement = document.createElement('textarea');
    let parent = document.getElementById('exp');
    newElement.rows =  "4";
    newElement.name = `experience-${exp}`;
    newElement.placeholder = "Company Name\nDesignation\nAchievements";
    parent.appendChild(newElement);
}
/*
const buttons = document.querySelector("[data-carousel-button]");
buttons.forEach( button => {
    button.addEventListener("click",()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) newIndex = slides.children.length -1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active =true;
        delete activeSlide.dataset.active;
    })
})*/

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let autoSlideInterval;

// Function to show the next slide
function showNextSlide() {
    showSlide(currentIndex + 1);
}

// Function to show the previous slide
function showPrevSlide() {
    showSlide(currentIndex - 1);
}

// Function to start the auto-slide interval
function startAutoSlide() {
    stopAutoSlide(); // Stop previous interval (if any)
    autoSlideInterval = setInterval(showNextSlide, 3000); // Auto-slide every 3 seconds (adjust as needed)
}

// Function to stop the auto-slide interval
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

prevBtn.addEventListener('mousedown', () => {
    showPrevSlide();
    stopAutoSlide(); // Stop auto-slide when user presses the previous button
});

nextBtn.addEventListener('mousedown', () => {
    showNextSlide();
    stopAutoSlide(); // Stop auto-slide when user presses the next button
});

prevBtn.addEventListener('mouseup', startAutoSlide);
nextBtn.addEventListener('mouseup', startAutoSlide);

function showSlide(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    images[currentIndex].classList.remove('active');
    images[index].classList.add('active');

    currentIndex = index;
}

// Start auto-slide when the page loads
startAutoSlide();

