let humberger = document.querySelector(".humberger");
let links = document.querySelector(".links");

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  links.classList.toggle("active");
});
