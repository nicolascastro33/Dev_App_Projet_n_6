const params = new URLSearchParams(window.location.search);

export function getPhotographerId(){
    // Récupération de l'id dans l'url de la page 
    return Number(params.get('id'));
}

export function getPhotographerName(){
    return params.get("nom")
}