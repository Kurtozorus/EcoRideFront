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
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "EcoRide";
