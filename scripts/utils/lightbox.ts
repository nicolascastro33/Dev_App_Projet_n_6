import { lightboxTemplate } from "../templates/lightbox";
//finaliser la partie des settings des arrows 
// affichage de la lightbox
function displayLightbox(img, text) {
  const lightboxWrapper = lightboxTemplate(img.src, text.textContent);
  const main = document.querySelector('main');
  main?.after(lightboxWrapper);
}

function closeLightbox() {
  const buttonClose = document.querySelector('#closeModalLightbox');
  buttonClose?.addEventListener('click', () => {
    const lightbox = document.querySelector('.lightbox');
    lightbox?.remove();
  });
}
// utilisation du flèches de la lightbox
function nextLightbox(el) {
  const arrow = document.querySelector('.arrowRight');
  arrow?.addEventListener('click', (e) => {
    launchLightbox(el)
  });
}

function previousLightbox(el) {
  console.log('previous');
}



export function lightbox() {
  const cardDom = document.querySelectorAll('.mediaCardWrapper');
  for (let i = 0; i < cardDom.length; i++) {
    cardDom[i].addEventListener('click', () => {
      launchLightbox(cardDom[i])
    });
  }
}

function arrowSettings(el){
  const { nextElement, previousElement } = getPreviousAndNextSibling(
    el
  );
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

function launchLightbox(el){
  const { img, text } = getImgAndText(el);
  displayLightbox(img, text)
  closeLightbox()
  arrowSettings(el)

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


