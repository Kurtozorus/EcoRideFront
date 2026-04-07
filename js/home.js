function initHome() {
  const today = new Date().toLocaleDateString("en-CA");

  const departureDate = document.querySelector("#departureDate");
  const returnDate = document.querySelector("#returnDate");

  if (departureDate && returnDate) {
    departureDate.value = today;
    departureDate.min = today;
    returnDate.min = today;
  }
}

initHome();
