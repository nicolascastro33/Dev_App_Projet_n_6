import { InterfacePhotographer } from "../utils/interface.ts";

export function photographerTemplate(data:InterfacePhotographer) {
  const { name, portrait, price, city, tagline, country } = data;
  const path = `${window.location.origin}/photographer.html?id=${data.id}&nom=${name}`;
  const picture = `/assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const contentCardDom = `
        <article class="cardDomWrapper">
          <div class="pictureWrapper">
            <img alt=${name}" src="${picture}"/>
          </div>
          
          <h2>${name}</h2>
          <h3>${city}, ${country}</h3>
          <p class="cardDomTagline">${tagline}</p>
          <p class="cardDomPrice">${price}€/jour</p>
      </article>
    `;
    
    const cardDom = document.createElement('a');
    cardDom.href = path;
    cardDom.innerHTML = contentCardDom;
    cardDom.setAttribute("aria-label",`Cliquez pour voir le profil de ${name}, venant de ${city} en ${country}`)
    return cardDom;
  }
  return { name, picture, getUserCardDOM };
}
