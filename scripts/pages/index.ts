import { photographerTemplate } from '../templates/photographer.ts';
import { getPhotographers } from '../getData/getPhotographerData.ts'
import { displayData } from '../display/index.ts';

async function init() {
  const photographersData = await getPhotographers();
  displayData(photographersData, photographerTemplate);
}

init();
