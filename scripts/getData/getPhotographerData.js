import { getPhotographerId } from './getUrlData.js';

export async function getPhotographers() {
  //Vérification du localStorage pour récupérer les données des photographes
  let photographers = await window.localStorage.getItem('photographersData');
  if (!photographers) {
    //Si il n'y a rien on récupèrent nos données via l'api et on les stockes dans le local storage
    const response = await fetch('../data/photographers.json').then(
      (photographers) =>
        photographers.json().catch(() => {
          console.log('Erreur lors de la récupération des médias');
        })
    );
    photographers = response.photographers;
    window.localStorage.setItem(
      'photographersData',
      JSON.stringify(photographers)
    );
  } else {
    photographers = JSON.parse(photographers);
  }
  //On retourne à la fin nos données, que cela viennent du local storage ou directement de l'api
  return photographers;
}

export async function getPhotographerPageData(getPhotographerId) {
  const id = await getPhotographerId();
  const allPhotographers = await getPhotographers();
  const photographerData = allPhotographers.find(
    (photographer) => photographer.id === id
  );
  return photographerData;
}

export async function getMediasData() {
  const response = await fetch('../data/photographers.json')
    .then((data) => data.json())
    .catch(() => {
      console.log('Erreur lors de la récupération des médias');
    });
  return response.media;
}

export async function getPhotographerMedias() {
  const medias = await getMediasData();
  const id = await getPhotographerId();
  let photographerMedias = [];
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId === id) {
      photographerMedias.push(medias[i]);
    }
  }
  return photographerMedias;
}
