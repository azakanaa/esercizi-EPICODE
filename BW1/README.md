# BenchMark Epicode

![Static Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/Version-1.0.0-blue)

## Funzione generale e descrizione

Il programma creato simula il classico BenchMark Epicode, il quale propone varie domande logiche e le riposte da scegliere, il tutto con il timer di 30 secondi che scorre.
Il progetto è stato sviluppato utlizzando Javascript, Chart.js per realizzare il grafico a torta, il sessionStorage è stato utilizzato per salvare i dati inseriti dall'utente (domande, feedback).

## Come usare il progetto

Scaricare dalla repository di GitHub il progetto.

## Funzione index.html e scriptIniziale.js

La prima pagina index.html, è in parte gestita dallo scriptIniziale.js, il quale permette di interagire dinamicamente, infatti per poter andare avanti è necessario accettare le condizioni e soltanto in quel caso si sbloccherà il tasto procedi.

## Funzione indexDomande.html e scriptDomande.js

Qui si procede con il test, tutto è stato ricreato in maniera più fedele possibile, dalla scelta delle domande al timer che scorre. Tramite lo scriptDomande.js è possibile gestire la randomizzazione delle domande e delle risposte presentate. Una volta arrivato a 0 il timer cambierà domanda contando come giusta la risposta se è corretta e come sbagliata se la risposta è errata o vi è la mancanza di selezione di una risposta. Tramite il tasto "prossima" si può procedere alla domanda seguente e una volta terminate tutte le domande si accederà alla pagina dei risultati. Tramite il sessionStorage teniamo conto dei risultati del test per poi riportarli nel grafico della pagina seguente.

## Funzione indexRisultati.html e scriptRisultati.js

In questa pagina tramite il sessionStorage precedente riportiamo i risultati e li inseriamo in un grafico doughnut implementato dalla libreria Chart.js e gestito da scriptRisultati.js, inoltre stampiamo a video le percentuali delle risposte corrette e sbagliate e colleghiamo con il tasto "lascia un feedback" ci colleghiamo alla prossima pagina.

## Funzioni indexFeedback.html e scriptFeedback.js

Qui l'utente ha l'occasione di poter lasciare un feedback testuale ed una valutazione numerica da 1 a 10 tramite le "stelle", gestite da scriptFeedback.js attraverso click e mouseover. Il campo di testo è stato reso obbligatorio ed una volta compilato e premuto il tasto "INVIA UN FEEDBACK" restituirà un messaggio di ringraziamento. Inoltre i dati registrati durante nel feedback verranno mostrati in console.

## Authors

-   [@Brokins00](https://github.com/Brokins00)
-   [@GabrieleTerracciano](https://github.com/GabrieleTerracciano)
-   [@Leonardomarialeoni](https://github.com/Leonardomarialeoni)
-   [@sabrinabarzoni](https://github.com/sabrinabarzoni)
-   [@azakanaa](https://github.com/azakanaa)
-   [@Simonecaste96](https://github.com/Simonecaste96)
