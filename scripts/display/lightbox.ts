import { lightboxTemplate } from '../templates/lightbox';
import { getImgAndText, deleteLightbox, closeLightbox, arrowSettings } from '../utils/lightbox.ts';
// affichage de la lightbox

export function lightbox() {
  const cardDom = document.querySelectorAll('.mediaCardWrapper');
  for (let i = 0; i < cardDom.length; i++) {
    const cardPictureDom = cardDom[i].firstElementChild
    cardPictureDom!.addEventListener('click', () => {
      launchLightbox(cardDom[i]);
    });
  }
}

export function launchLightbox(el) {
  const { img, text } = getImgAndText(el);
  deleteLightbox()
  displayLightbox(img, text);
  closeLightbox();
  arrowSettings(el);
}


function displayLightbox(img, text) {
  const path = !img.src ? img.firstElementChild.src : img.src
  const lightboxWrapper = lightboxTemplate(path, text.textContent);
  const main = document.querySelector('main');
  main?.after(lightboxWrapper);
}