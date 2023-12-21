export function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  lightbox?.remove();
}

export function nextLightbox() {
  console.log('next');
}

export function previousLightbox() {
  console.log('previous');
}

export function displayLightbox(path:string, title:string, lightboxTemplate:Function) {
  const lightboxWrapper = lightboxTemplate(path, title);
  const main = document.querySelector('main');
  main?.after(lightboxWrapper);

  const buttonClose = document.querySelector("#closeModalLightbox")
  buttonClose?.addEventListener("click", () => closeLightbox());

}
