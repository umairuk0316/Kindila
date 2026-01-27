document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".list");
  const icons = document.querySelector(".icons");

  toggleBtn.addEventListener("click", () => {
    menuList.classList.toggle("active");
    icons.classList.toggle("show-icons");
  });
});



