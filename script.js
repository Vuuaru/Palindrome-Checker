const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkResult() {
  const str = textInput.value;
  const regex = /[\W_\s_]/g;

  if (str.replace(regex, '') === "") {
    alert("Please input a value");
    return;
  }

  const lowerRegStr = str.toLowerCase().replace(regex, '');
  const reversedStr = lowerRegStr.split('').reverse().join('');

  displayResult(lowerRegStr, reversedStr);
}

function displayResult(str, revStr) {
  if (str === revStr) {
    result.innerHTML = `${textInput.value} is a palindrome`;
    textInput.value = "";
  } else {
    result.innerHTML = `${textInput.value} is not a palindrome`;
    textInput.value = "";
  }
}

checkButton.addEventListener("onclick", checkResult);
