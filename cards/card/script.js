const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => c.classList.add("not-hovered"));
    card.classList.remove("not-hovered");
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach((c) => {
      c.classList.remove("not-hovered", "hovered");
    });
  });
});
