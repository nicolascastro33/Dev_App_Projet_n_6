"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertErrorMessage = exports.insertErrorInput = void 0;
// Permet de modifier le css d'erreur pour mettre l'input en rouge
function insertErrorInput(input) {
    input.classList.remove('goodInput');
    input.classList.add('errorInput');
}
exports.insertErrorInput = insertErrorInput;
// Permet d'introduire un message d'erreur en identifiant
// si un message est déja présent pour ne pas le reproduire
function insertErrorMessage(message, id) {
    var spanErreurMessage = document.getElementById("errorMessage".concat(id));
    if (!spanErreurMessage) {
        spanErreurMessage = document.createElement('span');
        spanErreurMessage.id = "errorMessage".concat(id);
        spanErreurMessage.className = 'errorMessage';
        var inputError = document.querySelector("[name=\"".concat(id, "\"]"));
        inputError === null || inputError === void 0 ? void 0 : inputError.after(spanErreurMessage);
    }
    spanErreurMessage.innerText = message;
}
exports.insertErrorMessage = insertErrorMessage;
