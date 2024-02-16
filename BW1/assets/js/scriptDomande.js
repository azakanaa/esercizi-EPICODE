const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Cosa significa CPU?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Nel linguaggio di programmazione Java, quale di queste parole chiave utilizzeresti su una variabile per assicurarti che non venga modificata?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Il logo di Snapchat è una campana.",
        correct_answer: "Falso",
        incorrect_answers: ["Vero"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "I puntatori non venivano utilizzati nel linguaggio di programmazione C originale; sono stati aggiunti successivamente in C++.",
        correct_answer: "Falso",
        incorrect_answers: ["Vero"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Qual è il formato di immagine più preferito utilizzato per i loghi nel database Wikimedia?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Nel web design, cosa significa CSS?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Qual è il nome in codice del sistema operativo mobile Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Su Twitter, quale è il limite di caratteri per un tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux è stato creato come alternativa a Windows XP.",
        correct_answer: "Falso",
        incorrect_answers: ["Vero"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Quale linguaggio di programmazione condivide il suo nome con un'isola in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

let arrayRisposte = [];

// LET COUNT FUNZIONA DA CONTATORE, CHE EQUIVALE ALLA PRIMA DOMANDA -0-
let count = 1;

//SI CREA UNA FUNZIONE, LA QUALE PRENDE L'ID nell'html numeroDomanda, per poi aggiornarlo in base alla quantità delle domande effettuate. -4-
const numeroDomanda = () => {
    document.getElementById("numeroDomanda").innerText = count;
};
//Randomizzazone delle risposte in modo che non escano in ordine come nell'array (cioè la prima corretta e le seguenti false) -5-
const randomizzaRisposte = (array) => {
    let arrayRisposte = [];
    array.forEach((element) => {
        let random = Math.floor(Math.random() * array.length);
        while (arrayRisposte.includes(array[random])) {
            random = Math.floor(Math.random() * array.length);
        }
        arrayRisposte.push(array[random]);
    });
    return arrayRisposte;
};

const rimuoviSelezionata = () => {
    const selezionata = document.querySelector(".selezionata");
    if (selezionata) {
        selezionata.classList.remove("selezionata");
    }
};

// Prendiamo le domande ed andiamo ad inserirle dentro al div questions   -7-
const strutturaDomanda = (indice) => {
    const domande = document.getElementById("questions");
    let risposte = [];
    domande.innerHTML = "";
    //Creiamo l'elemento h2 con l'id domanda e lo assegnamo alla const domanda impostando id e class.
    const domanda = document.createElement("h2");
    domanda.setAttribute("id", "domanda");
    domanda.classList.add("domanda");
    //Prendiamo la domanda dall'array questions con il suo indice estratto e l'assegnamo all'innerText della domanda.
    domanda.innerText = questions[indice].question;
    domande.appendChild(domanda);
    // Creiamo il primo bottone della risposta giusta, assegnando i valori indicati durante la progettazione (id,class,type)
    const rispostaGiusta = document.createElement("button");
    rispostaGiusta.setAttribute("id", "buttonRisposta1");
    rispostaGiusta.classList.add("buttonRisposta");
    rispostaGiusta.setAttribute("type", "button");
    rispostaGiusta.addEventListener("click", (e) => {
        e.preventDefault();
        rimuoviSelezionata();
        rispostaGiusta.classList.add("selezionata");
    });
    // Prendiamo la risposta corretta dalla domanda estratta dall'array e l'assegnamo all'innerText la risposta corretta.
    rispostaGiusta.innerText = questions[indice].correct_answer;
    risposte.push(rispostaGiusta);
    // Cicliamo l'array delle risposte non corrette per creare i relativi bottoni
    for (let i = 0; i < questions[indice].incorrect_answers.length; i++) {
        const risposta = document.createElement("button");
        // Mettiamo i+2 perché, essendo il primo id del bottone precedentemente creato con id 1, se il valore i è 1 va ad interferire con il primo bottone, se il valore di i è 0 in questo caso con il +2 va a partire da id 2
        risposta.setAttribute("id", `buttonRisposta${i + 2}`);
        risposta.classList.add("buttonRisposta");
        risposta.setAttribute("type", "button");
        risposta.addEventListener("click", (e) => {
            e.preventDefault();
            rimuoviSelezionata();
            risposta.classList.add("selezionata");
        });
        // Prendiamo la risposta errata dalla domanda estratta dall'array e l'assegnamo all'innerText della risposta della [i] corrispondente.
        risposta.innerText = questions[indice].incorrect_answers[i];
        risposte.push(risposta);
    }
    let risposteCasuali = randomizzaRisposte(risposte);
    domande.append(...risposteCasuali);
};

let intervallo;

const parteCountdown = () => {
    let timer = 30;
    const numero = document.getElementById("countdown-number");
    numero.innerText = timer;
    const cerchio = document.querySelector("svg .cerchio");
    cerchio.setAttribute("style", "");
    setTimeout(() => {
        cerchio.style.animation = `countdown ${timer}s linear forwards`;
    }, 50);
    intervallo = setInterval(() => {
        timer--; // timer = timer - 1 || timer -= 1;
        numero.innerText = timer;
        if (timer === 0) {
            clearInterval(intervallo);
            controlloRisposta();
        }
    }, 1000);
};

let domandaAttuale = 0;

//Con il metodo math random andiamo a creare un numero randomico (tra 0 e 0.9999999) che verrà arrotondato da math floor e moltiplicato con la lunghezza dell'array questions in modo da ottenere un indice randomico  -6-
const pescaDomanda = () => {
    const random = Math.floor(Math.random() * questions.length);
    //SE L'INDICE RANDOM è PRESENTE NELL'ARRAY, RIPESCA. ALTRIMENTI DICHIARA L'INDICE DELL'ARRAY RISPOSTE CON IL VALORE STRINGA: FALSE
    if (arrayRisposte[random]) {
        pescaDomanda();
    } else {
        arrayRisposte[random] = "false";
        domandaAttuale = random;
        strutturaDomanda(random);
        parteCountdown();
    }
};

let oggetto = {
    risultati: "",
};

function controlloRisposta(barato) {
    const selezionata = document.querySelector(".selezionata");
    if (selezionata && selezionata.id.includes("buttonRisposta1")) {
        arrayRisposte[domandaAttuale] = "true";
    }
    if (!barato && count < questions.length) {
        count++;
        numeroDomanda();
        pescaDomanda();
    } else {
        const risposteCorrette = arrayRisposte.filter(
            (valore) => valore === "true"
        );
        const countCorrette = risposteCorrette.length;
        const countSbagliate = questions.length - countCorrette;
        sessionStorage.setItem(
            "risultati",
            JSON.stringify({
                corrette: countCorrette,
                sbagliate: countSbagliate,
                totale: arrayRisposte.length,
            })
        );
        window.location.href = "indexRisultati.html";
    }
}

const inizializaBottone = () => {
    const bottone = document.getElementById("buttonProssima");
    bottone.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(intervallo);
        controlloRisposta();
    });
};

const init = () => {
    let abilitato = sessionStorage.getItem("abilitato");
    let risultati = sessionStorage.getItem("risultati");
    if (!abilitato || (abilitato && abilitato === "no")) {
        window.location.href = "index.html";
        return;
    }
    if (risultati) {
        window.location.href = "indexRisultati.html";
        return;
    }
    document.getElementById("totaleDomande").innerText = questions.length; // -1- La funzione init prende nel documento l'elemento con l'id totaleDomande e dagli come valore la lunghezza delle domande, dopo di che invoca le funzioni numeroDomanda e pescaDomanda
    document.getElementById("container").style.display = "block";
    numeroDomanda();
    pescaDomanda();
    inizializaBottone();
};

window.addEventListener("load", init); //-1- Attendiamo il caricamento della pagina ed avviamo la funzione init

let intervallo2 = null;
window.addEventListener("blur", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
    popup.innerText = "Torna nella pagina entro 10 secondi";
    let count = 10;
    if (intervallo2) return;
    intervallo2 = setInterval(() => {
        count--;
        popup.innerText = `Torna nella pagina entro ${count} secondi`;
        if (count === 0) {
            clearInterval(intervallo2);
            popup.style.display = "none";
            overlay.style.display = "none";
            clearInterval(intervallo);
            controlloRisposta(true);
            intervallo2 = null;
        }
    }, 1000);
});

overlay.addEventListener("click", function (e) {
    if (intervallo2) {
        popup.style.display = "none";
        overlay.style.display = "none";
        clearInterval(intervallo2);
        intervallo2 = null;
    }
});
