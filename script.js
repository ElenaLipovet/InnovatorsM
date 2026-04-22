function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Button that changes the <h1> color
  const colorButton = document.querySelector(".color-button");
  const heading = document.querySelector("h1");

  if (colorButton && heading) {
    // Helper to move the button to a random, fully visible position
    const moveButtonToRandomPosition = () => {
      // Get button size
      const buttonRect = colorButton.getBoundingClientRect();
      const buttonWidth = buttonRect.width;
      const buttonHeight = buttonRect.height;

      // Get viewport size
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Compute maximum allowed top/left so the button stays fully inside
      const maxLeft = Math.max(0, viewportWidth - buttonWidth);
      const maxTop = Math.max(0, viewportHeight - buttonHeight);

      // Pick random integers between 0 and the max values
      const randomLeft = Math.random() * maxLeft;
      const randomTop = Math.random() * maxTop;

      // Apply the position
      colorButton.style.left = `${randomLeft}px`;
      colorButton.style.top = `${randomTop}px`;
    };

    // Place the button somewhere random on first load
    moveButtonToRandomPosition();

    colorButton.addEventListener("click", () => {
      const randomColor = getRandomColor();
      heading.style.color = randomColor;

      // Move the button after changing the color
      moveButtonToRandomPosition();
    });
  }

  // Hamburger menu toggle
  const navToggle = document.querySelector(".navbar__toggle");
  const navLinks = document.querySelector(".navbar__links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("navbar__links--open");
    });
  }
  // Accordion functionality for funding page
  // Accordion functionality for funding page
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
      // Close all panels except the one clicked
      accordions.forEach((other, idx) => {
        if (other !== this) {
          other.classList.remove('active');
          const otherPanel = other.nextElementSibling;
          if (otherPanel) otherPanel.classList.remove('show');
        }
      });
      // Toggle this panel
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel) {
        panel.classList.toggle('show');
      }
    });
  });
});
