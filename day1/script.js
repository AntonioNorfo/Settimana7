class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge = function (user1, user2, user3) {
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
