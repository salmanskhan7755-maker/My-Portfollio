// ==============================
// MOBILE MENU TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==============================
// HEADER BACKGROUND ON SCROLL
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#050b15";
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.6)";
    } else {
        header.style.background = "#08101d";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.5)";
    }
});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


// Elements to animate

const sections = document.querySelectorAll(
    "section, .card, .skill-card, .timeline-item, .project-card"
);


sections.forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
});


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// TYPING EFFECT
// ==============================

const text = "BIM Trainee Modeller";

const typingElement = document.querySelector(".typing");

let index = 0;


function typingEffect() {

    if (index < text.length) {

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);

    }

}


// Start typing after page load

window.addEventListener("load", () => {

    typingElement.textContent = "";

    setTimeout(typingEffect, 500);

});


// ==============================
// PROJECT IMAGE LIGHT ZOOM
// ==============================

const projectImages = document.querySelectorAll(".project-card img");

projectImages.forEach(image => {

    image.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.classList.add("image-popup");

        popup.innerHTML = `
            <span class="close-btn">&times;</span>
            <img src="${image.src}">
        `;

        document.body.appendChild(popup);


        document.querySelector(".close-btn")
        .addEventListener("click", () => {
            popup.remove();
        });


        popup.addEventListener("click", (e) => {

            if(e.target === popup){
                popup.remove();
            }

        });

    });

});