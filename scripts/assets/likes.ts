export function calculateNumberOfLikes(mediaData): number {
  let numberLikes = 0;
  for (let i = 0; i < mediaData.length; i++) {
    numberLikes += mediaData[i].likes;
  }
  return numberLikes;
}

export function changeLikes() {
  const allFavoritesButtons = document.querySelectorAll('.noLike');
  for (let i = 0; i < allFavoritesButtons.length; i++) {
    allFavoritesButtons[i].addEventListener('click', async () => {
      const likeItOrNot = await getNewData(allFavoritesButtons[i]);
      changeValueOneMediaLikes(allFavoritesButtons[i], likeItOrNot )
      changeValueAllMediaLikes(likeItOrNot)
    });
  }
}

function changeValueAllMediaLikes(likeItOrNot: boolean) {
  const likesValue = document.querySelector('.likesWrapper p');
  if (likesValue !== null) {
    let value:number = Number(likesValue.innerHTML)
    let newValue
    if(likeItOrNot){
      newValue = value+1
    }else{
      newValue = value-1
    }
    likesValue.innerHTML = newValue.toString();
  }
}

function changeValueOneMediaLikes(likeButton:Element, likeItOrNot:boolean) {
  const numberOfLikesText = likeButton.closest(".numberLikes")?.firstElementChild
  let value:number = Number(numberOfLikesText?.innerHTML)
  
  const nameButton = likeItOrNot? "like" : "noLike"
  const newValue = likeItOrNot ? value+1 : value-1
  if(numberOfLikesText != undefined){
    likeButton.setAttribute("alt", nameButton)
    numberOfLikesText.innerHTML = newValue.toString()
  }
}

async function getNewData(button) {
  let likeItOrNot = button.getAttribute("alt")
  if(likeItOrNot === "noLike"){
    button.setAttribute("alt", "like")
    likeItOrNot = true
  }else{
    button.setAttribute("alt", "noLike")
    likeItOrNot = false
  }
  return likeItOrNot;
}
