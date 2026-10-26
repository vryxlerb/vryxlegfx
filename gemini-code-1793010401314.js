// Initialize Lucide Icons
lucide.createIcons();

// Copy Discord Username
function copyDiscord() {
    const tag = "vryxlegfx";
    navigator.clipboard.writeText(tag);
    const copyText = document.getElementById("copy-text");
    if (copyText) {
        copyText.innerText = "Copied!";
        setTimeout(() => {
            copyText.innerText = "Copy Username";
        }, 2000);
    }
}

// Image Lightbox Modal
function openModal(imgSrc, title) {
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modal = document.getElementById("modal");

    if (modalImg && modalTitle && modal) {
        modalImg.src = imgSrc;
        modalTitle.innerText = title;
        modal.classList.remove("hidden");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.add("hidden");
    }
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Interactive Before/After Slider Drag Logic
const container = document.getElementById('comparison-container');
const beforeWrapper = document.getElementById('before-wrapper');
const handle = document.getElementById('slider-handle');
const beforeImg = document.getElementById('before-img');

function updateImageWidth() {
    if (container && beforeImg) {
        beforeImg.style.width = `${container.offsetWidth}px`;
    }
}

window.addEventListener('resize', updateImageWidth);
updateImageWidth();

let isDragging = false;

function setSliderPosition(x) {
    if (!container || !beforeWrapper || !handle) return;
    const rect = container.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    beforeWrapper.style.width = `${position}%`;
    handle.style.left = `${position}%`;
}

if (container) {
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch events for mobile devices
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
}