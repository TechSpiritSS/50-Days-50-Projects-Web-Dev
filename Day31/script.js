const resultEL = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEL = document.getElementById("numbers");
const symbolEL = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("clipboard");

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEL.checked;
  const hasSymbol = symbolEL.checked;

  //console.log(length, hasLower, hasUpper, hasNumber, hasSymbol);

  resultEL.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );

  copyBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = resultEL.innerText;

    if (!password) {
      return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  });
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomSymbol,
  symbol: getRandomNumber,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+{}[]|:";<>?,./';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
