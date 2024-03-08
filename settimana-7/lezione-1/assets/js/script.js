// Crea una classe User per la creazione di oggetti di tipo “utente”. 
//Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi: 
//- firstName 
//- lastName 
//- age 
//- location 
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

//Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
//Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte,
//il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.

    compareAge(anotherUser) {
        if (this.age < anotherUser.age) {
            console.log(`${anotherUser.firstName} è più grande di ${this.User.firstName}`)
        } else if (this.age > anotherUser.age) {
            console.log(`${this.firstName} è più grande di ${anotherUser.firstName}`)
        } else {
        console.log(`${this.firstName} e ${anotherUser.firstName} hanno la stessa età`)
        }
    }
}


//Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.
const utente1 = new User('Mario', 'Rossi', 45, 'Milano');
const utente2 = new User('Verdiana', 'Galdi', 23, 'Salerno');
console.log(utente1.compareAge(utente2));

//Crea un form per la creazione di oggetti “Pet” (animali domestici). 
//La classe Pet dovrà essere dotata delle seguenti proprietà:
//- petName
//- ownerName
//- species // (cane, gatto, coniglio etc.)
//- breed // (labrador, soriano, nano etc.)
//Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. 
let petNameInput = document.getElementById('petName');
let ownerNameInput = document.getElementById('ownerName');
let petSpeciesInput = document.getElementById('petSpecies');
let petBreedInput = document.getElementById('petBreed');

let addButton = document.getElementById('addButton');
let petList = document.getElementById('list')

let pets = [];


class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    compareOwnerName(anotherPet) {
        if (this.ownerName === anotherPet.ownerName) {
            return true
        } else {
            return false
        }
    }
}

//Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.
const stampaLista = function () {
    petList.innerHTML = '' // svuoto la lista dall'inizio
    pets.forEach((pet) => {
        const newLi = document.createElement('li') //creo elemento li per ogni animale registrato
        newLi.innerText = `Nome: ${pet.petName} Proprietario: ${pet.ownerName} Specie: ${pet.species} Razza: ${pet.breed}`
        petList.appendChild(newLi) 
    })
}

//bottone che invia il form e stampa i dati inseriti(VALUE)
addButton.onclick = function () {
    let newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        petSpeciesInput.value,
        petBreedInput.value
    )
    pets.push(newPet)
    stampaLista()
    petNameInput.value = ''
        ownerNameInput.value = ''
        petSpeciesInput.value = ''
        petBreedInput.value = ''
        //svuoto gli input field alla fine
}