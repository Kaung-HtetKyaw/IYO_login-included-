const noti__btn = document.querySelectorAll(".btn");
let noti__btn__arr = Array.from(noti__btn);
const noti__box = document.querySelector(".noti");

noti__btn__arr.forEach(el => {
  el.addEventListener("click", () => {
    noti__box.classList.add("noti--get");

    setTimeout(() => {
      noti__box.classList.remove("noti--get");
    }, 2000);
  });
});
