export function initModal(closeModal:Function, displayModal:Function,name:Function) {
    const fullName = name()
    const modalHeader = document.querySelector(".modal_header")
    const namePhotographer = document.createElement("h3")
    namePhotographer.textContent = `${fullName}`

    modalHeader?.after(namePhotographer)

    const openButton = document.querySelector('#openModal');
    const closeButton = document.querySelector('#closeModal');

    openButton?.addEventListener('click', () => {displayModal});
    closeButton?.addEventListener('click', () => {closeModal});
  }

export function modalForm(){
}