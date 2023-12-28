// Permet de modifier le css d'erreur pour mettre l'input en rouge
export function insertErrorInput(input:HTMLInputElement, id:string) {
  input.classList.remove('goodInput');
  input.classList.add('errorInput');

  input.setAttribute("aria-invalid", "true")
  input.setAttribute("aria-erromessage", `errorMessage${id}`)
}

// Permet d'introduire un message d'erreur en identifiant
// si un message est déja présent pour ne pas le reproduire
export function insertErrorMessage(message:string, id:string) {
  let spanErreurMessage = document.getElementById(`errorMessage${id}`);
  if (!spanErreurMessage) {
    spanErreurMessage = document.createElement('span');
    spanErreurMessage.id = `errorMessage${id}`;
    spanErreurMessage.className = 'errorMessage';

    const inputError = document.querySelector(`[name="${id}"]`);
    inputError?.after(spanErreurMessage);
  }
  spanErreurMessage.innerText = message;
}
