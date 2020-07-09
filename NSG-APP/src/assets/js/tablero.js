function alerta(){
  let pastGuesses = [];
  let numberOfHits = 0;
  let numberOfMisses = 0;
  let loggedMessageTimes = [];

  class GameBoard {
    constructor(cellNumber) {
      this.cellNumber = [];

      this.checkAvailableSpace = function (
        isVertical,
        startNumber,
        shipLength
      ) {
        const freeSpaces = [];
        let startCell = startNumber;
        let endCell = 0;
        let increase = 1;

        isVertical
          ? ((endCell = startNumber + 91), (increase = 10))
          : ((startCell = startNumber * 10), (endCell = startCell + 10));

        for (let i = startCell; i < endCell; i += increase) {
          if (typeof this[i] === "undefined") {
            freeSpaces.push(i);
          } else {
            freeSpaces.push("");
          }
        }
        return findPossiblePoints(freeSpaces, shipLength);
      };

      this.placeShip = function (ship) {
        const isVertical = randomNumber(1);
        const increase = isVertical * 9 + 1;
        const endCell = ship.health * increase;
        let keepGoing = true;

        while (keepGoing) {
          let startIndex = randomNumber(9);
          var possibilities = this.checkAvailableSpace(
            isVertical,
            startIndex,
            ship.health
          );
          possibilities.length == 0
            ? (keepGoing = true)
            : (keepGoing = false);
        }
        const shipStart = chooseRandomFromArray(possibilities);
        console.log(possibilities);
        console.log("placing " + ship.name + " at " + shipStart);

        for (let i = 0; i < endCell; i += increase) {
          gameBoard[shipStart + i] = ship;
        }
      };

      this.checkIfShotHitsAnything = (newGuess) => {
        this[parseInt(newGuess)]
          ? (hit(newGuess), this[newGuess].resultOfGettingHit())
          : miss(newGuess); // calls ship.resultOfGettingHit() or tells "missed"
      };
    } // constructor
  } // class GameBoard

  class Ship {
    constructor(name, shipLength) {
      Ship.numberOfShips++;
      this.name = name;
      this.health = shipLength;

      this.resultOfGettingHit = function () {
        this.health--;

        this.health > 0
          ? tellPlayer("Coronavirus resistente")
          : (tellPlayer("Encontraste el " + this.name),
            Ship.numberOfShips--,
            Ship.numberOfShips > 0
              ? tellPlayer(
                  "Estas cerca de encontrar la vacuna  " + this.name + "!",
                  4000
                )
              : won()); //: tellPlayer("You won!")) ;
      };
    }
  }

  function findPossiblePoints(rowOrColumn, shipLength) {
    let counter = 0;
    const maxLengthAtEachPoint = inReverseOrder(
      inReverseOrder(rowOrColumn).map((value) =>
        value === "" ? (counter = 0) : (counter += 1)
      )
    );

    const collectAllPossiblePlaces = maxLengthAtEachPoint.reduce(function (
      total,
      value,
      index
    ) {
      if (value >= shipLength) {
        total.push(rowOrColumn[index]);
      }
      return total;
    },
    []);

    return collectAllPossiblePlaces;
  }

  function fire() {
    const typedInGuess = document
      .getElementById("user-input")
      .value.toLowerCase();
    const guessInCorrectFormat = typedInGuess.match(/[a-j]{1}-?[0-9]{1}$/i);
    document.getElementById("user-input").value = "";

    if (guessInCorrectFormat === null) {
      tellPlayer("Ingresa una coordenada validad, A0-J9");
    } else {
      let firstLetterToNumber = guessInCorrectFormat[0].charCodeAt(0) - 97;
      let guessParsedToCellId = parseInt(
        firstLetterToNumber + guessInCorrectFormat[0].slice(-1)
      );

      if (pastGuesses.includes(guessParsedToCellId)) {
        tellPlayer("Ya has atacado esa cuadrícula, adivina de nuevo.");
      } else {
        pastGuesses.push(guessParsedToCellId);
        gameBoard.checkIfShotHitsAnything(guessParsedToCellId);
      }
    }
  }

  function hit(location) {
    document.getElementById(location).className = "hit";
    numberOfHits++;
    numberOfHits % 3 === 0
      ? tellPlayer("Has encontrado otra vacuna")
      : numberOfHits % 2 === 0
      ? tellPlayer("Vacuna")
      : tellPlayer("Estas cerca de la vacuna");
  }

  function miss(location) {
    document.getElementById(location).className = "miss";
    numberOfMisses++;
    numberOfMisses % 3 === 0
      ? tellPlayer("Sigues infectado, Busca la vacuna")
      : numberOfMisses % 2 === 0
      ? tellPlayer("¡¡ALERTA!! Virus esparcido")
      : tellPlayer("Fallaste");
  }

  function won() {
    document
      .getElementById("fire-button")
      .removeEventListener("click", fire);
    document.getElementById("user-input").onkeypress = (event) =>
      event.keyCode === 13 ? false : false;
    document.getElementById("fire-button").id = "fire-button-disarmed";

    tellPlayer("Sobreviviste en " + pastGuesses.length + " intentos.", 4000);
    tellPlayer(
      "Making your accuracy: " +
        Math.round((numberOfHits / pastGuesses.length) * 100) +
        " percent.",
      7000
    );
    tellPlayer("Game Over...", 12000);
    tellPlayer("Ahora apaga tu computadora y ve a buscar una vida.", 20000);
  }
  function tellPlayer(messageToPlayer, delay) {
    let now = new Date();
    let timeSinceLastMessage =
      now - loggedMessageTimes[loggedMessageTimes.length - 1];
    let timeOut = delay || 2000 - timeSinceLastMessage; // manual || default : if <= 0 doesn't delay
    loggedMessageTimes.push(now);

    setTimeout(function () {
      document.getElementById("message").innerHTML = messageToPlayer;
    }, timeOut);
  }

  const inReverseOrder = (array) => array.slice().reverse();

  const randomNumber = (upperLimit) =>
    Math.floor(Math.random() * (upperLimit + 1));

  const chooseRandomFromArray = (array) =>
    array[randomNumber(array.length - 1)];

  const gameBoard = new GameBoard(100);

  Ship.numberOfShips = 0;
  
  let fragatawil = new Ship("Fragata Will", 4);
  let cbvictoria = new Ship("C.B Victoria", 2);
  let pwromanian = new Ship("PW Romanian", 3);
  let sscorvetta = new Ship("SS Corvetta", 3);
  let destroyer = new Ship("Destroyer", 2);

  let shipList = [fragatawil, cbvictoria, pwromanian, sscorvetta, destroyer];

  for (ship of shipList) {
    gameBoard.placeShip(ship);
  }

  document.getElementById("fire-button").addEventListener("click", fire);
  document.getElementById("user-input").onkeypress = fireOnEnterKey;

  function fireOnEnterKey(event) {
    if (event.keyCode === 13) {
      fire();
      return false;
    }
  }
}

