import { clearForm } from "../modal/form.ts";

export function displayModal() {
    const modal:HTMLElement | null = document.getElementById("contact_modal");
    if(modal){
     modal.style.display = "block";   
    }
	
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    if(modal){
        modal.style.display = "none";   
       }
    clearForm();
}


