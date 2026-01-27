document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".list");
  const icons = document.querySelector(".icons");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  toggleBtn.addEventListener("click", () => {
    menuList.classList.toggle("active");
    icons.classList.toggle("show-icons");
  });
  
  burger.addEventListener("click", () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});



