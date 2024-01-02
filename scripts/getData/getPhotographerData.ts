import { getPhotographerId } from './getUrlData.ts';
import { InterfacePhotographer, InterfaceMedias } from '../utils/interface.ts';

export async function getPhotographers():Promise<InterfacePhotographer[]>{
    const response = await fetch('../data/photographers.json').then(
      (photographers) =>
        photographers.json().catch(() => {
          console.log('Erreur lors de la récupération des médias');
        })
    );
    const photographers = response.photographers;
  //On retourne à la fin nos données, que cela viennent du local storage ou directement de l'api
  return photographers;
}

export async function getPhotographerPageData(getPhotographerId) {
  const id = await getPhotographerId();
  const allPhotographers = await getPhotographers();
  const photographerData = allPhotographers?.find(
    (photographer) => photographer.id === id
  );
  return photographerData!;
}

export async function getMediasData():Promise<InterfaceMedias[]> {
    const response = await fetch('../data/photographers.json')
    .then((data) => data.json())
    .catch(() => {
      console.log('Erreur lors de la récupération des médias');
    });
  const mediaDatas = response.media
  return mediaDatas;
}

export async function getPhotographerMedias():Promise<InterfaceMedias[]>{
  const medias = await getMediasData();
  const id = await getPhotographerId();
  const photographerMedias:Array<InterfaceMedias> = [];
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId === id) {
      photographerMedias.push(medias[i]);
    }
  }
  return photographerMedias;
}

