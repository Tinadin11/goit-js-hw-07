function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const number = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  divBoxes.innerHTML = '';
  let boxesItems = createBoxes(number.value);
  divBoxes.append(... boxesItems);
  number.value = '';  
});


function createBoxes(amount) {
  if (amount <= 100 && amount >= 1) {
    let inputArr = [];
    let boxSize = 30;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${boxSize += 10}px`;
      div.style.height = `${boxSize += 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      inputArr.push(div);
    }
    return inputArr;
  }
}

const destroyBoxes = () => divBoxes.innerHTML = '';
buttonDestroy.addEventListener('click', destroyBoxes);