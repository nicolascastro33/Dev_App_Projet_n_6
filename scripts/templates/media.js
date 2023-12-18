import { getPhotographerName } from '../getData/getUrlData.js';
// import { displayLightbox } from '../utils/lightbox.js';

export function mediasTemplate(data) {
  const { title, id, likes, image } = data;
  const fullName = getPhotographerName();
  const firstName = fullName.split(' ')[0];
  const picture = `/assets/medias/${firstName}`;

  function getMediaCardDOM() {
    const contentCardDom = `
              <img alt=${title}" src="${picture}/${image}"/>
              <div class="">
                <h2>${title}</h2>
                <div class="numberLikes">
                    <p>${likes}</p>
                    <img alt="likes" src="/assets/icons/favorite.png"/>
                </div>
              </div>   
        `;

    const cardDom = document.createElement('article');
    cardDom.className = 'mediaCardWrapper';
    cardDom.id = id;
    cardDom.innerHTML = contentCardDom;
    // cardDom.addEventListener('click', displayLightbox(picture, image));
    return cardDom;
  }
  return { getMediaCardDOM };
}
