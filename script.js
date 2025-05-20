document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    if (url) window.open(url, "_blank");
  });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const text = link.textContent.trim().toUpperCase();

    // Remove existing active highlights
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Show matching category
    document.querySelectorAll(".card").forEach(card => {
      const isExtension = card.classList.contains("extension");
      const isEwallet = card.classList.contains("ewallet");

      if (text === "EXTENTIONS" && isExtension) {
        card.style.display = "flex";
      } else if (text === "E-WALLETS" && isEwallet) {
        card.style.display = "flex";
      } else if (text !== "EXTENTIONS" && text !== "E-WALLETS") {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
