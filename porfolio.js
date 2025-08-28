const blocks = document.querySelectorAll(".block");
const moonGrid = document.getElementById("moon");
const moonMessage = document.getElementById("moon-m");
const ha = document.getElementById("ha");
const hb = document.getElementById("hb");
const hc = document.getElementById("hc");
const mainmoon = document.getElementById("main-moon");
const head = document.getElementById("header");

blocks.forEach((block) => {
  const image = block.querySelector("img");
  const video = block.querySelector("video");

  block.addEventListener("mouseenter", () => {
    image.style.display = "none";
    video.style.display = "block";
    video.play();
  });

  block.addEventListener("mouseleave", () => {
    image.style.display = "block";
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
  });
});

moonGrid.addEventListener("mouseenter", () => {
  moonMessage.insertAdjacentText("beforeend", "click me");
});

moonGrid.addEventListener("mouseleave", () => {
  moonMessage.textContent = moonMessage.textContent.replace("click me", "");
});

let savedtheme = localStorage.getItem("theme");
const html = document.documentElement;

if (savedtheme == "darkmode") {
  html.classList.add("darkmode");
  html.classList.remove("lightmode");
  mainmoon.classList.add("fa-sun");
  mainmoon.classList.remove("fa-moon");
  
} else {
  html.classList.add("lightmode");
  html.classList.remove("darkmode");
  mainmoon.classList.add("fa-moon");
  mainmoon.classList.remove("fa-sun");

}

let moon = savedtheme === "darkmode";

const t1 = gsap.timeline();

t1.to(".n-a", { duration: 1, x: 20 })
  .to(".name", { duration: 1, x: 20 })
  .to(".n-s", { duration: 1, x: 20 });
  
const t2 = gsap.timeline();


mainmoon.addEventListener("click", () => {
  if (!moon && html.classList.contains("lightmode")) {
    html.classList.add("darkmode");
    html.classList.remove("lightmode");
    localStorage.setItem("theme", "darkmode");
    mainmoon.classList.remove("fa-moon");
    mainmoon.classList.add("fa-sun");
     t2.to("#moon", {duration:2, x:1000})
  } else {
    html.classList.add("lightmode");
    html.classList.remove("darkmode");
    localStorage.setItem("theme", "lightmode");
    mainmoon.classList.remove("fa-sun");
    mainmoon.classList.add("fa-moon");
     t2.to("#moon", {duration:2, x:0})
  }
  moon = !moon;
  t1.restart();
});
