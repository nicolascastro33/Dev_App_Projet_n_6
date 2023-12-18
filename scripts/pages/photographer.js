import {
  getPhotographerId,
  getPhotographerName,
} from '../getData/getUrlData.js';
import {
  getPhotographerPageData,
  getPhotographerMedias,
} from '../getData/getPhotographerData.js';
import { closeModal, displayModal } from '../utils/contactForm.js';
import { initModal } from '../Modal/modal.js';
import {
  displayPhotographerInfo,
  displayPhotographerMedias,
} from '../display/dataPhotographer.js';
import { mediasTemplate } from '../templates/media.js';

initModal(closeModal, displayModal, getPhotographerName);

const data = await getPhotographerPageData(getPhotographerId);
displayPhotographerInfo(data);
// displayPhotographerMedias(getPhotographerMedias, mediasTemplate);
