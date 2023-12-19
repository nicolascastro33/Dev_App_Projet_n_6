export function lightboxTemplate(path, title){
    const lightboxContent = `
  <div class="lightbox__content">
    <div class="elementLightbox">
      <img id="pictureLightbox" src="${path}" alt="${title}" />
      <h2>${title}</h2>
    </div>
    <img class="iconsLightbox" src="assets/icons/close.svg" id="closeModalLightbox"/>
    <img class="iconsLightbox" src="assets/icons/arrowLeft.png" id="arrowLeft" />
    <img class="iconsLightbox" src="assets/icons/arrowRight.png" id="arrowRight"/>
  </div>
    `;
  const lightboxWrapper = document.createElement('article');
  lightboxWrapper.innerHTML = lightboxContent;
  lightboxWrapper.className = 'lightbox';
  return lightboxWrapper
}