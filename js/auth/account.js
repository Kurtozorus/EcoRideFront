const infoConducteur = document.querySelector(".info-conducteur");
const statusSelect = document.getElementById("statusSelect");
const btnSaveStatus = document.getElementById("btn-save-status");
const savedStatus = localStorage.getItem("userStatus");
const smokeCheckbox = document.getElementById("switchCheckSmoke");
const musicCheckbox = document.getElementById("switchCheckMusic");
const discussionCheckbox = document.getElementById("switchCheckDiscussion");
const petsCheckbox = document.getElementById("switchCheckPets");
const smokeSpan = document.querySelector(".smoke");
const musicSpan = document.querySelector(".music");
const discussionSpan = document.querySelector(".discussion");
const petsSpan = document.querySelector(".pets");
const preferencePersonal = document.getElementById("personalPreference");
const spanPersonal = document.querySelector(".personal-preferences");
const btnSavePreferences = document.getElementById("btn-save-preferences");

btnSaveStatus.addEventListener("click", saveStatus);
btnSavePreferences.addEventListener("click", savePrefrences);

smokeCheckbox.addEventListener("change", savePrefrences);
musicCheckbox.addEventListener("change", savePrefrences);
discussionCheckbox.addEventListener("change", savePrefrences);
petsCheckbox.addEventListener("change", savePrefrences);
preferencePersonal.addEventListener("change", savePrefrences);
//Récuperation du statut de l'utilistateur
function saveStatus() {
  const status = statusSelect.value;
  localStorage.setItem("userStatus", status);
  if (status === "driver" || status === "both") {
    infoConducteur.style.display = "block";
  } else {
    infoConducteur.style.display = "none";
  }
}
// Afficher les informations véhicule et préférences selon le statut enregistré
const savedUserStatus = localStorage.getItem("userStatus");
if (savedUserStatus) {
  statusSelect.value = savedUserStatus;
  if (savedUserStatus === "driver" || savedUserStatus === "both") {
    infoConducteur.style.display = "block";
  } else {
    infoConducteur.style.display = "none";
  }
}
// Enregistrer les préférences de l'utilisateur
function savePrefrences() {
  if (smokeCheckbox.checked) {
    smokeSpan.innerHTML =
      '<i class="bi bi-check-circle-fill text-success"></i>';
    localStorage.setItem("smokePreference", "allowed");
  } else {
    smokeSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
    localStorage.setItem("smokePreference", "not_allowed");
  }

  if (musicCheckbox.checked) {
    musicSpan.innerHTML =
      '<i class="bi bi-check-circle-fill text-success"></i>';
    localStorage.setItem("musicPreference", "allowed");
  } else {
    musicSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
    localStorage.setItem("musicPreference", "not_allowed");
  }

  if (discussionCheckbox.checked) {
    discussionSpan.innerHTML =
      '<i class="bi bi-check-circle-fill text-success"></i>';
    localStorage.setItem("discussionPreference", "allowed");
  } else {
    discussionSpan.innerHTML =
      '<i class="bi bi-x-circle-fill text-danger"></i>';
    localStorage.setItem("discussionPreference", "not_allowed");
  }

  if (petsCheckbox.checked) {
    petsSpan.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
    localStorage.setItem("petsPreference", "allowed");
  } else {
    petsSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
    localStorage.setItem("petsPreference", "not_allowed");
  }
  if (preferencePersonal.value.trim() !== "") {
    localStorage.setItem("personalPreference", preferencePersonal.value);
    spanPersonal.innerHTML = preferencePersonal.value;
  }
}

// Afficher les préférences enregistrées au chargement de la page
const savedPersonalPreference = localStorage.getItem("personalPreference");
if (savedPersonalPreference) {
  spanPersonal.innerHTML = savedPersonalPreference;
}

const savedSmokePreference = localStorage.getItem("smokePreference");
if (savedSmokePreference === "allowed") {
  smokeCheckbox.checked = true;
  smokeSpan.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
} else {
  smokeSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
}

const savedMusicPreference = localStorage.getItem("musicPreference");
if (savedMusicPreference === "allowed") {
  musicCheckbox.checked = true;
  musicSpan.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
} else {
  musicSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
}

const savedDiscussionPreference = localStorage.getItem("discussionPreference");
if (savedDiscussionPreference === "allowed") {
  discussionCheckbox.checked = true;
  discussionSpan.innerHTML =
    '<i class="bi bi-check-circle-fill text-success"></i>';
} else {
  discussionSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
}

const savedPetsPreference = localStorage.getItem("petsPreference");
if (savedPetsPreference === "allowed") {
  petsCheckbox.checked = true;
  petsSpan.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
} else {
  petsSpan.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>';
}
