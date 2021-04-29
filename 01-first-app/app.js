const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const ulElement = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputElement.value;
  const liElement = document.createElement('li');
  liElement.textContent = enteredValue;
  ulElement.appendChild(liElement);
  inputElement.value = '';
}

buttonElement.addEventListener('click', addGoal)