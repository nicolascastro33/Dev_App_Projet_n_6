import { InterfaceMedias, InterfacePhotographer } from "../utils/interface.ts";

export async function displayPhotographerInfo(data:InterfacePhotographer) {
  const { name, portrait, city, tagline, country, price } = data;
  const picture = `/assets/photographers/${portrait}`;

  const imgCardDom = `
    <img src="${picture}" alt="${name}"/>
  `;
  const textCardDom = `
      <h1>${name}</h1>
      <h2>${city}, ${country}</h2>
      <p class="cardDomTagline">${tagline}</p>
`;
  const infoPhotographer = document.createElement('div');
  const imgCardDomWrapper = document.createElement('div');
  infoPhotographer.className = 'infoWrapper';
  imgCardDomWrapper.className = 'imgWrapper';
  infoPhotographer.setAttribute("tabindex", "0")
  infoPhotographer.innerHTML = textCardDom;
  imgCardDomWrapper.innerHTML = imgCardDom;

  const buttonContact = document.querySelector('.contact_button');
  buttonContact?.before(infoPhotographer);
  buttonContact?.after(imgCardDomWrapper);
  return price
}

export async function displayPhotographerMedias(getMedias:Array<InterfaceMedias>, templates:Function) {;
  const sortBy = document.querySelector('.all-select-menu');
  const mediasSection = document.createElement('section');
  sortBy?.after(mediasSection);
  getMedias?.map((media:object) => {
    const photographerModel = templates(media);
    const userCardDOM = photographerModel.getMediaCardDOM();
    mediasSection.appendChild(userCardDOM);
  });
}
