import { InterfacePhotographer } from "../utils/interface.ts";

export async function displayPhotographerInfo(data:InterfacePhotographer) {
  const { name, portrait, city, tagline, country } = data;
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
  infoPhotographer.innerHTML = textCardDom;
  imgCardDomWrapper.innerHTML = imgCardDom;

  const buttonContact = document.querySelector('.contact_button');
  buttonContact?.before(infoPhotographer);
  buttonContact?.after(imgCardDomWrapper);
}

export async function displayPhotographerMedias(getMedias, templates:Function) {;
  const sortBy = document.querySelector('.sort-by');
  const mediasSection = document.createElement('section');
  sortBy?.after(mediasSection);
  getMedias?.map((media:object) => {
    const photographerModel = templates(media);
    const userCardDOM = photographerModel.getMediaCardDOM();
    mediasSection.appendChild(userCardDOM);
  });
}
