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
import { likesAndPriceWrapper } from '../assets/likes.ts';


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


