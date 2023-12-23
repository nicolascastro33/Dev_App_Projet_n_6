import { getPhotographerId } from './getUrlData.ts';
import { InterfacePhotographer, InterfaceMedias } from '../utils/interface.ts';


interface AllData {
  photographers : Array<InterfacePhotographer>|undefined,
  media: Array<InterfaceMedias>|undefined
}
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

export async function getMediasData():Promise<InterfaceMedias[]> {
  let mediaDatas = window.localStorage.getItem('mediasData');
  if (!mediaDatas || mediaDatas === null) {
    mediaDatas = await fetch('../data/photographers.json')
    .then((data) => data.json())
    .catch(() => {
      console.log('Erreur lors de la récupération des médias');
    });
    const media:Array<InterfaceMedias> = mediaDatas?.media
    media.forEach(element => {
      element.favorite = false
    });
    console.log(media)
    const mediaDatasLocal = JSON.stringify(media)
    window.localStorage.setItem("mediasData", mediaDatasLocal)
  }else{
    mediaDatas=JSON.parse(mediaDatas);
  }
  return mediaDatas;
}

export async function getPhotographerMedias():Promise<InterfaceMedias[]> {
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

export async function setLikesMedia(data){

}
