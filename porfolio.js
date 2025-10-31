const blocks = document.querySelectorAll(".block");
const moonGrid = document.getElementById("moon");
const moonMessage = document.getElementById("moon-m");
const ha = document.getElementById("ha");
const hb = document.getElementById("hb");
const hc = document.getElementById("hc");
const mainmoon = document.getElementById("main-moon");
const head = document.getElementById("header");


const codelivebuttons = document.querySelectorAll('.codelive')

blocks.forEach((block)=>{

const target = block.querySelector('.codelive')

  const hoveranim = gsap.to(target,{
    y:-10,
    scale:1.001,
    paused:true,
  })
  block.addEventListener("mouseenter",()=>{
    hoveranim.play()
    })

      block.addEventListener("mouseleave",() => {
      hoveranim.reverse()})
}
)









gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".tech-stack").forEach((el, i) => {

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger:el,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  //animate icon
  t1.from(el,{
    scale:0.2,
    opacity:0,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

    //animate border
    t1.from(el,{
      borderColor: "#070707ff",
      duration: 0.8
    }, "<")

    t1.to(el.querySelector(".tech-name"),{
      opacity:1,
      duration:0.5
    }, ">");


});



moonGrid.addEventListener("mouseenter", () => {
  moonMessage.innerHTML = ""
  moonMessage.insertAdjacentText("beforeend", "click");
});

moonGrid.addEventListener("mouseleave", () => {
  moonMessage.textContent = moonMessage.textContent.replace("click", addtextonmouseleave());
  
  
});


function addtextonmouseleave() {
  if(!moon ){
    return "dark mode"
  }else{
    return "Light mode"
  }
}



let savedtheme = localStorage.getItem("theme");
const html = document.documentElement;

  
const t2 = gsap.timeline();


if (savedtheme == "darkmode") {
  html.classList.add("darkmode");
  html.classList.remove("lightmode");
  mainmoon.classList.add("fa-sun");
  mainmoon.classList.remove("fa-moon");
      moonMessage.innerHTML = "dark mode";
   t2.to("#moon", {duration:4, x: window.innerWidth * 0.1,})
} else {
  html.classList.add("lightmode");
  html.classList.remove("darkmode");
  mainmoon.classList.add("fa-moon");
  mainmoon.classList.remove("fa-sun");
  moonMessage.innerHTML = "light-mode";
   t2.to("#moon", {duration:4, x:window.innerWidth * 0, })
}







let moon = savedtheme === "dark mode";

const t1 = gsap.timeline();

t1.to(".n-a", { duration: 1, x: "2VW" })
  .to(".name", { duration: 1, x: "2VW" })
  .to(".n-s", { duration: 1, x: "2VW" });



mainmoon.addEventListener("click", () => {
  if (!moon && html.classList.contains("lightmode")) {
    html.classList.add("darkmode");
    html.classList.remove("lightmode");
    localStorage.setItem("theme", "darkmode");
    mainmoon.classList.remove("fa-moon");
    mainmoon.classList.add("fa-sun");
    moonMessage.innerHTML = "dark-mode";
     t2.to("#moon", {duration:4, x: window.innerWidth * 0.1, ease: "power2.inOut"})
  } else {
    html.classList.add("lightmode");
    html.classList.remove("darkmode");
    localStorage.setItem("theme", "lightmode");
    mainmoon.classList.remove("fa-sun");
    mainmoon.classList.add("fa-moon");
    moonMessage.innerHTML = "light-mode";
     t2.to("#moon", {duration:4, x:window.innerWidth * 0, ease: "power2.inOut"})
  }
  moon = !moon;
  t1.restart();
});
