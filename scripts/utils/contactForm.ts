import { clearForm } from "../modal/form.ts";

const main = document.querySelector("main")
const form = document.querySelector("form")
const header = document.querySelector("header")


export function displayModal() {
    const modal:HTMLElement | null = document.getElementById("contact_modal");
    if(modal){
     modal.style.display = "block";
     main?.setAttribute("class","hiddenForm")
     header?.setAttribute("class","hiddenForm")  
     
     main!.inert = true
     header!.inert = true
     form?.setAttribute("aria-hidden","false")      
    }
	
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    if(modal){
        modal.style.display = "none";
        main?.removeAttribute("class")
        header?.removeAttribute("class")

        main!.inert = false
        header!.inert = false

        form?.setAttribute("aria-hidden","true")         
       }
    clearForm();
}


