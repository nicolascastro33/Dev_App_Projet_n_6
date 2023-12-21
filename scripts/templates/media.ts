import { getPhotographerName } from '../getData/getUrlData.ts';
import { displayLightbox } from '../utils/lightbox.ts';
import { lightboxTemplate } from './lightbox.ts';
import { InterfaceMedias } from '../utils/interface.ts';

export function mediasTemplate(data:InterfaceMedias) {
  const { title, id, likes, image } = data;
  const fullName = getPhotographerName();
  const firstName = fullName?.split(' ')[0];
  const path = `/assets/medias/${firstName}/${image}`;

  function getMediaCardDOM() {
    const contentCardDom = `
              <div class="mediaPictureWrapper">
                <img class="mediaPicture" alt=${title}" src="${path}"/>
              </div>
              
              <div class="mediaPictureText">
                <h2>${title}</h2>
                <div class="numberLikes">
                    <p>${likes}</p>
                    <img class="favorite" alt="likes" src="/assets/icons/favorite.png"/>
                </div>
              </div>   
        `;

    const cardDom = document.createElement('article');
    cardDom.className = 'mediaCardWrapper';
    cardDom.id = id;
    cardDom.innerHTML = contentCardDom;
    cardDom.addEventListener('click', () => {
      displayLightbox(path, title, lightboxTemplate)});
    return cardDom;
  }
  return { getMediaCardDOM };
}
