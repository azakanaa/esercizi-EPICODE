const risposte = {
    passato: {
        title: 'Congratulazioni <span style="color: cyan">Hai passato l\'esame.</span>',
        message:
            "Riceverai il certificato in qualche minuto. Controlla la tua mail (anche cartella promozioni / spam)",
    },
    nonpassato: {
        title: 'Ci dispiace molto <span style="color: #d20094">Non hai passato l\'esame.</span>',
        message:
            "Il docente si metterà in contatto con te per capire i tuoi errori, riuscirai sicuramente a migliorare in futuro.",
    },
};

const titoloRisultato = document.getElementById("titoloRisultato");
const testoRisultato = document.getElementById("testoRisultato");
const modificaRisultato = (risultati) => {
    let { corrette, sbagliate, totale } = risultati;
    // scomposizione dell'oggetto
    // let corrette = risultati.corrette
    // let sbagliate = risultati.sbagliate
    // let totale = risultati.totale
    const risposteCorrette = document.getElementById("corrette");
    const risposteSbagliate = document.getElementById("sbagliate");
    const risposteTotali = document.querySelectorAll(".totaleDomande");
    const titoloRisposta = document.getElementById("titoloRisultato");
    const testoRisposta = document.getElementById("testoRisultato");
    risposteCorrette.innerText = corrette;
    risposteSbagliate.innerText = sbagliate;
    //scomposizione array risposteTotali
    for (let i = 0; i < risposteTotali; i++) {
        risposteTotali[i].innerText = totale;
    }
    const risposteMinime = Math.floor((60 * totale) / 100);
    if (corrette >= risposteMinime) {
        titoloRisposta.innerHTML = risposte.passato.title;
        testoRisposta.innerText = risposte.passato.message;
        // Imposta la configurazione dei coriandoli
        const confettiSettings = {
            count: party.variation.range(100, 200), // Numero casuale di coriandoli
            size: 1, // Dimensioni casuali dei coriandoli
            velocity: party.variation.range(3, 6), // Velocità di caduta casuale
        };

        // Avvia l'effetto coriandoli
        party.confetti(document.body, confettiSettings);
    } else {
        titoloRisposta.innerHTML = risposte.nonpassato.title;
        testoRisposta.innerText = risposte.nonpassato.message;
    }
};

//Funzione che genera il cerchio dei risultati e modifica le relative label
const generaCerchio = (corrette, sbagliate, totali) => {
    // Definiamo i dati per il grafico
    const data = {
        datasets: [
            {
                data: [corrette, sbagliate],
                backgroundColor: ["#00ffff", "#d20094"], // Colori delle fette
                borderWidth: 0, // Rimuove lo spazio tra i colori
                color: "black",
            },
        ],
        labels: ["Corrette", "Sbagliate"],
    };

    // Configurazione del grafico
    const options = {
        responsive: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false,

                external: function (context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById("chartjs-tooltip");

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement("div");
                        tooltipEl.id = "chartjs-tooltip";
                        tooltipEl.innerHTML = "<table></table>";
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove(
                        "above",
                        "below",
                        "no-transform"
                    );
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add("no-transform");
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(getBody);

                        let innerHtml = "<thead>";

                        titleLines.forEach(function (title) {
                            innerHtml += "<tr><th>" + title + "</th></tr>";
                        });
                        innerHtml += "</thead><tbody>";

                        bodyLines.forEach(function (body, i) {
                            const colors = tooltipModel.labelColors[i];
                            let style = "background:" + colors.backgroundColor;
                            style += "; border-color:" + colors.borderColor;
                            style += "; border-width: 2px";
                            const span =
                                '<span style="' +
                                style +
                                '">' +
                                body +
                                "</span>";
                            innerHtml += "<tr><td>" + span + "</td></tr>";
                        });
                        innerHtml += "</tbody>";

                        let tableRoot = tooltipEl.querySelector("table");
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position =
                        context.chart.canvas.getBoundingClientRect();
                    const bodyFont = Chart.helpers.toFont(
                        tooltipModel.options.bodyFont
                    );

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = "absolute";
                    tooltipEl.style.left =
                        position.left +
                        window.pageXOffset +
                        tooltipModel.caretX +
                        "px";
                    tooltipEl.style.top =
                        position.top +
                        window.pageYOffset +
                        tooltipModel.caretY +
                        "px";
                    tooltipEl.style.font = bodyFont.string;
                    tooltipEl.style.padding =
                        tooltipModel.padding +
                        "px " +
                        tooltipModel.padding +
                        "px";
                    tooltipEl.style.pointerEvents = "none";
                },
            },
        },
        cutout: "70%", // Percentuale di spazio vuoto all'interno del grafico
    };

    // Creiamo il grafico
    const ctx = document.getElementById("ciambella").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: options,
    });
};
// La funzione init prende i risultati salvati precedentemente sul sessionstorage, che stringify
const init = () => {
    let risultati = sessionStorage.getItem("risultati");
    let abilitato = sessionStorage.getItem("abilitato");
    if (!abilitato || (abilitato && abilitato === "no") || !risultati) {
        window.location.href = "index.html";
        return;
    }
    document.getElementById("container").style.display = "block";
    risultati = JSON.parse(risultati);
    generaCerchio(risultati.corrette, risultati.sbagliate, risultati.totale);
    modificaRisultato(risultati);
};

const buttonFeedback = document.getElementById("buttonFeedback");
buttonFeedback.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "indexFeedback.html";
});

window.addEventListener("load", init);
