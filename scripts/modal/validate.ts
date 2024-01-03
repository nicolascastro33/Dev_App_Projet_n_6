import {
  eraseErrorInput,
  eraseErrorMessage,
} from '../utils/error/eraseError.ts';
import {
  insertErrorMessage,
  insertErrorInput,
} from '../utils/error/insertError.ts';
import { InterfaceForm } from '../utils/interface.ts';

export function validateUpdateForm(input: HTMLInputElement) {
  if (input.name === 'Nom' || input.name === "Prénom") {
    validateName(input.value, input);
  } else if (input.name === 'email') {
    validateEmail(input.value, input);
  } else if (input.name === 'message') {
    validateMessage(input.value, input);
  }
}

export function validateSubmitForm(
  input: HTMLInputElement,
  allInformation: InterfaceForm
) {
  if (input.name === 'Nom') {
    allInformation.lastName = validateName(input.value, input);
  } else if (input.name === "Prénom") {
    allInformation.firstName = validateName(input.value, input);
  } else if (input.name === 'email') {
    allInformation.email = validateEmail(input.value, input);
  } else if (input.name === 'message') {
    allInformation.message = validateMessage(input.value, input);
  }
  return allInformation;
}

//Toutes les fonctions qui vont vérifier chaques input selon leur type
// et qui va renvoyer un message positif ou négatif

function validateName(name: string, input: HTMLInputElement) {
  const regexName = new RegExp('^^[a-zA-Zéè-]{2,}$');
  if (!regexName.test(name)) {
    const message = `Le champ ${input.name} est invalide`;
    insertErrorMessage(message, input.name);
    insertErrorInput(input, input.name);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return name;
  }
}

function validateEmail(email: string, input: HTMLInputElement) {
  const regexEmail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
  if (!regexEmail.test(email)) {
    const message = `Le champ d'email est invalide`;
    insertErrorMessage(message, input.name);
    insertErrorInput(input, input.name);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return email;
  }
}

function validateMessage(message, input) {
  if (!message || message.length < 15) {
    const errorMessage = `Votre message est trop court`;
    insertErrorMessage(errorMessage, input.name);
    insertErrorInput(input, input.name);
    throw new Error(errorMessage);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return message;
  }
}
