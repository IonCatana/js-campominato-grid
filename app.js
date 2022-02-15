// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
//  in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Creare le variabile
const difficoltà1 = document.getElementById('easy').value;
const difficoltà2 = document.getElementById('medium').value;
const difficoltà3 = document.getElementById('hard').value;
const difficoltà4 = document.getElementById('insane').value;
const play = document.getElementById('btn-play');
console.log(difficoltà1, difficoltà2, difficoltà3, play);

// Creare la Funzione per tutte 3 difficoltá
// Creare il buttone Play
play.addEventListener('click', function () {
  const difficulty = document.getElementById('lvl-difficulty').value;
  console.log(difficulty, 'scelta difficoltá');

  // ho creato le variabile
  let numeroElementi = 0;
  let numeroColonne = 0;
  let numero = 0;

// Switch le difficoltá
  switch (difficulty) {
    case difficoltà1: //easy
      numeroElementi = 100; // La moltiplicazione delle colonne 10 * 10 = 100
      numeroColonne = 10;
      break; // chiude il ciclo
    case difficoltà2: //medium
      numeroElementi = 81; // La moltiplicazione delle colonne 9 * 9 = 81
      numeroColonne = 9;
      break; // chiude il ciclo
    case difficoltà3: // hard
      numeroElementi = 49; // La moltiplicazione delle colonne 7 * 7 = 49
      numeroColonne = 7;
      break; // chiude il ciclo
    case difficoltà4: // insane
      numeroElementi = 25; // La moltiplicazione delle colonne 5 * 5 = 25
      numeroColonne = 5;
      break; // chiude il ciclo
  }
  const grid = document.querySelector('.grid');

  grid.innerHTML = ''; //resseta il contenuto della griglia

  // Ciclo for
  for (let i = 1; i <= numeroElementi; i++) {
    const element = document.createElement('div');
    element.classList.add('grid-element');
    grid.append(element);
    element.style.width = `calc(100% / ${numeroColonne})`;

    numero = [i];
    element.append(i);
  }
});
