import { getPhotographerName } from '../getData/getUrlData.ts';
import { displayLightbox } from '../utils/lightbox.ts';
import { lightboxTemplate } from './lightbox.ts';
import { InterfaceMedias } from '../utils/interface.ts';


function isVideoOrImage(firstName:string | undefined, image:string, video:string, title:string){
  let path:string 
  let content: string
  if(video){
    path = `/assets/medias/${firstName}/${video}`
    content = `
      <video class="mediaPicture" alt=${title}">
        <source src="${path}" type="video/mp4">
      </video>
    
    `
    return {path, content}
    
  }else{
    path = `/assets/medias/${firstName}/${image}`
    content = `<img class="mediaPicture" alt=${title}" src="${path}"/>`
    return {path, content}
  }
}

export function mediasTemplate(data:InterfaceMedias) {
  const { title, id, likes, image, video } = data;
  const fullName = getPhotographerName();
  const firstName = fullName?.split(' ')[0];
  const {path, content} = isVideoOrImage(firstName, image, video, title);

  function getMediaCardDOM() {
    const contentCardDom = `
              <div class="mediaPictureWrapper">
                ${content}
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
