const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const getRandomSymbol = () => String.fromCharCode(Math.floor(Math.random() * 14) + 33);

const randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

generateElement.addEventListener('click', () => {
  const length = +lengthElement.value;
  const hasUpper = uppercaseElement.checked;
  const hasLower = lowercaseElement.checked;
  const hasNumbers = numbersElement.checked;
  const hasSymbols = symbolsElement.checked;

  resultElement.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
});

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = upper + lower + number + symbol;

  const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

clipboardElement.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultElement.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});
