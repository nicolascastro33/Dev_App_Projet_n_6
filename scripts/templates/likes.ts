export function likesAndPriceWrapper(likes:number, price:number){
    const contentDom = `
    <div class="likesWrapper" aria-label="Nombre de like totale du photographe">
        <p>${likes}</p>
        <img role="img" class="favorite" alt="likes" src="/assets/icons/favoriteBlack.png"/>
    </div>
    <p aria-label="Prix du photographe par jour">${price}€ / jour</p>
    `
    const contentCardDom = document.createElement("aside")
    contentCardDom.setAttribute("tabindex", "0")
    contentCardDom.innerHTML = contentDom
    const main = document.querySelector("main")
    main?.appendChild(contentCardDom)
}