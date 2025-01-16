// Cursor Code
// const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");

// window.addEventListener("mousemove", function (e) {
//   const posX = e.clientX;
//   const posY = e.clientY;

//   cursorDot.style.left = `${posX}px`;
//   cursorDot.style.top = `${posY}px`;

//   cursorOutline.style.left = `${posX}px`;
//   cursorOutline.style.top = `${posY}px`;

//   cursorOutline.animate(
//     {
//       left: `${posX}px`,
//       top: `${posY}px`,
//     },
//     { duration: 500, fill: "forwards" }
//   );
// });
// Cursor Code End

// Responsive Menu

document.querySelector(".menu-icon").addEventListener("click", () => {
  const navMenu = document.querySelector(".menu");
  navMenu.classList.toggle("show");
});

// Dark Mode

let icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.svg"
  }
  else{
    icon.src = "Images/moon.svg"
  }
}
