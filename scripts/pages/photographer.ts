import {
  getPhotographerId,
  getPhotographerName,
} from '../getData/getUrlData.ts';
import {
  getPhotographerPageData,
  getPhotographerMedias,
} from '../getData/getPhotographerData.ts';
import { closeModal, displayModal } from '../utils/contactForm.ts';
import { initModal } from '../modal/init.ts';
import {
  displayPhotographerInfo,
  displayPhotographerMedias,
} from '../display/dataPhotographer.ts';
import { mediasTemplate } from '../templates/media.ts';
import { submitForm, updateForm } from '../modal/form.ts';
import { validateSubmitForm, validateUpdateForm } from '../modal/validate.ts';
import { likesAndPriceWrapper } from '../templates/likes.ts';
import { calculateNumberOfLikes } from '../assets/likes.ts';
import { displayDataSortBy } from '../assets/sortBy.ts';
import { eraseDisplayMedia } from '../utils/erase/eraseDisplay.ts';
import { lightbox} from '../utils/lightbox.ts';
import { changeLikes } from '../assets/likes.ts';

//fonctions pour obtenir et afficher les infos du photographe
const data = await getPhotographerPageData(getPhotographerId);
displayPhotographerInfo(data);

//fonctions pour obtenir et afficher les différentes du photographes
const mediaData = await getPhotographerMedias();
displayPhotographerMedias(mediaData, mediasTemplate);
//fonctions pour la partie lightbox
lightbox();

//fonctions sur la modal de contact
initModal(closeModal, displayModal, getPhotographerName);
submitForm(validateSubmitForm);
updateForm(validateUpdateForm);

//fonctions sur le sortBy
displayDataSortBy(
  mediaData,
  displayPhotographerMedias,
  mediasTemplate,
  eraseDisplayMedia,
  lightbox
);

//Likes
//fonctions sur l'affichage et le calcul du nombre de likes
const numberLikes = calculateNumberOfLikes(mediaData);
likesAndPriceWrapper(numberLikes, 300);
//Modifications des likes
changeLikes()
