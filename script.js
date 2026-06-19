// --- Custom Cursor ---
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const hoverLinks = document.querySelectorAll('.hover-link, button, input, textarea');

document.addEventListener('mousemove', (e) => {
    // Small dot follows instantly
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Follower has a slight delay
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

hoverLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// --- Typing Effect ---
const typedTextSpan = document.getElementById("typed-text");
const textArray = ["Web Developer", "UI/UX Designer", "Creative Thinker", "Problem Solver"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// --- Scroll Reveal Animations ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// --- 3D Tilt Effect ---
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

// --- Contact Form ---
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
        btn.style.background = 'linear-gradient(45deg, #00ffcc, #00ccaa)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            form.reset();
        }, 3000);
    });
}