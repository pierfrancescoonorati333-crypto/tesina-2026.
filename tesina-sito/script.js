// script.js


/* =========================
   PRELOAD PAGINA
========================= */

document.body.style.opacity = "0";

window.addEventListener("DOMContentLoaded", () => {

    document.body.style.transition =
    "opacity 1s ease";

    document.body.style.opacity = "1";

});


/* =========================
   LOADER CINEMATICO
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    // BLOCCA SCROLL DURANTE IL LOAD
    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        // SBLOCCA SCROLL
        document.body.style.overflow = "auto";

    }, 2400);

});


/* =========================
   FADE IN DURANTE SCROLL
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold:0.15
});


document.querySelectorAll(".fade-in").forEach((el) => {

    observer.observe(el);

});


/* =========================
   TRANSIZIONE TRA PAGINE
========================= */

document.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        // IGNORA LINK ESTERNI O ANCORE
        if(
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ){

            e.preventDefault();

            document.body.style.opacity = "0";
            document.body.style.transition =
            "opacity 0.6s ease";

            setTimeout(() => {

                window.location.href = href;

            }, 500);

        }

    });

});


/* =========================
   PARALLASSE SFONDO
========================= */

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    const orb1 = document.querySelector(".orb1");
    const orb2 = document.querySelector(".orb2");

    if(orb1){

        orb1.style.transform =
        `translateY(${scrollY * 0.08}px)`;

    }

    if(orb2){

        orb2.style.transform =
        `translateY(${scrollY * -0.08}px)`;

    }

});


/* =========================
   EFFETTO MOVIMENTO MOUSE
========================= */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const orb1 = document.querySelector(".orb1");
    const orb2 = document.querySelector(".orb2");

    if(orb1){

        orb1.style.transform =
        `translate(${x * 20}px, ${y * 20}px)`;

    }

    if(orb2){

        orb2.style.transform =
        `translate(${x * -20}px, ${y * -20}px)`;

    }

});


/* =========================
   ANIMAZIONE BOTTONI
========================= */

const buttons = document.querySelectorAll(".glass-btn");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0px) scale(1)";

    });

});


/* =========================
   DROPDOWN FLUIDO
========================= */

const dropdown = document.querySelector(".dropdown");
const dropdownContent =
document.querySelector(".dropdown-content");

if(dropdown && dropdownContent){

    dropdown.addEventListener("mouseenter", () => {

        dropdownContent.style.opacity = "1";
        dropdownContent.style.visibility = "visible";

        dropdownContent.style.transform =
        "translateY(0px) scale(1)";

    });

    dropdown.addEventListener("mouseleave", () => {

        dropdownContent.style.opacity = "0";
        dropdownContent.style.visibility = "hidden";

        dropdownContent.style.transform =
        "translateY(15px) scale(0.98)";

    });

}


/* =========================
   SCROLL MENU ULTRA FLUIDO
========================= */

if(dropdownContent){

    dropdownContent.addEventListener("wheel", (e) => {

        e.preventDefault();

        dropdownContent.scrollBy({
            top: e.deltaY * 0.8,
            behavior: "smooth"
        });

    });

}


/* =========================
   EFFETTO HERO FLOATING
========================= */

const heroText =
document.querySelector(".hero h1");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    if(heroText){

        heroText.style.transform =
        `translateY(${scrollY * 0.15}px)`;

    }

});


/* =========================
   TITOLO TAB DINAMICO
========================= */

const originalTitle = document.title;

window.addEventListener("blur", () => {

    document.title =
    "Torna su Krisis ✨";

});

window.addEventListener("focus", () => {

    document.title = originalTitle;

});


/* =========================
   MICRO ANIMAZIONE QUOTE
========================= */

const quote =
document.querySelector(".hero-quote");

if(quote){

    setInterval(() => {

        quote.style.opacity = "0.85";

        setTimeout(() => {

            quote.style.opacity = "1";

        }, 1200);

    }, 2500);

}


/* =========================
   CURSORE LIGHT EFFECT
========================= */

const light = document.createElement("div");

light.style.position = "fixed";
light.style.width = "220px";
light.style.height = "220px";
light.style.borderRadius = "50%";
light.style.pointerEvents = "none";
light.style.background =
"radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)";

light.style.zIndex = "0";
light.style.filter = "blur(20px)";
light.style.transition =
"transform 0.08s linear";

document.body.appendChild(light);

document.addEventListener("mousemove", (e) => {

    light.style.transform =
    `translate(${e.clientX - 110}px, ${e.clientY - 110}px)`;

});


/* =========================
   ANIMAZIONE ENTRATA HERO
========================= */

window.addEventListener("load", () => {

    const hero =
    document.querySelector(".hero");

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.transition =
        "opacity 1.5s ease";

        hero.style.opacity = "1";

    }, 300);

});


/* =========================
   EFFETTO SCROLL FOOTER
========================= */

const footer =
document.querySelector("footer");

window.addEventListener("scroll", () => {

    const scrollPos =
    window.scrollY + window.innerHeight;

    const pageHeight =
    document.body.offsetHeight;

    if(scrollPos > pageHeight - 200){

        footer.style.opacity = "1";
        footer.style.transform =
        "translateY(0px)";

    }

});


/* =========================
   PERFORMANCE SMOOTH
========================= */

window.requestAnimationFrame(() => {

    document.body.classList.add("loaded");

});