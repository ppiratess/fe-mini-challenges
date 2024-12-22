const starts = document.querySelectorAll<HTMLElement>("#star-rating span");
const ratingValue = document.querySelector("#rating-value");
const clearRatingButton =
  document.querySelector<HTMLButtonElement>("#clear-rating");

function highlightStars(index: number) {
  starts.forEach((star, i) => {
    star.style.color = i <= index ? "gold" : "gray";
  });
}

function setRating(index: number) {
  if (!ratingValue) return;

  ratingValue.textContent = String(index + 1);
  if (clearRatingButton) {
    clearRatingButton.disabled = false;
  }
}

function clearRating() {
  if (!ratingValue) return;

  starts.forEach((star) => {
    star.style.color = "gray";
  });

  ratingValue.textContent = String(0);
  if (clearRatingButton) {
    clearRatingButton.disabled = true;
  }
}

function resetStars() {
  const currentRating = parseInt(String(ratingValue?.textContent), 10);
  starts.forEach((star, i) => {
    star.style.color = i < currentRating ? "gold" : "gray";
  });
}

starts.forEach((star, index: number) => {
  star.addEventListener("mouseover", () => highlightStars(index));
  star.addEventListener("click", () => setRating(index));
  star.addEventListener("mouseleave", () => resetStars());
});

clearRatingButton?.addEventListener("click", () => clearRating());

if (clearRatingButton) {
  clearRatingButton.disabled = Number(ratingValue?.textContent) === 0;
}
