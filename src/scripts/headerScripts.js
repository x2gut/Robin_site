const header = document.querySelector(".header");
const headerOffset = header.offsetHeight;
const headerBurgerBtn = document.querySelector(".header__burger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = Array.from(document.querySelectorAll(".mobile-nav-item"))
let lastScroll = 0;

const observeSections = {
    hero: document.querySelector(".hero"),
    experience: document.querySelector(".experience"),
    projects: document.querySelector(".projects"),
    photography: document.querySelector(".photography"),
    contact: document.querySelector(".contact"),
};

const navItems = {
    experience: document.getElementById("experience_nav"),
    projects: document.getElementById("work_nav"),
    photography: document.getElementById("photography_nav"),
    contact: document.getElementById("contact_nav"),
}

const headerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetClass = entry.target.classList[0];
            if (targetClass === "hero") {
                Object.values(navItems).forEach(navItem => navItem.classList.remove("active"));
            }
            if (navItems[targetClass]) {
                Object.values(navItems).forEach(navItem => navItem.classList.remove("active"));
                navItems[targetClass].classList.add("active");
            }
        }
        return;
    })
}

const options = {
    threshold: 0.22,
}

const headerObserver = new IntersectionObserver(headerCallback, options);

Object.values(observeSections).forEach(section => {
    headerObserver.observe(section);
})

const onScroll = () => {
    const currentScroll = document.documentElement.scrollTop;

    if (header) {
        if (currentScroll <= 88) {
            header.classList.remove("sticky");
        } else if (currentScroll < lastScroll + 10) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    lastScroll = currentScroll;
};

let isScrolling = false;
document.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            onScroll();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

headerBurgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

mobileNavItems.forEach(item => {
    item.addEventListener("click", () =>  {
        mobileNav.classList.remove("active");
        document.body.classList.toggle("no-scroll");
    })
})

