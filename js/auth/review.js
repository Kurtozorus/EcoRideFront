/*fonction qui affiche les étoiles en fonction de la note du conducteur*/
const fullStar = `<i class="bi bi-star-fill"></i>`;
const halfStar = `<i class="bi bi-star-half"></i>`;
const emptyStar = `<i class="bi bi-star"></i>`;

function generateStars(note) {
  note = parseFloat(note);

  let starsHTML = "";

  for (let i = 1; i <= 5; i++) {
    if (note >= i) {
      starsHTML += fullStar;
    } else if (note >= i - 0.5) {
      starsHTML += halfStar;
    } else {
      starsHTML += emptyStar;
    }
  }

  return starsHTML;
}
// const note = {{ user.averageRating ?? 0 }};
// Sélectionne toutes les zones de rating
document.querySelectorAll(".rating-desktop").forEach((ratingElement) => {
  // récupère la note du data-note
  const note = ratingElement.dataset.note;

  // injecte les étoiles
  ratingElement.innerHTML = generateStars(note);
});
document.querySelectorAll(".rating-notice-desktop").forEach((ratingElement) => {
  // récupère la note du data-note
  const note = ratingElement.dataset.note;

  // injecte les étoiles
  ratingElement.innerHTML = generateStars(note);
});
