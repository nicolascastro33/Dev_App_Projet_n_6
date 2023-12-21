import { eraseErrorMessage } from '../utils/error/eraseError.ts';
import { showSuccessMessage, eraseSuccessMessage } from '../utils/success/messageForm.ts';

export const allInputForm = document.querySelectorAll('form input');
const form = document.querySelector('form');


export function clearForm() {
  // On efface toutes les données des inputs, leurs class css, ainsi que leurs message d'erreur
  for (let i = 0; i < allInputForm.length; i++) {
    let input:HTMLInputElement = allInputForm[i];
    if(input.type !== "submit"){
      input.value = '';
    }
    input.classList.remove('goodInput', 'errorInput');
    const message = showSuccessMessage()
    if(message){
      eraseSuccessMessage(message)
    }
    eraseErrorMessage(input.name);
  }
}

export function updateForm(validateUpdateForm:Function) {
  try {
    for (let i = 0; i < allInputForm.length; i++) {
      let input = allInputForm[i];
      input.addEventListener('change', (event) => {
        event.preventDefault();
        validateUpdateForm(input);
      });
    }
  } catch (error:any) {
    console.log('Une erreur est survenue: ' + error.message);
  }
}

export function submitForm(validateSubmitForm:Function) {
  try {
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      let allInformation = {};
      for (let i = 0; i < allInputForm.length; i++) {
        let input = allInputForm[i];
        validateSubmitForm(input, allInformation);
      }
      console.log(allInformation);
      clearForm();
      showSuccessMessage();      
    });
  } catch (error:any) {
    console.log('Une erreur est survenue: ' + error.message);
  }
}
