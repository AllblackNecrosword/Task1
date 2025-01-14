const cards = document.querySelectorAll(".card");
let activeIndex = 0;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "next", "previous", "hidden");
    if (index === activeIndex) {
      card.classList.add("active");
    } else if (index === (activeIndex + 1) % cards.length) {
      card.classList.add("next");
    } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
      card.classList.add("previous");
    } else {
      card.classList.add("hidden");
    }
  });
}

function handleNext() {
  activeIndex = (activeIndex + 1) % cards.length;
  updateCards();
}

function handlePrevious() {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateCards();
}

document.querySelector(".card-container").addEventListener("click", handleNext);

updateCards();
