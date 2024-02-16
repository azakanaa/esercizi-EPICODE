//Prendiamo gli elementi dell'HTML che ci servono nel JS  -3-

const gestioneCheckbox = () => {
    const unchecked = document.getElementById("unchecked");
    const checked = document.getElementById("checked");
    const button = document.getElementById("button");
    const avviso = document.querySelector(".avviso");

    //Selezionando la checkbox vuota la sostituiamo con la checkbox gia spuntata, abilitiamo il bottone e nascondiamo l'avviso(Devi accettare per procedere con il quiz) -4-
    unchecked.addEventListener("click", () => {
        unchecked.style.display = "none";
        checked.style.display = "inline";
        button.classList.add("abilitato");
        sessionStorage.setItem("abilitato", "si");
        avviso.style.display = "none";
    });

    //Selezionando la checkbox spuntata la sostiutiamo con la checkbox vuota, disabilitiamo il bottone e facciamo comparire l'avviso.  -5-
    checked.addEventListener("click", () => {
        unchecked.style.display = "inline";
        checked.style.display = "none";
        button.classList.remove("abilitato");
        sessionStorage.setItem("abilitato", "no");
        avviso.style.display = "block";
    });

    //Se è stata spuntata la checkbox il bottone diventa utilizzabile e porta alla pagina seguente, altrimenti non fa nulla   -6-
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (button.classList.contains("abilitato")) {
            window.location.href = "indexDomande.html";
        }
    });
};

// La funzione init gestisce tutto quello che abbiamo indicato, in questo caso gestioneCheckbox ed in piu se il test termianato non da modo tornare indietro  -2-
const init = () => {
    let risultati = sessionStorage.getItem("risultati");
    if (risultati) {
        window.location.href = "indexRisultati.html";
        return;
    }
    gestioneCheckbox();
};

// Quando carica la pagina, esegue la funzione callback init  -1-
window.addEventListener("load", init);
