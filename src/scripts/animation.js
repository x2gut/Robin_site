const animItemsToTop = {
    heroText: document.querySelector(".hero__text"),
    experienceTop: document.querySelector(".experience__top"),
    skillsetCard: Array.from(document.querySelectorAll(".skillset__card")),
}

const animItemsToRight =  {
    heroImg: document.querySelector(".hero__img"),
    philosophyContent: document.querySelector(".philosophy__content"),
    experienceCard: Array.from(document.querySelectorAll(".experience__card")),
    skillsetText: document.querySelector(".skillset__text"),
    projectCards: Array.from(document.querySelectorAll(".project__card")),
}

const animItemsToBottom = {
    partners: Array.from(document.querySelectorAll(".partners__partner")),
}

const animItemsToLeft = {
    instContent: document.querySelector(".instagram__content"),
    testimonialCards: Array.from(document.querySelectorAll(".testimonials__card"))
}

const callback = (entries, animationType) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(animationType);
        }
    });
};

const options = {
    threshold: 0.25,
}

const observer = (animationType) => new IntersectionObserver((entries) => {
    callback(entries, animationType);
}, options)

const observerTop = observer("scrolled-top");
const observerRight = observer("scrolled-right");
const observerBottom = observer("scrolled-bottom");
const observerLeft = observer("scrolled-left");

function animateElem(AnimateItems, observerType) {
    Object.values(AnimateItems).forEach(elem => {
        if (Array.isArray(elem)) {
            elem.forEach(item => {
                observerType.observe(item);
            });
        } else {
            observerType.observe(elem);
        }
    })
}

animateElem(animItemsToRight, observerRight);
animateElem(animItemsToTop, observerTop);
animateElem(animItemsToBottom, observerBottom);
animateElem(animItemsToLeft, observerLeft);