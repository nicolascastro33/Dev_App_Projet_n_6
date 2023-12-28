import { lightboxTemplate } from '../templates/lightbox';
// affichage de la lightbox
function displayLightbox(img, text) {
  const path = !img.src ? img.firstElementChild.src : img.src
  const lightboxWrapper = lightboxTemplate(path, text.textContent);
  const main = document.querySelector('main');
  main?.after(lightboxWrapper);
}

function closeLightbox() {
  const buttonClose = document.querySelector('#closeModalLightbox');
  buttonClose?.addEventListener('click', () => {
    deleteLightbox()
  });
}

function deleteLightbox(){
  const lightbox = document.querySelector('.lightbox');
    lightbox?.remove();
}
// utilisation du flèches de la lightbox
function nextLightbox(el) {
  const arrow = document.querySelector('#arrowRight');
  arrow?.addEventListener('click', () => {
    launchLightbox(el);
  });
}

function previousLightbox(el) {
  const arrow = document.querySelector('#arrowLeft');
  arrow?.addEventListener('click', () => {
    launchLightbox(el);
  });
}

export function lightbox() {
  const cardDom = document.querySelectorAll('.mediaCardWrapper');
  for (let i = 0; i < cardDom.length; i++) {
    const cardPictureDom = cardDom[i].firstElementChild
    cardPictureDom!.addEventListener('click', () => {
      launchLightbox(cardDom[i]);
    });
  }
}

function arrowSettings(el) {
  const { nextElement, previousElement } = getPreviousAndNextSibling(el);
  const { firstChild, lastChild } = getFirstAndLastElement();
  if (!nextElement) {
    nextLightbox(firstChild);
    previousLightbox(previousElement);
  } else if (!previousElement) {
    nextLightbox(nextElement);
    previousLightbox(lastChild);
  } else {
    nextLightbox(nextElement);
    previousLightbox(previousElement);
  }
}

function launchLightbox(el) {
  const { img, text } = getImgAndText(el);
  deleteLightbox()
  displayLightbox(img, text);
  closeLightbox();
  arrowSettings(el);
}

// get information
function getPreviousAndNextSibling(el) {
  const nextElement = el.nextElementSibling;
  const previousElement = el.previousElementSibling;
  return { nextElement, previousElement };
}

function getImgAndText(el) {
  const img = document.getElementById(`media-${el.id}`);
  const text = document.getElementById(`text-${el.id}`);
  return { img, text };
}

function getFirstAndLastElement() {
  const parentElement = document.querySelector('section');
  const firstChild = parentElement?.firstChild;
  const lastChild = parentElement?.lastChild;
  return { firstChild, lastChild };
}
