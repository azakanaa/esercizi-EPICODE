let selezionata = 0;
const primoDiv = document.getElementById("feedback");
const secondoDiv = document.getElementById("feedbackInviato");

const gestioneColori = (numStellina) => {
    const stelline = document.querySelectorAll(".stellina");
    for (let i = 0; i < stelline.length; i++) {
        if (i <= numStellina) {
            stelline[i].classList.add("colorata");
        } else {
            stelline[i].classList.remove("colorata");
        }
    }
};

const stella = `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z" fill="black"/>
</svg>`;

const gestisceStars = () => {
    const stelline = document.getElementById("stelline");
    for (let i = 0; i < 10; i++) {
        const stellina = document.createElement("div");
        stellina.innerHTML = stella;
        stellina.classList.add("stellina");
        if (i === 0) {
            stellina.classList.add("colorata");
        }
        stellina.addEventListener("click", (e) => {
            selezionata = i;
            gestioneColori(i);
        });
        stellina.addEventListener("mouseenter", (e) => {
            gestioneColori(i);
        });
        stelline.appendChild(stellina);
    }
    stelline.addEventListener("mouseleave", (e) => {
        gestioneColori(selezionata);
    });
};

const gestisceBottone = () => {
    const bottone = document.getElementById("buttonInformazioni");
    const form = document.getElementById("form");
    const input = document.getElementById("commento");
    bottone.addEventListener("click", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            return;
        }
        sessionStorage.setItem(
            "feedback",
            JSON.stringify({ stelline: selezionata, commento: input.value })
        );
        console.log("Voto:", selezionata + 1);
        selezionata = 0;
        console.log("Commento:", input.value);
        input.value = "";
        primoDiv.style.display = "none";
        secondoDiv.style.display = "block";
    });
};

const init = () => {
    let feedback = sessionStorage.getItem("feedback");
    let risultati = sessionStorage.getItem("risultati");
    let abilitato = sessionStorage.getItem("abilitato");
    if (!abilitato || (abilitato && abilitato === "no") || !risultati) {
        window.location.href = "index.html";
        return;
    }
    feedback = JSON.parse(feedback);
    if (feedback) {
        primoDiv.style.display = "none";
        secondoDiv.style.display = "block";
    } else {
        gestisceStars();
        gestisceBottone();
        secondoDiv.style.display = "none";
        primoDiv.style.display = "block";
    }
};

window.addEventListener("load", init);
