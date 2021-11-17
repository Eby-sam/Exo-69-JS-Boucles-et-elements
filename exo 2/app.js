let liste = document.getElementById('liste-commissions');
let beure = document.createElement("li");
liste.appendChild(beure);
beure.innerHTML = 'Beure';

// button ...

let button = document.getElementById('touch');
function reset() {
    beure.remove();
}

button.addEventListener('click',reset);