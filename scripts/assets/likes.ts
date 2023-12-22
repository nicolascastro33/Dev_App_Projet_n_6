export function calculateNumberOfLikes(mediaData):number{
    let numberLikes = 0
    for(let i=0; i < mediaData.length; i++){
        numberLikes += mediaData[i].likes
    }
    return numberLikes
}