"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eraseSuccessMessage = exports.showSuccessMessage = void 0;
function showSuccessMessage() {
    var messageSucceed = document.querySelector("#messageSucceed");
    if (!messageSucceed) {
        var button = document.querySelector("input[name='submit']");
        messageSucceed = document.createElement("span");
        messageSucceed.id = "messageSucceed";
        messageSucceed.textContent = "Votre message a bien été envoyé";
        button === null || button === void 0 ? void 0 : button.after(messageSucceed);
    }
    return messageSucceed;
}
exports.showSuccessMessage = showSuccessMessage;
function eraseSuccessMessage(id) {
    id.remove();
}
exports.eraseSuccessMessage = eraseSuccessMessage;
