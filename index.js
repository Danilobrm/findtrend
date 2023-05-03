const toggleRetangle = document.querySelector(".turn-retangle");
const navMenu = document.querySelector(".nav-bar");
const hamburguer = document.querySelector(".hamburguer");
const bars = document.querySelectorAll(".bar");
const navItem = document.querySelectorAll(".nav-item");

let active = false;
function toggleOption() {
  toggleRetangle.style.justifyContent = active ? "flex-start" : "flex-end";
  active = !active;
}

function openMenu() {
  navMenu.classList.toggle("active");
  hamburguer.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
}

navItem.forEach((item) =>
  item.addEventListener("click", () => {
    item.parentElement.className !== "nav-bar-footer" && openMenu();
  })
);
