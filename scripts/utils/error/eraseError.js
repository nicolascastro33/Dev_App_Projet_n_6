"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eraseErrorMessage = exports.eraseErrorInput = void 0;
function eraseErrorInput(input) {
    input.classList.remove('errorInput');
    input.classList.add('goodInput');
}
exports.eraseErrorInput = eraseErrorInput;
// Permet de supprimer le message d'erreur 
function eraseErrorMessage(id) {
    var spanErreurMessage = document.getElementById("errorMessage".concat(id));
    spanErreurMessage === null || spanErreurMessage === void 0 ? void 0 : spanErreurMessage.remove(); // comme if (null) return; si null il ne fera pas le chainage
}
exports.eraseErrorMessage = eraseErrorMessage;
