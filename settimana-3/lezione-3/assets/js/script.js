/*
elenco di task eliminabili, cioè devo eliminare sul quale faccio click
1. prendere il valore dell'input e scriverlo in una lista
2. memorizzare il valore dell'input (array di task)
3. indicare alla funzione di eliminazione su quale ho fatto click (indice)
*/

//elementi HTML
const task = document.getElementById('scrivere');
const lista = document.getElementById('lista');
const buttonSubmit = document.getElementById('crea');

//scrivo il task singolo
let singleTask;
// nell'array lascio traccia delle task
let tasks = [];
window.addEventListener('load', init());

// verifica se c'è qualcosa di memorizzato e lo stampo a video
function init() {
    if (localStorage.getItem('tasks')) {
        tasks = (localStorage.getItem('tasks').split(','));
        console.log(tasks);
        scriviLista();
    }
}

buttonSubmit.addEventListener('click', function (e) {   //devo aggiungere il task all'array. poi creo la lista
    e.preventDefault();
    // se il campo è vuoto blocco qualsiasi altra funzione
    if (task.value == '') {
        alert('Per favore inserisci un task.');
        return;
    }
    //... altrimenti avvio l'aggiunta del task nell'array, la creazione della lista, la cancellazione del form
    // ogni funzione si deve occupare di una cosa sola
    cancellaForm();
    aggiungi();
    scriviLista();
});

// aggiungo il nuovo task nell'array e lo memorizzo nel localStorage
//mi creo delle voci riconoscibili creando un array, riconoscibili in base all'indice
const aggiungi = () => {
    singleTask = task.value;
    tasks.push(singleTask);
    console.log(tasks);
    localStorage.setItem('tasks', tasks);
};

//scrivere la lista, cosa deve fare? ad ogni aggiunta, svuota la lista e la ricostruisce da capo
//appendere un elemento che non conosco in coda? o creare un'altra voce
//genero la lista a partire dall'array, indicando che ogni elemento passerà il suo indice alla funzione elimina
function scriviLista() {
    lista.innerHTML = "";
    tasks.forEach((element, index) => {
        lista.innerHTML += `<li>${element}&nbsp; <button type="button" onclick="elimina(${index});>❌</button></li>`;
        //la funzione elimina avrà bisogno di un indice per funzionare, deve sapere che cosa eliminare, con il click elimina index
    });
    cancellaForm();
};

//creare la procedura di eliminazione ovvero cancello il form
function cancellaForm() {
    task.value = '';
};

//cosa fa elimina? elimina l'indice dall'array
//al click sul cestino elimino l'elemento dall'array, in base al suo indice, riscrivo il nuovo array
// in memoria e ricreo la lista con il nuovo array privo dell'elemento eliminato
const elimina = (indice) => {
    tasks.splice(indice, 1);
    localStorage.setItem('tasks', tasks);
    // a ogni elemento eliminato ricreo la lista da zero
    scriviLista();
};

