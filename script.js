// =========================
// DARK MODE
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");


if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        if (document.body.classList.contains("dark")) {

            darkModeBtn.textContent = "☀️";

            localStorage.setItem("darkMode", "on");

        } else {

            darkModeBtn.textContent = "🌙";

            localStorage.setItem("darkMode", "off");

        }

    });


    // Check saved dark mode

    if (localStorage.getItem("darkMode") === "on") {

        document.body.classList.add("dark");

        darkModeBtn.textContent = "☀️";

    }

}



// =========================
// TYPING EFFECT
// =========================

const typing = document.getElementById("typing");


const words = [

    "Computer Engineering Graduate",

    "Aspiring IT Support Specialist",

    "Networking Enthusiast",

    "Tech Enthusiast"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;



function typeEffect() {

    if (!typing) return;


    const currentWord = words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;


        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    const speed = deleting ? 50 : 100;


    setTimeout(typeEffect, speed);

}


typeEffect();



// =========================
// PROJECT DETAILS
// =========================

function showProject(projectName) {

    let message = "";


    if (projectName === "Recycling & Feeding Machine") {

        message =
            "♻️ Recycling & Feeding Machine\n\n" +

            "An Arduino and ESP32-based project " +
            "that accepts plastic bottles and " +
            "dispenses food for stray animals.\n\n" +

            "Technologies:\n" +

            "• Arduino\n" +
            "• ESP32\n" +
            "• HX711\n" +
            "• Servo Motor\n" +
            "• Sensors";

    }


    else if (projectName === "IT Support Ticketing System") {

        message =
            "🎫 IT Support Ticketing System\n\n" +

            "A basic web-based system for managing " +
            "and organizing IT support requests.\n\n" +

            "Technologies:\n" +

            "• HTML\n" +
            "• CSS\n" +
            "• JavaScript";

    }


    else if (projectName === "Personal Portfolio") {

        message =
            "🌐 Personal Portfolio\n\n" +

            "A personal website designed to showcase " +
            "my skills, projects and experience.\n\n" +

            "Technologies:\n" +

            "• HTML\n" +
            "• CSS\n" +
            "• JavaScript";

    }


    alert(message);

}



// =========================
// SMOOTH SCROLL
// =========================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// =========================
// SCROLL ANIMATION
// =========================

const animatedElements =
    document.querySelectorAll(
        ".about-text, " +
        ".about-info, " +
        ".experience-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".contact-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});



// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "Angelou Portfolio Loaded Successfully! 🚀"
);