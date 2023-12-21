export function eraseErrorInput(input:HTMLInputElement) {
    input.classList.remove('errorInput');
    input.classList.add('goodInput');
  }
  
  // Permet de supprimer le message d'erreur 
  export function eraseErrorMessage(id:string) {
    const spanErreurMessage = document.getElementById(`errorMessage${id}`);
    spanErreurMessage?.remove(); // comme if (null) return; si null il ne fera pas le chainage
  }