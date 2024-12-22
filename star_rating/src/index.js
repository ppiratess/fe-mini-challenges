var starts = document.querySelectorAll("#star-rating span");
var ratingValue = document.querySelector("#rating-value");
var clearRatingButton = document.querySelector("#clear-rating");
function highlightStars(index) {
    starts.forEach(function (star, i) {
        star.style.color = i <= index ? "gold" : "gray";
    });
}
function setRating(index) {
    if (!ratingValue)
        return;
    ratingValue.textContent = String(index + 1);
    if (clearRatingButton) {
        clearRatingButton.disabled = false;
    }
}
function clearRating() {
    if (!ratingValue)
        return;
    starts.forEach(function (star) {
        star.style.color = "gray";
    });
    ratingValue.textContent = String(0);
    if (clearRatingButton) {
        clearRatingButton.disabled = true;
    }
}
function resetStars() {
    var currentRating = parseInt(String(ratingValue === null || ratingValue === void 0 ? void 0 : ratingValue.textContent), 10);
    starts.forEach(function (star, i) {
        star.style.color = i < currentRating ? "gold" : "gray";
    });
}
starts.forEach(function (star, index) {
    star.addEventListener("mouseover", function () { return highlightStars(index); });
    star.addEventListener("click", function () { return setRating(index); });
    star.addEventListener("mouseleave", function () { return resetStars(); });
});
clearRatingButton === null || clearRatingButton === void 0 ? void 0 : clearRatingButton.addEventListener("click", function () { return clearRating(); });
if (clearRatingButton) {
    clearRatingButton.disabled = Number(ratingValue === null || ratingValue === void 0 ? void 0 : ratingValue.textContent) === 0;
}
