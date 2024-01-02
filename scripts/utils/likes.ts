import { InterfaceMedias } from "./interface.ts";

export function calculateNumberOfLikes(mediaData:Array<InterfaceMedias>): number {
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
      changeOneMediaLikes(allFavoritesButtons[i], likeItOrNot);
      changeValueAllMediaLikes(likeItOrNot);
    });
  }
}
// On change la value de l'aside contenant tout les likes 
function changeValueAllMediaLikes(likeItOrNot: boolean) {
  const likesValue = document.querySelector('.likesWrapper p');
  if (likesValue !== null) {
    const value: number = Number(likesValue.innerHTML);
    let newValue;
    if (likeItOrNot) {
      newValue = value + 1;
    } else {
      newValue = value - 1;
    }
    likesValue.innerHTML = newValue.toString();
  }
}

//On change juste les values du media concerné par le changement ainsi que les attributs 
function changeOneMediaLikes(likeButton: Element, likeItOrNot: boolean) {
  const numberOfLikesText =
    likeButton.closest('.numberLikes')?.firstElementChild;
  const value: number = Number(numberOfLikesText?.innerHTML);

  const nameButton = likeItOrNot ? 'like' : 'noLike';
  const oldNameButton = nameButton === 'like' ? 'noLike' : 'like';
  const newAriaAttribute = likeItOrNot
    ? 'Appuyer pour ne plus aimer la photo'
    : 'Appuyer pour aimer la photo';
  const newValue = likeItOrNot ? value + 1 : value - 1;
  if (numberOfLikesText != undefined) {
    likeButton.classList.replace(oldNameButton, nameButton);
    likeButton.setAttribute('alt', nameButton);
    likeButton.setAttribute('aria-label', newAriaAttribute);

    numberOfLikesText.innerHTML = newValue.toString();
  }
}

// On cherche à savoir si la personne aime ou n'aime pas 
async function getNewData(button):Promise<boolean> {
  let likeItOrNot = button.getAttribute('alt');
  if (likeItOrNot === 'noLike') {
    button.setAttribute('alt', 'like');
    likeItOrNot = true;
  } else {
    button.setAttribute('alt', 'noLike');
    likeItOrNot = false;
  }
  return likeItOrNot;
}
