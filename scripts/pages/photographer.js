import {
  getPhotographerId,
  getPhotographerName,
} from '../getData/getUrlData.js';
import {
  getPhotographerPageData,
  getPhotographerMedias,
} from '../getData/getPhotographerData.js';
import { closeModal, displayModal } from '../utils/contactForm.js';
import { initModal } from '../modal/init.js';
import {
  displayPhotographerInfo,
  displayPhotographerMedias,
} from '../display/dataPhotographer.js';
import { mediasTemplate } from '../templates/media.js';
import { submitForm, updateForm } from '../modal/form.js';
import { validateSubmitForm, validateUpdateForm } from '../modal/validate.js';
import { likesAndPriceWrapper } from '../assets/likes.js';


//fonctions pour obtenir et afficher les infos et les photos du photographe
const data = await getPhotographerPageData(getPhotographerId);
displayPhotographerInfo(data);
displayPhotographerMedias(getPhotographerMedias, mediasTemplate);

//fonctions sur la modal de contact 
initModal(closeModal, displayModal, getPhotographerName);
submitForm(validateSubmitForm);
updateForm(validateUpdateForm);

//fonctions sur l'affichage et le calcul du nombre de likes
likesAndPriceWrapper(200, 300)


