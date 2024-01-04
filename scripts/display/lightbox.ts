import {
  lightboxTemplate,
} from '../templates/lightbox.ts';
import {
  getImgAndText,
  deleteLightbox,
  closeLightbox,
  arrowSettings,
} from '../utils/lightbox.ts';
// affichage de la lightbox'

export function lightbox() {
  const cardDom = document.querySelectorAll('.mediaCardWrapper');
  for (let i = 0; i < cardDom.length; i++) {
    const cardPictureDom = cardDom[i].firstElementChild;
    cardPictureDom!.addEventListener('click', () => {
      const { img, text } = getImgAndText(cardDom[i]);
      launchLightbox(img, text);
    });
  }
}

export function launchLightbox(img, text) {
  deleteLightbox();
  displayLightbox(img, text);
  closeLightbox();
  arrowSettings(img);
}

function displayLightbox(img, text) {
  const path = img.src ? img.src : img.firstElementChild.src;
  const lightboxWrapper = lightboxTemplate(path, text.textContent);
  const main = document.querySelector('main');
  const header = document.querySelector('header');

  header?.setAttribute('class', 'hidden');
  header?.setAttribute('aria-hidden', 'true');

  main?.setAttribute('class', 'hidden');
  main?.setAttribute('aria-hidden', 'true');

  main?.after(lightboxWrapper);
}
