import { getPhotographerName } from '../getData/getUrlData.ts';
import { InterfaceMedias } from '../utils/interface.ts';

export function mediasTemplate(data: InterfaceMedias) {
  const { title, id, likes, video } = data;
  const fullName = getPhotographerName();
  const firstName = fullName?.split(' ')[0];
  const imageOrVideo = video ? "video" : "image"
  const {content} = new videoOrImageCard(data, firstName, imageOrVideo );

  function getMediaCardDOM() {
    const contentCardDom = `
              <button type="button" class="mediaPictureWrapper" aria-label="Cliquez pour agrandir ${title} de ${firstName}">
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


class videoOrImageCard{
  constructor(data: InterfaceMedias, firstName:string | undefined, type:string){
    let path: string;
    let content: string;
    const {image, video, title, id} = data
    
    if(type === "video"){
      path = `/assets/medias/${firstName}/${video}`;
      content = `
        <video class="mediaPicture" alt="${title}" id="media-${id}" name="${title}">
          <source src="${path}" type="video/mp4">
        </video>
      
      `;
    }else{
      path = `/assets/medias/${firstName}/${image}`;
      content = `<img class="mediaPicture" alt="${title}" src="${path}" id="media-${id}" name="${title}"/>`;
    }
    return {content}
  }
}