export async function displayPhotographerInfo(data) {
  const { name, portrait, city, tagline, country } = data;
  const picture = `/assets/photographers/${portrait}`;

  const imagePhotographer = document.createElement('img');
  imagePhotographer.src = picture;
  imagePhotographer.alt = name;

  const cardDom = `
      <h1>${name}</h1>
      <h2>${city}, ${country}</h2>
      <p class="cardDomTagline">${tagline}</p>
`;
  const infoPhotographer = document.createElement('div')
  infoPhotographer.className = "infoWrapper"
  infoPhotographer.innerHTML = cardDom;

  const buttonContact = document.querySelector('.contact_button');  
  buttonContact.before(infoPhotographer)
  buttonContact.after(imagePhotographer)
}

export async function displayPhotographerMedias(getMedias, templates) {
  const medias = await getMedias();
  const photographHeader = document.querySelector('.photograph-header');
  const mediasSection = document.createElement("section")
  photographHeader.after(mediasSection)
  medias?.map((media) => {
    const photographerModel = templates(media);
    const userCardDOM = photographerModel.getMediaCardDOM();
    mediasSection.appendChild(userCardDOM);
  })
}
