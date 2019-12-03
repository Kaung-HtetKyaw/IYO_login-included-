//Preloading
window.addEventListener("load", () => {
    const preload = document.querySelector(".preload_content");
    preload.classList.add("preload-finished");
    setTimeout(() => {
        preload.remove();
    }, 900);
});

//Full Page js Initailizing
new fullpage("#wrapper", {
    autoscrolling: true,
    navigation: true,
    scrollingSpeed: 1000,
    navigationTooltips: ["Welcome", "About Us", "Our Events", "Contact Us"],
    showActiveTooltip: false,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;

        const tl = new TimelineMax({ delay: 0.5 });

        if (destination.index === 0) {
            const text_slider = document.querySelector(".text-slider-wrapper");

            tl.fromTo(
                text_slider,
                0.7, { y: "50", opacity: 0 }, { y: 0, opacity: 1 }
            );
        }

        if (destination.index === 1) {
            const about = document.querySelector(".about--animate");
            const t_about = document.querySelector(".title--about");
            tl.fromTo(
                t_about,
                0.3, { y: "50", opacity: 0 }, { y: 0, opacity: 1 }
            ).fromTo(about, 0.3, { x: "200%", opacity: 0 }, { x: "0%", opacity: 1 });
        }

        if (destination.index === 2) {
            const check = document.querySelector(".check--animate");
            const t_check = document.querySelector(".title--check");
            tl.fromTo(
                t_check,
                0.3, { y: "50", opacity: 0 }, { y: 0, opacity: 1 }
            ).fromTo(check, 0.3, { x: "-200%", opacity: 0 }, { x: "0%", opacity: 1 });
        }

        if (destination.index === 3) {
            const register = document.querySelector(".register--content");
            const register__t = document.querySelector(".register--title");
            tl.fromTo(
                register__t,
                0.3, { y: "50", opacity: 0 }, { y: 0, opacity: 1 }
            ).fromTo(
                register,
                0.3, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1 }
            );
        }
        if (destination.index === 3) {
            const footer_c = document.querySelectorAll(".footer-col");
            tl.fromTo(footer_c[0], 0.3, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(footer_c[1], 0.3, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(
                    footer_c[2],
                    0.3, { y: "50", opacity: 0 }, { y: 0, opacity: 1 }
                );
        }
    }
});

//Hamburger Toggle
const wrapper = document.querySelector(".main");
const hamburger = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    wrapper.classList.toggle("is-active");
    document.querySelector("#fp-nav").classList.toggle("is-active");
    document.querySelector(".hero").classList.toggle("is-froze");
});

//Dropdown

const dropdown = document.querySelectorAll(".dropdown");
const dropdown__list = document.querySelectorAll(".dropdown--list");
const dropdown__list_arr = Array.from(dropdown__list);
const arrow = document.querySelectorAll(".arrow");
const arrow_arr = Array.from(arrow);
const dropdown_arr = Array.from(dropdown);
for (let i = 0; i < dropdown_arr.length; i++) {
    dropdown_arr[i].addEventListener("click", () => {
        console.log("clicked");
        arrow[i].classList.toggle("arrow--clicked");
        dropdown__list[i].classList.toggle("dropdown--clicked");
    });
}
//dropdown.forEach(el => {
//   el.addEventListener("click", () => {
//     const dropdown__list = document.querySelector(".dropdown--list");
//      arrow.classList.toggle("arrow--clicked");
//     dropdown__list.classList.toggle(`${el}dropdown--clicked`);
//  });
//});

//Nav Style on Scroll

const header = document.querySelector(".header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Dark Mode

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".darkmode");
const darkModeButton = document.querySelector(".darkmode-toggler");
const theme = document.querySelector(".item-text");
const enableDarkMode = () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    darkModeToggle.classList.add("toggle-clicked");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    darkModeToggle.classList.remove("toggle-clicked");
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
    theme.textContent = "Dark Theme: On";
} else {
    document.body.classList.add("light");
    theme.textContent = "Dark Theme: Off";
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode != "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

//Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});

document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});