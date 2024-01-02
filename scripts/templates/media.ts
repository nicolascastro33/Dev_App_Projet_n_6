import { getPhotographerName } from '../getData/getUrlData.ts';
import { InterfaceMedias } from '../utils/interface.ts';

function isVideoOrImage(
  firstName: string | undefined,
  image: string,
  video: string,
  title: string,
  id: string
) {
  let path: string;
  let content: string;
  if (video) {
    path = `/assets/medias/${firstName}/${video}`;
    content = `
      <video class="mediaPicture" alt="${title}" id="media-${id}" name="${title}">
        <source src="${path}" type="video/mp4">
      </video>
    
    `;
    return { path, content };
  } else {
    path = `/assets/medias/${firstName}/${image}`;
    content = `<img class="mediaPicture" alt="${title}" src="${path}" id="media-${id}" name="${title}"/>`;
    return { path, content };
  }
}

export function mediasTemplate(data: InterfaceMedias) {
  const { title, id, likes, image, video } = data;
  const fullName = getPhotographerName();
  const firstName = fullName?.split(' ')[0];
  const { content } = isVideoOrImage(firstName, image, video, title, id);

  function getMediaCardDOM() {
    const contentCardDom = `
              <button class="mediaPictureWrapper" aria-hidden="" aria-label="Cliquez pour agrandir ${title} de ${firstName}">
                ${content}
              </button>
              
              <div class="mediaPictureText">
                <h2 tabindex="0" id="text-${id}">${title}</h2>
                <div class="numberLikes">
                    <p tabindex="0">${likes}</p>
                    <button type="button" role="button" aria-label="Appuyer pour aimer la photo" class="noLike" alt="noLike">
                    <img alt="likes" src="/assets/icons/favorite.png"/>
                    </button>
                </div>
              </div>   
        `;

    const cardDom = document.createElement('article');
    cardDom.className = 'mediaCardWrapper';
    cardDom.id = id;
    cardDom.innerHTML = contentCardDom;
    return cardDom;
  }
  return { getMediaCardDOM };
}
