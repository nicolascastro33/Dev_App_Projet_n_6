import { launchLightbox } from "../display/lightbox";

export function closeLightbox() {
  const buttonClose = document.querySelector('#closeModalLightbox');
  buttonClose?.addEventListener('click', () => {
    deleteLightbox()
  });
}

export function deleteLightbox(){
  const lightbox = document.querySelector('.lightbox');
    lightbox?.remove();
}
// utilisation du flèches de la lightbox
export function nextLightbox(el) {
  const arrow = document.querySelector('#arrowRight');
  arrow?.addEventListener('click', () => {
    launchLightbox(el);
  });
}

export function previousLightbox(el, ) {
  const arrow = document.querySelector('#arrowLeft');
  arrow?.addEventListener('click', () => {
    launchLightbox(el);
  });
}

export function arrowSettings(el) {
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


// get information
function getPreviousAndNextSibling(el) {
  const nextElement = el.nextElementSibling;
  const previousElement = el.previousElementSibling;
  return { nextElement, previousElement };
}

export function getImgAndText(el) {
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
