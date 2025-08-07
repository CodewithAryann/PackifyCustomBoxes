
// const hamburger = document.getElementById('hamburger-menu');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburger.classList.toggle("open");
    const bars = hamburger.querySelectorAll("span");
    if (hamburger.classList.contains("open")) {
      bars[0].style.transform = "rotate(45deg) translateY(8px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(-45deg) translateY(-8px)";
    } else {
      bars[0].style.transform = "";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "";
    }
  });

  // Mobile dropdown toggle
  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle("hidden");
    });
  });


// SmoothScroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerOffset = 80; // adjust for fixed header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});


