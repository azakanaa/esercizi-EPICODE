// 1. creare una griglia di 90 numeri, su 9 righe ognuna delle quali contiene i div necessari (da 1 a 10, da 11 a 20, da 21 a 30...)
const grigliaNumeri = (numeriNellaGriglia) => {
    const grigliaDiv = document.getElementById('griglia');
    for (let i = 0; i < 10; i++) {
        const celleNumeri1 = document.createElement('div');
        celleNumeri1.classList.add('numeri1'); //da 1 a 10
    }
    for (let i = 10; i < 20)
}



// 2. creare un button che generi un numero random tra 1 e 90 (e ovviamente stampare il numero estratto)
function pescaNumero() {
    const 
}

// 3. evidenziare sul tombolone il numero estratto

// 4. verificare che il numero estratto non sia già uscito: se è uscito, estrarre un nuovo numero (funzione ricorsiva: è una funzione che
// che a condizione chiama se stessa)

/* function estraiNumero () {
        numero = Math.floor(Math.random() eccetera)
        if (numero estratto è presente nell'array estratti) {
                estraiNumero();
        }
}
*/