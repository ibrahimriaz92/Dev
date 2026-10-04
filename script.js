/* =====================================================
   IBRAHIM RIAZ PORTFOLIO
   COMPLETE JAVASCRIPT
   ===================================================== */


/* ================= MOBILE NAVBAR ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// Open / Close Mobile Menu
if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


// Close Menu When Link Is Clicked

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNav() {

    const scrollPosition = window.scrollY + 150;


    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            const activeLink = document.querySelector(
                `.nav-link[href="#${sectionId}"]`
            );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener("scroll", updateActiveNav);


/* ================= SCROLL REVEAL ================= */

// Add Reveal Class to Elements

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .service-card, .project-card, .contact-content"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


// Reveal CSS Inline Style
const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(35px);
        transition: opacity 0.8s ease,
                    transform 0.8s ease;
    }

    .reveal.show {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(revealStyle);


// Intersection Observer
const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Observe Elements
revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= FOOTER YEAR ================= */

const currentYear = document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Basic Validation
        if (!name || !email || !subject || !message) {

            alert("Please fill in all fields.");

            return;

        }


        // Email Validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }


        // Success Message
        alert(
            `Thank you ${name}! Your message has been prepared.`
        );


        // Reset Form
        contactForm.reset();


        /*
         IMPORTANT:
         This is frontend validation only.
         To actually send messages, connect
         a backend or form service.
        */

    });

}


/* ================= CURRENT YEAR ================= */

// Initial Active Link
updateActiveNav();


// Console Message
console.log(
    "Ibrahim Riaz Portfolio Loaded Successfully!"
);
