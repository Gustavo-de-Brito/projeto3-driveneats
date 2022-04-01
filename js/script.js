let numOrders = 0;

function verifyThreeOrders(numOrders) {
    const makeOrderBtn = document.querySelector(".bottom-bar button:first-child");

    if(numOrders === 3) {
        document.querySelector(".bottom-bar button:first-child").classList.add("not-visible");
        document.querySelector(".bottom-bar button:last-child").classList.add("visible");
    } else if (makeOrderBtn.classList.contains("not-visible")) {
        document.querySelector(".bottom-bar button:last-child").classList.remove("visible");
        document.querySelector(".bottom-bar button:first-child").classList.remove("not-visible");
    }
}

function selectedItem(element) {
    const father = element.parentNode;
    const alredySelected = father.querySelector(".selected-border");
    
    if(alredySelected !== null) {
        alredySelected.classList.remove("selected-border");
        alredySelected.querySelector("ion-icon").classList.remove("visible");
        alredySelected.querySelector("ion-icon").classList.add("not-visible");

        numOrders--;
    }
    
    if(alredySelected !== element) {
        element.classList.add("selected-border");
        
        const icon = element.querySelector("ion-icon");
        icon.classList.add("visible");
        icon.classList.remove("not-visible");
        
        numOrders++;
    }

    verifyThreeOrders(numOrders);
}