// Responsive Menu

document.querySelector(".menu-icon").addEventListener("click", () => {
  const navMenu = document.querySelector(".menu");
  navMenu.classList.toggle("show");
});

// Dark Mode

let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.svg";
  } else {
    icon.src = "Images/moon.svg";
  }
};
