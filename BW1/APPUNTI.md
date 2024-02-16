# Appunti

## Metodologie risposte
1. Controlliamo se esiste nell'arrayRisposte l'indice indicato, se non esiste gli diamo un valore stringa false che va ad indicare che, a prescindere, l'utente ha risposto sbagliato alla domanda, in caso risponda bene verrà modificato in seguito in stringa true.
```javascript
arrayRisposte[5] = "false";
if (arrayRisposte[5]) {
    console.log("esiste");
} else {
    console.log("non esiste");
}
```
2. Controlliamo se esiste nell'arrayRisposte l'indice indicato come valore andando a cercare l'indice del valore stesso, se non esiste uscira -1 e quindi inseriamo il numero della domanda attraverso .push nell'arrayRisposte, altrimenti cambia domanda.
```javascript
let arrayRisposte = [5];
let found = arrayRisposte.indexOf(5);
if (found >= 0) {
    console.log("trovato");
} else {
    console.log("non trovato");
    arrayRisposte.push(5);
}
```
3. Andiamo ad aggiungere una key estratto ad ogni domanda dell'array questions, se estratto esiste ed è true, allora cambia domanda, altrimenti va a modificare il valore estratto in true.
```javascript
if (questions[5].estratto) {
    console.log("ripeti");
} else {
    console.log("non trovato");
    questions[5].estratto = true;
}
```
