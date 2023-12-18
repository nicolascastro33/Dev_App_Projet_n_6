import { photographerTemplate } from '../templates/photographer.js';
import { getPhotographers } from '../getData/getPhotographerData.js'
import { displayData } from '../display/dataIndex.js';

async function init() {
  const photographersData = await getPhotographers();
  displayData(photographersData, photographerTemplate);
}

init();
