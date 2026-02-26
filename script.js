// Typing Effect
const text = ["AI/ML Engineer", "Python Developer", "BCA Student"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

const focusElement = document.querySelector(".Focus");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
      focusElement.innerHTML = "Focus: " + currentText;
    }

    if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
      focusElement.innerHTML = "Focus: " + currentText;
    }

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();


// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Initial style
revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.8s ease";
});