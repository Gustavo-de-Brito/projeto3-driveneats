let numOrders = 0;
let plate;
let platePrice;
let drink;
let drinkPrice;
let dessert;
let dessertPrice;
let fullPrice;
let textWhatsapp;

function verifyThreeOrders(numOrders) {
    const makeOrderBtn = document.querySelector(".bottom-bar button:first-child");

    if(numOrders === 3) {
        document.querySelector(".bottom-bar button:first-child").classList.add("not-visible");
        document.querySelector(".bottom-bar button:last-child").classList.remove("not-visible");
    } else if (makeOrderBtn.classList.contains("not-visible")) {
        document.querySelector(".bottom-bar button:last-child").classList.add("not-visible");
        document.querySelector(".bottom-bar button:first-child").classList.remove("not-visible");
    }
}

function selectedItem(element) {
    const listFood = element.parentNode;
    const alredySelected = listFood.querySelector(".selected-border");
    
    if(alredySelected !== null) {
        alredySelected.classList.remove("selected-border");
        alredySelected.querySelector("ion-icon").classList.add("not-visible");

        numOrders--;
    }
    
    if(alredySelected !== element) {
        element.classList.add("selected-border");
        element.querySelector("ion-icon").classList.remove("not-visible");
        setOrder(element, listFood);

        numOrders++;
    }

    verifyThreeOrders(numOrders);
}

function setOrder(element, listFodd) {
    const typeFood = listFodd.parentNode.querySelector("h2").innerHTML;
    
    if(typeFood.includes("prato")) {
        plate = element.querySelector("h4").innerHTML;
        platePrice = element.querySelector(".food-option > div > h4").innerHTML;

    } else if(typeFood.includes("bebida")) {
        drink = element.querySelector("h4").innerHTML;
        drinkPrice = element.querySelector(".food-option > div > h4").innerHTML;

    } else if(typeFood.includes("sobremesa")) {
        dessert = element.querySelector("h4").innerHTML;
        dessertPrice = element.querySelector(".food-option > div > h4").innerHTML;

    }
}

function showConfirmView() {
    document.querySelector(".confirm-view").classList.remove("not-visible");

    fullPrice = (Number(platePrice.replace(/\D/g,'')) + Number(drinkPrice.replace(/\D/g,'')) + Number(dessertPrice.replace(/\D/g,''))) / 100;
    fullPrice = fullPrice.toFixed(2).toString();

    document.querySelector(".food-info > p:first-child").innerHTML = plate;
    document.querySelector(".food-info > p:last-child").innerHTML = platePrice;
    document.querySelector(".food-info:nth-child(3) > p:first-child").innerHTML = drink;
    document.querySelector(".food-info:nth-child(3) > p:last-child").innerHTML = drinkPrice;
    document.querySelector(".food-info:nth-child(4) p:first-child").innerHTML = dessert;
    document.querySelector(".food-info:nth-child(4) p:last-child").innerHTML = dessertPrice;
    document.querySelector(".food-info:nth-child(5) p:last-child").innerHTML = `R$ ${fullPrice.replace(".", ",")}`;
}

function cancelOrder() {
    document.querySelector(".confirm-view").classList.add("not-visible");
}

function confirmOrder() {
    textWhatsapp = `Olá, gostaria de fazer o pedido:\n- Prato: ${plate}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${fullPrice.replace(".", ",")}`;
    const name = prompt("Qual é o seu nome?");
    const adress = prompt("Qual é o seu endereço?");
    textWhatsapp += `\n\n- Nome: ${name}\n- Endereço: ${adress}`;

    window.open(`https://wa.me/5561999999999?text=${encodeURIComponent(textWhatsapp)}`);
}