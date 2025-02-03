// Responsive Menu
let menu = document.querySelector("#menu");
let right = document.querySelector(".right");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  right.classList.toggle('active');
};

// Dark Mode

let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.contains("dark-theme");
};

// Scroll

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('h2 , .leftsection', { origin: 'top' });
ScrollReveal().reveal('.rightsection, .service-cont , .skills-row, .cards, form', { origin: 'bottom' });
ScrollReveal().reveal('.leftsection h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.leftsection p, .about-cont', { origin: 'right' });
