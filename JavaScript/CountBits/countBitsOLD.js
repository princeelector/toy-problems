const countBits = int => {
    const originalInteger = int;

    const binarize = intToBinary => {
        // Function to binarize input. You can't use int.toString(2)
        let intInBinary = '';

        while (intToBinary >= 1) {
            intToBinary = intToBinary / 2;

            if (!Number.isInteger(intToBinary)) {
                intInBinary += '1';
                intToBinary = Math.floor(intToBinary);
            } else {
                intInBinary += '0';
            }
        }
        const binaryStringReversed = intInBinary.split('');
        binaryStringReversed.reverse();
        const binaryString = binaryStringReversed.join('');

        return binaryString;
    };
    let binarizedInt = '';

    if (originalInteger >= 0) {
        binarizedInt += binarize(originalInteger);
    }
    console.log(
        `Binary representation of ${originalInteger} is ${binarizedInt}`
    );

    const binaryArray = binarizedInt.split('');
    let bitCounter = 0;

    binaryArray.forEach(string => {
        if (string === '1') {
            bitCounter += 1;
        }
    });
    console.log(`Number of 1's in your binary number is ${bitCounter}`);
    return bitCounter;
};

countBits();
