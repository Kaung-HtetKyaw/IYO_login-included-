
//Hamburger Toggle
const wrapper = document.querySelector(".main");
const hamburger = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    wrapper.classList.toggle("is-active");
});

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
        theme.textContent = "Dark Theme: On";
    } else {
        disableDarkMode();
        theme.textContent = "Dark Theme: Off";
    }
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

//Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY ) + "px; left: " + (e.pageX ) + "px;"
    );
});

document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});