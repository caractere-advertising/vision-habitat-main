/* Placeholder des médias                                          */
/* Tant qu'une image n'est pas chargée, le CSS affiche un shimmer   */
/* (cf. scss/base/skeleton.scss). On marque l'image dès qu'elle a   */
/* fini de charger (ou échoué) pour retirer le placeholder.          */

const LOADED_CLASS = "is-media-loaded";

function markLoaded(img) {
  img.classList.add(LOADED_CLASS);
}

// Images déjà chargées avant l'exécution du script
document.querySelectorAll("img").forEach((img) => {
  if (img.complete) markLoaded(img);
});

// Les events load/error ne remontent pas : on les capture au niveau
// du document, ce qui couvre aussi les images ajoutées plus tard
// (clones Swiper, image de survol, etc.)
["load", "error"].forEach((type) => {
  document.addEventListener(
    type,
    (e) => {
      if (e.target.tagName === "IMG") markLoaded(e.target);
    },
    true,
  );
});
