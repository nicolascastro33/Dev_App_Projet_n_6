export async function displayData(photographers, photographerTemplate) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers?.map((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
