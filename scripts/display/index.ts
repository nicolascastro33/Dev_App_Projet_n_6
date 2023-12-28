import { InterfacePhotographer } from "../utils/interface.ts";

export async function displayData(photographers:Array<InterfacePhotographer>, photographerTemplate:Function) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers?.map((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection?.appendChild(userCardDOM);
  });
}
