const numbers = [];
let countRepeat = 0;

const generateRandomNumbers = (arr) => {
  let arraAux = [];
  for (let i = 0; i < 3; i++) {
    const randomNumber = parseInt(Math.random() * 3 + 1);
    arraAux.push(randomNumber);
  }
  const resultTest = testNumberstoOpenDoor(arraAux);
  arr.push(arraAux, resultTest);
  return arr;
};

const testNumberstoOpenDoor = (numberToTest) => {
  const isIqual =
    numberToTest[0] === numberToTest[1] && numberToTest[0] === numberToTest[2];
  let message = "";

  if (!isIqual) {
    return (message += "Tente de novo");
  }
  return (message += "Porta 1: aberta");
};

let i = 0;
while (i <= 10) {
  i++;
  console.log(generateRandomNumbers(numbers));
}

countRepeat = generateRandomNumbers(numbers).filter(
  (item) => item === "Porta 1: aberta"
).length;

const compareGames = (itemToCompare) => {
  const last = itemToCompare[itemToCompare.length - 2];
  const current = itemToCompare[itemToCompare.length - 4];
  console.log(`Último jogo [${last}]. Jogo atual [${current}]`);
};

compareGames(numbers);

const message =
  countRepeat > 0 ? `Porta (${countRepeat}) : aberta` : "Tente de novo";

console.log(message);
