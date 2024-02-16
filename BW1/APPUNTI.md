 arrayRisposte[5] = "false"
 if (arrayRisposte[5]) {
     console.log('esiste')
 } else {
     console.log('non esiste')
 }

let arrayRisposte = [5]
let found = arrayRisposte.indexOf(5)
if (found >= 0) {
    console.log('trovato')
} else {
    console.log('non trovato')
    arrayRisposte.push(5)
}

if (questions[5].estratto) {
    console.log('ripeti')
} else {
    console.log('non trovato')
    questions[5].estratto = true;
}