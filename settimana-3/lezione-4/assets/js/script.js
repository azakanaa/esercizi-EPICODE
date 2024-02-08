const tombolone = document.getElementById('tombolone');
const btnEstrai = document.getElementById('estrai');
const btnReset = document.getElementById('reset');
const estratti = [];

window.addEventListener('load', init);

function init() {
    creaTabellone();
}

const creaTabellone = () => {
    for (i = 1; i < 91; i++) {
        const casella = document.createElement('div');
        const testo = document.createElement('span');
        testo.innerText = i;
        testo.classList.add('numeri');
        casella.classList.add('caselle');
        casella.appendChild(testo);
        tombolone.appendChild(casella);
    }
}

btnEstrai.addEventListener('click', function() {
    estrai();
});

btnReset.addEventListener('click', function() {
    const tabellone = document.querySelectorAll('.caselle');
    tabellone.forEach((casella) => {
        casella.classList.remove('estratto');
    });
    estratti.splice(0);
    document.getElementById('estratto').innerText = '';
});

function estrai() {
    let estratto = Math.floor((Math.random() * 90) + 1);
    if (estratti.includes(estratto)) {
        estrai();
    } else {
        document.getElementById('estratto').innerText = `Numero estratto: ${estratto}`;
        estratti.push(estratto);
        colora(estratto);
    }
}

function colora(estratto) {
    const tabellone = document.querySelectorAll('.caselle');
    for (let i = 0; i < tabellone.length; i++) {
        if (parseInt(tabellone[i].innerText) === estratto) {
            tabellone[i].classList.add('estratto');
        }
    }
}