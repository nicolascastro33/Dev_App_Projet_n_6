class MediaHtmlElementFactory {
  constructor(path: string, title: string | undefined) {
    let element: HTMLElement;
    if (path.includes('mp4')) {
      const source = document.createElement('source');
      source.src = path;
      source.type = 'video/mp4';

      element = document.createElement('video');
      element.id = 'pictureLightbox';
      element.setAttribute('tabindex', '0');
      element.setAttribute('alt', title ?? '');
      element.setAttribute('controls', '');
      element.appendChild(source);
    } else {
      const image = document.createElement('img');
      image.id = 'pictureLightbox';
      image.setAttribute('tabindex', '0');
      image.setAttribute('alt', title ?? '');
      image.src = path;
      element = image;
    }
    return element;
  }
}

export function lightboxTemplate(path: string, title: string) {
  const lightboxContent = `
  <div class="lightbox__content" >
    <div class="elementLightbox" role="complementary">
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

  const mediaHtmlElement = new MediaHtmlElementFactory(
    path,
    title
  ) as HTMLElement;

  lightboxWrapper.querySelector('.elementLightbox')?.prepend(mediaHtmlElement);

  return lightboxWrapper;
}
