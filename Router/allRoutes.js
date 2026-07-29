import Route from "./Route.js";

//Définir ici vos routes

export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", [], "/js/home.js"),
  new Route(
    "/covoiturage",
    "Accès covoiturage",
    "/pages/covoiturage.html",
    [],
    "/js/covoiturage.js",
  ),
  new Route(
    "/details",
    "Détails du covoiturage",
    "/pages/details.html",
    [],
    "/js/details.js",
  ),
  new Route(
    "/connexion",
    "Connexion",
    "/pages/auth/signin.html",
    [],
    "/js/auth/signin.js",
  ),
  new Route(
    "/inscription",
    "Inscription",
    "/pages/auth/signup.html",
    [],
    "/js/auth/signup.js",
  ),
  new Route(
    "/compte",
    "Mon compte",
    "/pages/auth/account.html",
    [],
    "/js/auth/account.js",
  ),
  new Route(
    "/historique",
    "Mon historique",
    "/pages/auth/history.html",
    [],
    "/js/auth/history.js",
  ),
  new Route(
    "/credit",
    "Mes crédits",
    "/pages/auth/credit.html",
    [],
    "/js/auth/credit.js",
  ),
  new Route(
    "/avis",
    "Mes avis",
    "/pages/auth/review.html",
    [],
    "/js/auth/review.js",
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "EcoRide";
