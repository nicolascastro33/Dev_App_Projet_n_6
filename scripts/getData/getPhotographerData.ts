import { getPhotographerId } from './getUrlData.ts';
import { InterfacePhotographer } from '../utils/interface.ts';

export async function getPhotographers():Promise<InterfacePhotographer[]>{
    const response = await fetch('../data/photographers.json').then(
      (photographers) =>
        photographers.json().catch(() => {
          console.log('Erreur lors de la récupération des médias');
        })
    );
    const photographers = response.photographers;
    window.localStorage.setItem(
      'photographersData',
      JSON.stringify(photographers)
    );
  //On retourne à la fin nos données, que cela viennent du local storage ou directement de l'api
  return photographers;
}

export async function getPhotographerPageData(getPhotographerId:Function) {
  const id = await getPhotographerId();
  const allPhotographers = await getPhotographers();
  const photographerData = allPhotographers?.find(
    (photographer) => photographer.id === id
  );
  return photographerData!;
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
