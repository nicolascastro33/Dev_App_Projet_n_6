export interface InterfacePhotographer{
    name: string;
    id: string;
    city: string;
    country: string;
    tagline: string;
    price: number;
    portrait: string
}


export interface InterfaceMedias{
    title: string;
    photographerId: number;
    id: string;
    image: string;
    likes: number;
    date: string;
    price: number
}

export interface InterfaceForm{
    firstName: string;
    lastName: string;
    email: string;
    message: string
}