// Animation Titre Hero
const titleText = "Les fleurs fanent. Offrez-lui un Câlin Éternel.";
const heroTitle = document.getElementById('hero-title');

if (heroTitle) {
    titleText.split(' ').forEach((word, index) => {
        const container = document.createElement('span');
        container.className = 'word-container';
        const textSpan = document.createElement('span');
        textSpan.textContent = word;
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 100 100");
        svg.setAttribute("class", "heart-bg-svg");
        svg.style.animation = `drawHeart 4s ease-in-out infinite ${index * 0.4}s`;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M50 90 C50 90 10 60 10 35 A20 20 0 0 1 50 25 A20 20 0 0 1 90 35 C90 60 50 90 50 90 Z");
        svg.appendChild(path);
        container.appendChild(svg);
        container.appendChild(textSpan);
        heroTitle.appendChild(container);
    });
}

// Popup Promo + Timer
const promoPopup = document.getElementById('promo-popup');
const reassuranceSection = document.getElementById('reassurance-section');
let timerStarted = false;

if (reassuranceSection && promoPopup) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !timerStarted) {
            promoPopup.classList.remove('hidden');
            startCountdown(10 * 60);
            timerStarted = true;
        }
    }, { threshold: 0.1 });

    observer.observe(reassuranceSection);
}

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const display = document.getElementById('countdown');
    if (display) {
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) { timer = 0; }
        }, 1000);
    }
}