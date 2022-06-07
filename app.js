// PHOTO
const btn = document.querySelector(".btnPhoto");
const photo = document.querySelector(".photo__container");
let btnContainer = document.querySelector(".button__container");

btn.addEventListener("click", () => {
  photo.classList.toggle("active");
  btn.innerHTML =
    btn.innerHTML === "MORE PHOTO"
      ? (btn.innerHTML = "HIDE PHOTO")
      : (btn.innerHTML = "MORE PHOTO");

  if (photo.classList.contains("active")) {
    btnContainer.remove();
    photo.appendChild(btnContainer);
  } else {
    document.querySelector(".box2").after(btnContainer);
  }
});

// MOVE INTRO
let bg = document.querySelector(".bg__intro");
let sign = document.querySelector(".sign-wrap-4");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = "translate(-" + x * 30 + "px, -" + y * 30 + "px)";
  sign.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});

// Carousel

const foodCont = document.querySelector(".food__container");

let move = 50;
setInterval(moveSlide, 2000);

function moveSlide() {
  move -= 450;
  foodCont.style.left = move + "px";
  if (move < -2150) {
    move = 50;
  }
}

AOS.init({
  duration: 1200,
});
