
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Portfolio category filters
const filterButtons = document.querySelectorAll(".filter");
const photoCards = document.querySelectorAll(".photo-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    photoCards.forEach((card) => {
      card.hidden =
        category !== "all" &&
        card.dataset.category !== category;
    });
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Demo booking form
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!bookingForm.reportValidity()) return;

  formMessage.textContent =
    "Demo only: your details were not sent. Connect a booking service to receive enquiries.";

  bookingForm.reset();
});
