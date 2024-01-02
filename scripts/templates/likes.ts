export function likesAndPriceWrapper(likes: number, price: number) {
  const contentDom = `
    <div class="likesWrapper">
        <p tabindex="0" role="contentinfo" aria-label="${likes} likes sur les photos">${likes}</p>
        <img role="img" class="favorite" alt="likes" src="/assets/icons/favoriteBlack.png"/>
    </div>
    <p tabindex="0" role="contentinfo" aria-label="le prix du photographe par jour est de ${price}€">${price}€ / jour</p>
    `;
  const contentCardDom = document.createElement('aside');
  contentCardDom.innerHTML = contentDom;


  const main = document.querySelector('main');
  main?.appendChild(contentCardDom);
}