function alerta1(){

}


function alerta2(){

}


function alerta3(){
  let pastGuesses = [];
  let numberOfHits = 0;
  let numberOfMisses = 0;
  let loggedMessageTimes = [];

  class GameBoard {
    constructor(cellNumber) {
      this.cellNumber = [];

      this.checkAvailableSpace = function (
        isVertical,
        startNumber,
        shipLength
      ) {
        const freeSpaces = [];
        let startCell = startNumber;
        let endCell = 0;
        let increase = 1;

        isVertical
          ? ((endCell = startNumber + 91), (increase = 10))
          : ((startCell = startNumber * 10), (endCell = startCell + 10));

        for (let i = startCell; i < endCell; i += increase) {
          if (typeof this[i] === "undefined") {
            freeSpaces.push(i);
          } else {
            freeSpaces.push("");
          }
        }
        return findPossiblePoints(freeSpaces, shipLength);
      };

      this.placeShip = function (ship) {
        const isVertical = randomNumber(1);
        const increase = isVertical * 9 + 1;
        const endCell = ship.health * increase;
        let keepGoing = true;

        while (keepGoing) {
          let startIndex = randomNumber(9);
          var possibilities = this.checkAvailableSpace(
            isVertical,
            startIndex,
            ship.health
          );
          possibilities.length == 0
            ? (keepGoing = true)
            : (keepGoing = false);
        }
        const shipStart = chooseRandomFromArray(possibilities);
        console.log(possibilities);
        console.log("placing " + ship.name + " at " + shipStart);

        for (let i = 0; i < endCell; i += increase) {
          gameBoard[shipStart + i] = ship;
        }
      };

      this.checkIfShotHitsAnything = (newGuess) => {
        this[parseInt(newGuess)]
          ? (hit(newGuess), this[newGuess].resultOfGettingHit())
          : miss(newGuess); // calls ship.resultOfGettingHit() or tells "missed"
      };
    } // constructor
  } // class GameBoard

  class Ship {
    constructor(name, shipLength) {
      Ship.numberOfShips++;
      this.name = name;
      this.health = shipLength;

      this.resultOfGettingHit = function () {
        this.health--;

        this.health > 0
          ? tellPlayer("Coronavirus resistente")
          : (tellPlayer("Encontraste el " + this.name),
            Ship.numberOfShips--,
            Ship.numberOfShips > 0
              ? tellPlayer(
                  "Estas cerca de encontrar la vacuna  " + this.name + "!",
                  4000
                )
              : won()); //: tellPlayer("You won!")) ;
      };
    }
  }

  function findPossiblePoints(rowOrColumn, shipLength) {
    let counter = 0;
    const maxLengthAtEachPoint = inReverseOrder(
      inReverseOrder(rowOrColumn).map((value) =>
        value === "" ? (counter = 0) : (counter += 1)
      )
    );

    const collectAllPossiblePlaces = maxLengthAtEachPoint.reduce(function (
      total,
      value,
      index
    ) {
      if (value >= shipLength) {
        total.push(rowOrColumn[index]);
      }
      return total;
    },
    []);

    return collectAllPossiblePlaces;
  }

  function fire() {
    const typedInGuess = document
      .getElementById("user-input")
      .value.toLowerCase();
    const guessInCorrectFormat = typedInGuess.match(/[a-j]{1}-?[0-9]{1}$/i);
    document.getElementById("user-input").value = "";

    if (guessInCorrectFormat === null) {
      tellPlayer("Ingresa una coordenada validad, A0-J9");
    } else {
      let firstLetterToNumber = guessInCorrectFormat[0].charCodeAt(0) - 97;
      let guessParsedToCellId = parseInt(
        firstLetterToNumber + guessInCorrectFormat[0].slice(-1)
      );

      if (pastGuesses.includes(guessParsedToCellId)) {
        tellPlayer("Ya has atacado esa cuadrícula, adivina de nuevo.");
      } else {
        pastGuesses.push(guessParsedToCellId);
        gameBoard.checkIfShotHitsAnything(guessParsedToCellId);
      }
    }
  }

  function hit(location) {
    document.getElementById(location).className = "hit";
    numberOfHits++;
    numberOfHits % 3 === 0
      ? tellPlayer("Has encontrado otra vacuna")
      : numberOfHits % 2 === 0
      ? tellPlayer("Vacuna")
      : tellPlayer("Estas cerca de la vacuna");
  }

  function miss(location) {
    document.getElementById(location).className = "miss";
    numberOfMisses++;
    numberOfMisses % 3 === 0
      ? tellPlayer("Sigues infectado, Busca la vacuna")
      : numberOfMisses % 2 === 0
      ? tellPlayer("¡¡ALERTA!! Virus esparcido")
      : tellPlayer("Fallaste");
  }

  function won() {
    document
      .getElementById("fire-button")
      .removeEventListener("click", fire);
    document.getElementById("user-input").onkeypress = (event) =>
      event.keyCode === 13 ? false : false;
    document.getElementById("fire-button").id = "fire-button-disarmed";

    tellPlayer("Sobreviviste en " + pastGuesses.length + " intentos.", 4000);
    tellPlayer(
      "Making your accuracy: " +
        Math.round((numberOfHits / pastGuesses.length) * 100) +
        " percent.",
      7000
    );
    tellPlayer("Game Over...", 12000);
    tellPlayer("Ahora apaga tu computadora y ve a buscar una vida.", 20000);
  }
  function tellPlayer(messageToPlayer, delay) {
    let now = new Date();
    let timeSinceLastMessage =
      now - loggedMessageTimes[loggedMessageTimes.length - 1];
    let timeOut = delay || 2000 - timeSinceLastMessage; // manual || default : if <= 0 doesn't delay
    loggedMessageTimes.push(now);

    setTimeout(function () {
      document.getElementById("message").innerHTML = messageToPlayer;
    }, timeOut);
  }

  const inReverseOrder = (array) => array.slice().reverse();

  const randomNumber = (upperLimit) =>
    Math.floor(Math.random() * (upperLimit + 1));

  const chooseRandomFromArray = (array) =>
    array[randomNumber(array.length - 1)];

  const gameBoard = new GameBoard(100);

  Ship.numberOfShips = 0;
  let jdnavy = new Ship("JD Navy", 6);
  let fragatawil = new Ship("Fragata Will", 5);
  let cbvictoria = new Ship("C.B Victoria", 4);
  let pwromanian = new Ship("PW Romanian", 3);
  let sscorvetta = new Ship("SS Corvetta", 3);
  let destroyer = new Ship("Destroyer", 2);

  let shipList = [jdnavy, fragatawil, cbvictoria, pwromanian, sscorvetta, destroyer];

  for (ship of shipList) {
    gameBoard.placeShip(ship);
  }

  document.getElementById("fire-button").addEventListener("click", fire);
  document.getElementById("user-input").onkeypress = fireOnEnterKey;

  function fireOnEnterKey(event) {
    if (event.keyCode === 13) {
      fire();
      return false;
    }
  }
}

