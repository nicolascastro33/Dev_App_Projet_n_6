import { launchLightbox } from '../display/lightbox.ts';

export function keydownLightbox(){
  document.addEventListener('keydown', (e) =>{
    if(document.querySelector(".lightbox") === null){
      return
    }
    if(e.key === 'Escape'){
      deleteLightbox()
    }else if(e.key === 'ArrowRight'){
      const idImage = `${document.querySelector('#arrowRight')?.getAttribute("name")?.slice(6)}`;
      const img = document.querySelector(`#media-${idImage}`)
      const text = document.querySelector(`#text-${idImage}`)
      console.log(text)
      launchLightbox(img, text)
    }else if(e.key === 'ArrowLeft'){
      const idImage = `${document.querySelector('#arrowLeft')?.getAttribute("name")?.slice(6)}`;
      const img = document.querySelector(`#media-${idImage}`)
      const text = document.querySelector(`#text-${idImage}`)
      launchLightbox(img, text)
    }
  })
}

export function closeLightbox() {
  const buttonClose = document.querySelector('#closeModalLightbox');
  buttonClose?.addEventListener('click', () => {
    deleteLightbox();
  });
}

export function deleteLightbox() {
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  const lightbox = document.querySelector('.lightbox');

  lightbox?.remove();

  main?.setAttribute('aria-hidden', 'false');
  main?.removeAttribute('class');
  header?.setAttribute('aria-hidden', 'false');
  header?.removeAttribute('class');
}

// utilisation du flèches de la lightbox
export function nextLightbox(el) {
  const {img, text} = getImgAndText(el)
  const newArrowId = img?.id.slice(6)
  const arrow = document.querySelector('#arrowRight');
  arrow?.setAttribute("name", `arrow-${newArrowId}`) 
  arrow?.addEventListener('click', () => {
    launchLightbox(img, text);
  });
}

export function previousLightbox(el) {
  const {img, text} = getImgAndText(el)
  const newArrowId = img?.id.slice(6)
  const arrow = document.querySelector('#arrowLeft');
  arrow?.setAttribute("name", `arrow-${newArrowId}`) 
  arrow?.addEventListener('click', () => {
    launchLightbox(img, text);
  });
}

export function arrowSettings(img) {
  const { nextElement, previousElement } = getPreviousAndNextSibling(img);
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
function getPreviousAndNextSibling(img) {
  const parentElement = img.closest(".mediaCardWrapper")
  const nextElement = parentElement.nextElementSibling;
  const previousElement = parentElement.previousElementSibling;
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
