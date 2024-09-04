
// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for Hamburger Menu
document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded before adding event listeners
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.nav-links');

    if (hamburgerIcon && menu) { // Ensure these elements exist before adding event listeners
        hamburgerIcon.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});

// JavaScript to implement the lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.classList.add('lightbox-overlay');

    const lightboxImage = document.createElement('img');
    lightboxImage.classList.add('lightbox-image');
    lightboxOverlay.appendChild(lightboxImage);

    const closeButton = document.createElement('div');
    closeButton.classList.add('lightbox-close');
    closeButton.innerText = '✖';
    lightboxOverlay.appendChild(closeButton);

    const leftArrow = document.createElement('div');
    leftArrow.classList.add('lightbox-arrow', 'left');
    leftArrow.innerText = '◀';
    lightboxOverlay.appendChild(leftArrow);

    const rightArrow = document.createElement('div');
    rightArrow.classList.add('lightbox-arrow', 'right');
    rightArrow.innerText = '▶';
    lightboxOverlay.appendChild(rightArrow);

    document.body.appendChild(lightboxOverlay);

    const images = document.querySelectorAll('.portfolio-gallery img');
    let currentIndex;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            currentIndex = index;
            lightboxImage.src = image.src;
            lightboxOverlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        lightboxOverlay.style.display = 'none';
    });

    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay || e.target === closeButton) {
            lightboxOverlay.style.display = 'none';
        }
    });

    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            lightboxImage.src = images[currentIndex].src;
        }
    });

    rightArrow.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            lightboxImage.src = images[currentIndex].src;
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightboxOverlay.style.display === 'flex') {
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                lightboxImage.src = images[currentIndex].src;
            } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
                currentIndex++;
                lightboxImage.src = images[currentIndex].src;
            } else if (e.key === 'Escape') {
                lightboxOverlay.style.display = 'none';
            }
        }
    });
});
