class videoOrImageCard {
  constructor(path: string, title: string | undefined) {
    let videoOrImageContent: string;
    if (path.includes('mp4')) {
      videoOrImageContent = `
      <video id="pictureLightbox" tabindex="0" alt=${title}" controls>
        <source src="${path}" type="video/mp4">
      </video>`;
    } else {
      videoOrImageContent = `<img id="pictureLightbox" tabindex="0" src="${path}" alt="${title}" />`;

    }
    return {videoOrImageContent};
  }
}

export function lightboxTemplate(path: string, title: string) {
  const {videoOrImageContent}:string = new videoOrImageCard(path, title);

  const lightboxContent = `
  <div class="lightbox__content" >
    <div class="elementLightbox" role="complementary">
      ${videoOrImageContent}
      <h2>${title}</h2>
    </div>
    <button type="button" role="button" class="iconsLightbox" id="closeModalLightbox" aria-label="Fermer la lightbox">    
      <img src="assets/icons/closeRed.png" alt="croix pour fermer la lightbox" />
    </button>
    <button type="button" role="button" class="iconsLightbox" id="arrowLeft" aria-label="Passer à la photo précèdente">  
      <img src="assets/icons/arrowLeft.png" alt="Passer à la photo précèdente" />
    </button>
    <button type="button" role="button" class="iconsLightbox" id="arrowRight" aria-label="Passer à la photo suivante">  
      <img src="assets/icons/arrowRight.png" alt="Passer à la photo suivante"/>
    </button>  
  </div>
    `;
  const lightboxWrapper = document.createElement('article');
  lightboxWrapper.innerHTML = lightboxContent;
  lightboxWrapper.className = 'lightbox';
  return lightboxWrapper;
}
