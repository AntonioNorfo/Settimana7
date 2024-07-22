class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge = function () {
    let result;
    if (user1.age > user2.age && user1.age > user3.age) {
      result = `L'utente ${user1.firstName} è più vecchio di ${user2.firstName} e anche di ${user3.firstName}.`;
    } else if (user2.age > user1.age && user2.age > user3.age) {
      result = `L'utente ${user2.firstName} è più vecchio di ${user1.firstName} e anche di ${user3.firstName}.`;
    } else {
      result = `L'utente ${user3.firstName} è più vecchio di ${user1.firstName} e anche di ${user2.firstName}.`;
    }
    return result;
  };
}

const user1 = new User("Paolo", "Erculeno", 30, "Miodi");
const user2 = new User("Giuseppe", "Pasqualeno", 40, "Miami");
const user3 = new User("Pietro", "Ercule", 20, "New York");

const resultText = user1.compareAge(user1, user2, user3);

console.log(user1);
console.log(user2);
console.log(user3);

// Aggiorna il contenuto dell'elemento HTML con l'id "mostUserOld"
const mostUserOldest = document.getElementById("mostUserOld");
mostUserOldest.innerText = resultText;

//2 esercizio
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const petForm = document.querySelector("form");
  const petList = document.querySelector(".list-group");
  const pets = [];

  petForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Raccogli i dati dal form
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("OwnerName").value;
    const species = document.getElementById("Species").value;
    const breed = document.getElementById("Breed").value;

    // Crea una nuova istanza di Pet
    const newPet = new Pet(petName, ownerName, species, breed);

    // Aggiungi la nuova istanza alla lista di pets
    pets.push(newPet);

    // Aggiorna la lista visibile
    updatePetList(pets, petList);

    // Resetta il form
    petForm.reset();
  });

  function updatePetList(pets, petList) {
    petList.innerHTML = "";

    pets.forEach((pet) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
      petList.appendChild(listItem);
    });
  }
});
