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

let singleTask;                             //scrivo il task singolo
let tasks = [];                             // nell'array lascio traccia delle task

buttonSubmit.addEventListener('click', function (e) {   //devo aggiungere il task all'array. poi creo la lista
    e.preventDefault();
    aggiungi();                                        
    scriviLista();                                    // ogni funzione si deve occupare di una cosa sola
    cancellaForm();
});

// mettere ciò che scrivo 
const aggiungi = () => {
    singleTask = task.value;                           //mi creo delle voci riconoscibili creando un array, riconoscibili in base all'indice
    tasks.push(singleTask);
    console.log(tasks);
};

//scrivere la lista, cosa deve fare? ad ogni aggiunta, svuota la lista e la ricostruisce da capo
//appendere un elemento che non conosco in coda? o creare un'altra voce
const scriviLista = () => {
    lista.innerHTML = '';
    tasks.forEach((element, index) => {
        lista.innerHTML += `<li>${element}&nbsp; <button type="button" onclick="elimina(${index});>X</button></li>`;   //la funzione elimina avrà bisogno di un indice per funzionare, deve sapere che cosa eliminare, con il click elimina index
    }
)};

//creare la procedura di eliminazione 
const cancellaForm = () => {
    task.value = '';
};

//cosa fa elimina? elimina l'indice dall'array
const elimina = (indice) => {
    tasks.splice(indice, 1);                //elimina una voce di indice ed elimina solo quella
    scriviLista();
};


//se refresho mi scompare tutta la lista
function init() {
    if (localStorage.getItem('tasks')) {
        tasks.push(localStorage)
    }
}