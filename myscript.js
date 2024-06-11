let listaSpesa = document.querySelector(".spesa");

let elencoSpesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori', 'Insalata', 'Mele', 'Formaggio', 'Pollo', 'Yogurt'];

let i = 0;
while (i < elencoSpesa.length) {
    let itemList = elencoSpesa[i];

    let frigoriferoContent = 
    `
        <li>${itemList}</li>
    `
    listaSpesa.innerHTML += frigoriferoContent;
    i++;
}