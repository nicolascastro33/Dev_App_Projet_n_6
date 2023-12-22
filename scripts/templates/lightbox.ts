function videoOrImageContent(path:string, title:string): string {
  const isVideoOrImage = path.includes('mp4') ? true : false;
  let videoOrImageContent:string;

  if (isVideoOrImage) {
    videoOrImageContent = `
      <video id="pictureLightbox" alt=${title}" controls autoplay>
        <source src="${path}" type="video/mp4">
      </video>`;
    return videoOrImageContent;
  } else {
    videoOrImageContent = `<img id="pictureLightbox" src="${path}" alt="${title}" />`;
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
    <img class="iconsLightbox" src="assets/icons/closeRed.png" id="closeModalLightbox"/>
    <img class="iconsLightbox" src="assets/icons/arrowLeft.png" id="arrowLeft" />
    <img class="iconsLightbox" src="assets/icons/arrowRight.png" id="arrowRight"/>
  </div>
    `;
  const lightboxWrapper = document.createElement('article');
  lightboxWrapper.innerHTML = lightboxContent;
  lightboxWrapper.className = 'lightbox';
  return lightboxWrapper;
}
