export function likesAndPriceWrapper(likes:number, price:number){
    const contentDom = `
    <div class="likesWrapper">
        <p>${likes}</p>
        <img class="favorite" alt="likes" src="/assets/icons/favoriteBlack.png"/>
    </div>
    <p>${price}€ / jour</p>
    `
    const contentCardDom = document.createElement("aside")
    contentCardDom.innerHTML = contentDom
    const main = document.querySelector("main")
    main?.appendChild(contentCardDom)
}