function alerta4(){
  let pastGuesses = [];
      let numberOfHits = 0;
      let numberOfMisses = 0;
      let loggedMessageTimes = [];

      class GameBoard {
        constructor(cellNumber) {
          this.cellNumber = [];

          this.checkAvailableSpace = function (
            isVertical,
            startNumber,
            shipLength
          ) {
            const freeSpaces = [];
            let startCell = startNumber;
            let endCell = 0;
            let increase = 1;

            isVertical
              ? ((endCell = startNumber + 91), (increase = 10))
              : ((startCell = startNumber * 10), (endCell = startCell + 10));

            for (let i = startCell; i < endCell; i += increase) {
              if (typeof this[i] === "undefined") {
                freeSpaces.push(i);
              } else {
                freeSpaces.push("");
              }
            }
            return findPossiblePoints(freeSpaces, shipLength);
          };

          this.placeShip = function (ship) {
            const isVertical = randomNumber(1);
            const increase = isVertical * 9 + 1;
            const endCell = ship.health * increase;
            let keepGoing = true;

            while (keepGoing) {
              let startIndex = randomNumber(9);
              var possibilities = this.checkAvailableSpace(
                isVertical,
                startIndex,
                ship.health
              );
              possibilities.length == 0
                ? (keepGoing = true)
                : (keepGoing = false);
            }
            const shipStart = chooseRandomFromArray(possibilities);
            console.log(possibilities);
            console.log("placing " + ship.name + " at " + shipStart);

            for (let i = 0; i < endCell; i += increase) {
              gameBoard[shipStart + i] = ship;
            }
          };

          this.checkIfShotHitsAnything = (newGuess) => {
            this[parseInt(newGuess)]
              ? (hit(newGuess), this[newGuess].resultOfGettingHit())
              : miss(newGuess); // calls ship.resultOfGettingHit() or tells "missed"
          };
        } // constructor
      } // class GameBoard

      class Ship {
        constructor(name, shipLength) {
          Ship.numberOfShips++;
          this.name = name;
          this.health = shipLength;

          this.resultOfGettingHit = function () {
            this.health--;

            this.health > 0
              ? tellPlayer("Coronavirus resistente")
              : (tellPlayer("Encontraste el " + this.name),
                Ship.numberOfShips--,
                Ship.numberOfShips > 0
                  ? tellPlayer(
                      "Estas cerca de encontrar la vacuna  " + this.name + "!",
                      4000
                    )
                  : won()); //: tellPlayer("You won!")) ;
          };
        }
      }

      function findPossiblePoints(rowOrColumn, shipLength) {
        let counter = 0;
        const maxLengthAtEachPoint = inReverseOrder(
          inReverseOrder(rowOrColumn).map((value) =>
            value === "" ? (counter = 0) : (counter += 1)
          )
        );

        const collectAllPossiblePlaces = maxLengthAtEachPoint.reduce(function (
          total,
          value,
          index
        ) {
          if (value >= shipLength) {
            total.push(rowOrColumn[index]);
          }
          return total;
        },
        []);

        return collectAllPossiblePlaces;
      }

      function fire() {
        const typedInGuess = document
          .getElementById("user-input")
          .value.toLowerCase();
        const guessInCorrectFormat = typedInGuess.match(/[a-j]{1}-?[0-9]{1}$/i);
        document.getElementById("user-input").value = "";

        if (guessInCorrectFormat === null) {
          tellPlayer("Ingresa una coordenada validad, A0-J9");
        } else {
          let firstLetterToNumber = guessInCorrectFormat[0].charCodeAt(0) - 97;
          let guessParsedToCellId = parseInt(
            firstLetterToNumber + guessInCorrectFormat[0].slice(-1)
          );

          if (pastGuesses.includes(guessParsedToCellId)) {
            tellPlayer("Ya has atacado esa cuadrícula, adivina de nuevo.");
          } else {
            pastGuesses.push(guessParsedToCellId);
            gameBoard.checkIfShotHitsAnything(guessParsedToCellId);
          }
        }
      }

      function hit(location) {
        document.getElementById(location).className = "hit";
        numberOfHits++;
        numberOfHits % 3 === 0
          ? tellPlayer("Has encontrado otra vacuna")
          : numberOfHits % 2 === 0
          ? tellPlayer("Vacuna")
          : tellPlayer("Estas cerca de la vacuna");
      }

      function miss(location) {
        document.getElementById(location).className = "miss";
        numberOfMisses++;
        numberOfMisses % 3 === 0
          ? tellPlayer("Sigues infectado, Busca la vacuna")
          : numberOfMisses % 2 === 0
          ? tellPlayer("¡¡ALERTA!! Virus esparcido")
          : tellPlayer("Fallaste");
      }

      function won() {
        document
          .getElementById("fire-button")
          .removeEventListener("click", fire);
        document.getElementById("user-input").onkeypress = (event) =>
          event.keyCode === 13 ? false : false;
        document.getElementById("fire-button").id = "fire-button-disarmed";

        tellPlayer("Sobreviviste en " + pastGuesses.length + " intentos.", 4000);
        tellPlayer(
          "Making your accuracy: " +
            Math.round((numberOfHits / pastGuesses.length) * 100) +
            " percent.",
          7000
        );
        tellPlayer("Game Over...", 12000);
        tellPlayer("Ahora apaga tu computadora y ve a buscar una vida.", 20000);
      }
      function tellPlayer(messageToPlayer, delay) {
        let now = new Date();
        let timeSinceLastMessage =
          now - loggedMessageTimes[loggedMessageTimes.length - 1];
        let timeOut = delay || 2000 - timeSinceLastMessage; // manual || default : if <= 0 doesn't delay
        loggedMessageTimes.push(now);

        setTimeout(function () {
          document.getElementById("message").innerHTML = messageToPlayer;
        }, timeOut);
      }

      const inReverseOrder = (array) => array.slice().reverse();

      const randomNumber = (upperLimit) =>
        Math.floor(Math.random() * (upperLimit + 1));

      const chooseRandomFromArray = (array) =>
        array[randomNumber(array.length - 1)];

      const gameBoard = new GameBoard(100);

      Ship.numberOfShips = 0;
      
      let fragatawil = new Ship("Fragata Will", 5);
      let cbvictoria = new Ship("C.B Victoria", 4);
      let pwromanian = new Ship("PW Romanian", 3);
      let sscorvetta = new Ship("SS Corvetta", 3);
      let destroyer = new Ship("Destroyer", 2);

      let shipList = [fragatawil, cbvictoria, pwromanian, sscorvetta, destroyer];

      for (ship of shipList) {
        gameBoard.placeShip(ship);
      }

      document.getElementById("fire-button").addEventListener("click", fire);
      document.getElementById("user-input").onkeypress = fireOnEnterKey;

      function fireOnEnterKey(event) {
        if (event.keyCode === 13) {
          fire();
          return false;
        }
      }
}