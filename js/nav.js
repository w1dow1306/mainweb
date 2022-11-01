const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");
  const line3 = document.querySelector(".line3");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navlinks.forEach((link) => {
      link.style.animation = `navlinkFade 1s ease-out forwards .5s`;
    });
  });
}; 


function run() {
  navslide();
}
run()
