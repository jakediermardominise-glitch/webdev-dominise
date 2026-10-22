const menBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    })
);

// ---------- Typing effect ----------
const roles = ["BSCS student", "future developer", "lifelong learner", "sports lover"];
const typed = document.getElementById("typed");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
    typed.textContent = roles[0];
} else {
    let r = 0, c = 0, deleting = false;
    (function tick() {
        const word = roles[r];
        c += deleting ? -1 : 1;
        typed.textContent = word.slice(0, c);
        let delay = deleting ? 45 : 90;
        if (!deleting && c === word.length) { deleting = true; delay = 1400; }
        else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
        setTimeout(tick, delay);
    })();
}

// ---------- Highlight the nav link for the section in view ----------
const sections = document.querySelectorAll("#home, #about, #student-info, #activities");
const links = document.querySelectorAll(".links a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                links.forEach((l) =>
                    l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
                );
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => observer.observe(s));

// ---------- Back to top ----------
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500));
toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

// ---------- Photo fallback (shows initials if image.jpeg is missing) ----------
const photo = document.getElementById("photo");
const photoImg = document.getElementById("photoImg");
function photoLoaded() { photo.classList.add("has-image"); }
function photoFailed() { photoImg.style.display = "none"; }
if (photoImg.complete) { photoImg.naturalWidth ? photoLoaded() : photoFailed(); }
photoImg.addEventListener("load", photoLoaded);
photoImg.addEventListener("error", photoFailed);

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();