export function showSuccessMessage(){
    let messageSucceed = document.querySelector("#messageSucceed")
    if(!messageSucceed){
      const button = document.querySelector("input[name='submit']")
      messageSucceed = document.createElement("span")
      messageSucceed.id = "messageSucceed"
      messageSucceed.innerText = "Votre message a bien été envoyé"
      button.after(messageSucceed) 
    }
    return messageSucceed
  }

export function eraseSuccessMessage(id){
  id.remove()
}