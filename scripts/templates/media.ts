import { getPhotographerName } from '../getData/getUrlData.ts';
import { InterfaceMedias } from '../utils/interface.ts';

export function mediasTemplate(data: InterfaceMedias) {
  const { title, id, likes, video } = data;
  const fullName = getPhotographerName();
  const firstName = fullName?.split(' ')[0];
  const imageOrVideo = video ? 'video' : 'image';


  function getMediaCardDOM() {
    const contentCardDom = `
              <button type="button" class="mediaPictureWrapper" aria-label="Cliquez pour agrandir ${title} de ${firstName}">
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

    const content = new MediaHtmlElementFactory(
      data,
      firstName,
      imageOrVideo
    ) as HTMLElement;

    cardDom.querySelector(".mediaPictureWrapper")?.prepend(content)

    return cardDom;
  }
  return { getMediaCardDOM };
}

class MediaHtmlElementFactory {
  constructor(
    data: InterfaceMedias,
    firstName: string | undefined,
    type: string
  ) {
    let path: string;
    let content: HTMLElement;
    const { image, video, title, id } = data;

    if (type === 'video') {
      path = `/assets/medias/${firstName}/${video}`;
      const source = document.createElement('source');
      source.src = path;
      source.type = 'video/mp4';

      content = document.createElement('video');
      content.id = `media-${id}`;
      content.setAttribute('tabindex', '0');
      content.setAttribute('alt', title ?? '');
      content.setAttribute('name', `${title}`)
      content.className = "mediaPicture"
      content.appendChild(source);

    } else {
      path = `/assets/medias/${firstName}/${image}`;
      const img = document.createElement('img');
      img.id = `media-${id}`;
      img.setAttribute('tabindex', '0');
      img.setAttribute('alt', title ?? '');
      img.setAttribute('name', `${title}`)
      img.className = "mediaPicture"
      img.src = path;
      content = img;
    }
    return  content ;
  }
}
