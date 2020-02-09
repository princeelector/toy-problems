/* Take every 2nd char from the string, then the other chars, that are not every
2nd char, and concat them as new String. Do this n times! */

// Examples:
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

const encrypt = (text, n) => {
    if (text === null || text === '' || n <= 0) {
        return text;
    }

    for (let i = 0; i < n; i++) {
        let splittedText = text.split('');
        let everySecondChar = [];
        let remainingChars = [];

        splittedText.forEach((char, index) => {
            if (index % 2 !== 0) {
                everySecondChar.push(char);
            } else {
                remainingChars.push(char);
            }
        });

        let newSplittedText = everySecondChar.concat(remainingChars);
        let finalText = newSplittedText.join('');
        text = finalText;
    }
    console.log(text);
    return text;
};

const decrypt = (encryptedText, n) => {
    if (encryptedText === null || encryptedText === '' || n <= 0) {
        return encryptedText;
    }
    let middleIndex = Math.floor(encryptedText.length / 2);

    for (let i = 0; i < n; i++) {
        let splittedText = encryptedText.split('');
        // console.log(splittedText);
        let everySecondChar = splittedText.slice(0, middleIndex);
        // console.log(everySecondChar);
        let remainingChars = splittedText.slice(middleIndex);
        // console.log(remainingChars);
        let indexPosition = 1;

        for (let j = 0; j < everySecondChar.length; j++) {
            remainingChars.splice(indexPosition, 0, everySecondChar[j]);
            indexPosition += 2;
            // console.log(remainingChars, indexPosition);
        }
        // console.log(remainingChars);
        let finalText = remainingChars.join('');
        encryptedText = finalText;
    }
    console.log(encryptedText);
    return encryptedText;
};

encrypt();
decrypt();
