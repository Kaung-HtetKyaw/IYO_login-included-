//Dark Mode

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".darkmode");
const darkModeButton = document.querySelector(".darkmode-toggler");
const theme = document.querySelector(".item-text");
const enableDarkMode = () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
} else {
    document.body.classList.add("light");
}

document.addEventListener("load", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode != "enabled") {
        enableDarkMode();
        theme.textContent = "Dark Theme: On";
    } else {
        disableDarkMode();
        theme.textContent = "Dark Theme: Off";
    }
});