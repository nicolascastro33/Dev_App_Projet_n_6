import { clearForm } from "../modal/form.ts";

const main = document.querySelector("main")
const form = document.querySelector("form")

export function displayModal() {
    const modal:HTMLElement | null = document.getElementById("contact_modal");
    if(modal){
     modal.style.display = "block";
     main?.setAttribute("aria-hidden","true")
     form?.setAttribute("aria-hidden","false")      
    }
	
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    if(modal){
        modal.style.display = "none";
        main?.setAttribute("aria-hidden","false")
        form?.setAttribute("aria-hidden","true")         
       }
    clearForm();
}


