import { eraseErrorInput, eraseErrorMessage } from "../utils/error/eraseError.js";
import { insertErrorMessage, insertErrorInput } from "../utils/error/insertError.js";

export function validateUpdateForm(input) {
    if (input.type === 'text') {
      validateName(input.value, input);
    } else if (input.type === 'email') {
      validateEmail(input.value, input);
    } else if (input.type === 'message') {
      validateBirthDate(input.value, input);
    }
  }
  
  //Fonction qui va vérifier nos résultats quand on submit le form
  export function validateSubmitForm(input, allInformation) {
    if (input.type === 'text') {
      allInformation[`${input.name}`] = validateName(
        input.value,
        input
      );
    } else if (input.type === 'email') {
      allInformation.email = validateEmail(input.value, input);
    } else if (input.type === 'message') {
      allInformation.birthDate = validateMessage(input.value, input);
    }
    return allInformation;
  }
  
  
  //Toutes les fonctions qui vont vérifier chaques input selon leur type 
  // et qui va renvoyer un message positif ou négatif
  
  function validateName(name, input) {
    const regexName = new RegExp('^^[a-zA-Zéè-]{2,}$');
    if (!regexName.test(name)) {
      let message = `Le champ ${input.name} est invalide`;
      insertErrorMessage(message, input.name);
      insertErrorInput(input);
      throw new Error(message);
    } else {
      eraseErrorInput(input);
      eraseErrorMessage(input.name);
      return name;
    }
  }
  
  function validateEmail(email, input) {
    const regexEmail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
    if (!regexEmail.test(email)) {
      let message = `Le champ d'email est invalide`;
      insertErrorMessage(message, input.name);
      insertErrorInput(input);
      throw new Error(message);
    } else {
      eraseErrorInput(input);
      eraseErrorMessage(input.name);
      return email;
    }
  }

  function validateMessage(message, input){
  }
  