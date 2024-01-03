export function initModal(closeModal, displayModal ,name) {
  //Insertion du nom du photographe dans la modal
    const fullName = name()
    const textModalHeader = document.querySelector(".modal_header_text h2")
    const namePhotographer = document.createElement("h3")
    namePhotographer.textContent = `${fullName}`
    textModalHeader?.after(namePhotographer)

    //Fonction de fermeture et ouverture modal
    const openButton = document.querySelector('#openModal');
    const closeButton = document.querySelector('#closeModal');

    openButton?.addEventListener('click', () => displayModal());
    closeButton?.addEventListener('click', () => closeModal());
  }

export function modalForm(){
}