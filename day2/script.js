// targetto l elemento
// creo l elemento da inserire
// popolo l elemento
// appendo
//selezionare btn e input
//creare un evento che al click di btn inserisce il valore di input nell array
document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#list");
  const btnSave = document.querySelector("#btnSave");
  const btnDelete = document.querySelector("#btnDelete");
  const nome = document.querySelector("#name");
  const cognome = document.querySelector("#surName");

  // mostro i valori salvati nel local storage con questa function
  function mostraValoriSalvati() {
    list.innerHTML = "";
    const datiSalvati = JSON.parse(localStorage.getItem("dati")) || [];

    // itero sui dati salvati
    for (let i = 0; i < datiSalvati.length; i++) {
      const li = document.createElement("li");
      li.innerText = `Nome: ${datiSalvati[i].nome}, Cognome: ${datiSalvati[i].cognome}`;
      list.appendChild(li);
    }
  }

  // Mostro i valori salvati al caricamento della pagina
  mostraValoriSalvati();

  // Andiamo a salvare , creo una funzione a parte per il btn save
  btnSave.addEventListener("click", function () {
    const nomeValore = nome.value;
    const cognomeValore = cognome.value;

    // Controlla se entrambi i campi sono stati compilati
    if (nomeValore && cognomeValore) {
      const datiSalvati = JSON.parse(localStorage.getItem("dati")) || [];
      datiSalvati.push({ nome: nomeValore, cognome: cognomeValore });
      localStorage.setItem("dati", JSON.stringify(datiSalvati));
      mostraValoriSalvati();
    }
  });

  // Aggiunge un evento click al pulsante Cancella
  btnDelete.addEventListener("click", function () {
    localStorage.removeItem("dati");
    mostraValoriSalvati();
  });
});
//secondo esercizio

function updateCounter() {
  // Ottieni il valore del contatore dal sessionStorage
  let counterValue = sessionStorage.getItem("counterValue");

  // Se non esiste, inizializza il contatore a 0
  if (!counterValue) {
    counterValue = 0;
  } else {
    // Incrementa il valore del contatore
    counterValue = parseInt(counterValue, 10) + 1;
  }

  // Salva il valore aggiornato nel sessionStorage
  sessionStorage.setItem("counterValue", counterValue);

  // Mostra il valore aggiornato nella pagina
  document.getElementById("counter").textContent = counterValue;
}

// Chiama la funzione updateCounter ogni secondo
setInterval(updateCounter, 1000);

// Chiama immediatamente la funzione per impostare il valore iniziale
updateCounter();
