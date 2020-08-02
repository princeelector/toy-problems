const encrypt = (text, n) => {
  if (!text || n <= 0) return text;

  let textToReturn = text;

  while (n > 0) {
    let everySecondChar = [];
    let otherChars = [];

    textToReturn.split('').forEach((char, i) => {
      i % 2 !== 0 ? everySecondChar.push(char) : otherChars.push(char);
    });
    textToReturn = everySecondChar.concat(otherChars).join('');
    n--;
  }
  return textToReturn;
}

const decrypt = (encryptedText, n) => {
  if (!encryptedText || n <= 0) return encryptedText;

  let textToReturn = encryptedText;
  let middleIndex = Math.floor(encryptedText.length / 2);

  while (n > 0) {
    let firstHalf = textToReturn.split('').slice(0, middleIndex);
    let secondHalf = textToReturn.split('').slice(middleIndex);

    textToReturn = textToReturn.split('').map((char, i) => {
      if (i % 2 === 0) return secondHalf.shift();
      return firstHalf.shift();
    }).join('');
    n--;
  }
  return textToReturn;
}