const firstNonRepeatingLetter = s => {
    console.log(s);
    const everySingleChar = s.split('');
    let firstNonRepeatingChar = everySingleChar.find((char, charIndex) => {
        let charOccurrences = 0;
        everySingleChar.forEach(char2 => {
            if (char2 === char) charOccurrences++;
        });
        if (
            s.toLowerCase().lastIndexOf(char.toLowerCase()) === charIndex &&
            charOccurrences === 1
        )
            return char;
    });
    if (firstNonRepeatingChar === undefined) firstNonRepeatingChar = '';
    return firstNonRepeatingChar;
};
