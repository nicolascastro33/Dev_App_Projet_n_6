function videoOrImageContent(path: string, title: string): string {
  const isVideo = path.includes('mp4');
  let videoOrImageContent: string;

  if (isVideo) {
    videoOrImageContent = `
      <video role="video" id="pictureLightbox" alt=${title}" controls>
        <source src="${path}" type="video/mp4">
      </video>`;
    return videoOrImageContent;
  } else {
    videoOrImageContent = `<img role="img" id="pictureLightbox"  src="${path}" alt="${title}" />`;
    return videoOrImageContent;
  }
}

export function lightboxTemplate(path: string, title: string) {
  const content = videoOrImageContent(path, title);

  const lightboxContent = `
  <div class="lightbox__content">
    <div class="elementLightbox">
      ${content}
      <h2>${title}</h2>
    </div>
    <img role="button" class="iconsLightbox" src="assets/icons/closeRed.png" alt="croix pour fermer la lightbox" id="closeModalLightbox"/>
    <img role="button" class="iconsLightbox" src="assets/icons/arrowLeft.png" alt="Passer à la photo précèdente" id="arrowLeft" />
    <img role="button" class="iconsLightbox" src="assets/icons/arrowRight.png" alt="Passer à la photo suivante" id="arrowRight"/>
  </div>
    `;
  const lightboxWrapper = document.createElement('article');
  lightboxWrapper.innerHTML = lightboxContent;
  lightboxWrapper.className = 'lightbox';
  return lightboxWrapper;
}
