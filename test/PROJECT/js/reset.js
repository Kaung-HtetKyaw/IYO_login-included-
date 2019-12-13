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

//Show and Hide password

const btn__eye=document.querySelectorAll(".eye-icon");
let eye_arr=Array.from(btn__eye);
const input=document.querySelectorAll("#pwd");
let input_arr=Array.from(input);


for(let i=0;i<eye_arr.length;i++){
    let btn=eye_arr[i];
    let pwd=input_arr[i];
    showhide(btn,pwd);

    function showhide(btn,pwd){
       btn.addEventListener("click",()=>{
            if(pwd.type=="password"){
                pwd.type="text";
                btn.classList.add("fa-eye-slash");
            }
            else{
                pwd.type="password";
                btn.classList.remove("fa-eye-slash");
            }
       })
    }
}

