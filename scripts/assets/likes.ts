import { getPhotographerMedias } from '../getData/getPhotographerData.ts';

export function calculateNumberOfLikes(mediaData): number {
  let numberLikes = 0;
  for (let i = 0; i < mediaData.length; i++) {
    numberLikes += mediaData[i].likes;
  }
  return numberLikes;
}

export function changeLikes() {
  const allFavoritesButtons = document.querySelectorAll('.favorite');
  for (let i = 0; i < allFavoritesButtons.length; i++) {
    allFavoritesButtons[i].addEventListener('click', async (event) => {
      const { numberOfLikes, data } = await getNewData(event);
      console.log(data)
      changeValueOneMediaLikes(numberOfLikes, allFavoritesButtons[i] )
    });
  }
}

function changeValueAllMediaLikes(newValue: number) {
  const likesValue = document.querySelector('.likesWrapper p');
  if (likesValue !== null) {
    likesValue.innerHTML = newValue.toString();
  }
}

function changeValueOneMediaLikes(numberOfLikes: number, likeButton:Element) {
  const numberOfLikesText = likeButton.closest(".numberLikes")?.firstElementChild
  const likes = String(numberOfLikes)
  if(numberOfLikesText != undefined){
    numberOfLikesText.innerHTML = likes
  }
}

async function getNewData(event) {
  let numberOfLikes;
  const id = event.target.closest('article').id;
  const [...data] = await getPhotographerMedias();
  const mediaId = data.find((element) => element.id == id);

  mediaId!.favorite = !mediaId!.favorite;
  numberOfLikes = mediaId?.likes;

  if (numberOfLikes) {
    if (mediaId!.favorite) {
      numberOfLikes++;
    } else {
      numberOfLikes--;
    }
  }
  mediaId!.likes = numberOfLikes!;
  data[data.indexOf(mediaId!)] = mediaId

  return { numberOfLikes, data };
}
