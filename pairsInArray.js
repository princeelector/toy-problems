const solution = A => {
    let unpairedInt = null;
    let newArr = [];
    //console.log(A);

    A.forEach(element => {
        //console.log(element);
        let elementIndex = A.indexOf(element);
        //console.log(elementIndex);
        if (newArr.includes(element) === false) {
            A.splice(elementIndex, 1);
            //console.log(cutElement);
            newArr.push(element);
        }
        //console.log(`New array ${newArr}`);
    });

    //console.log(`Old array ${A}`);
    //console.log(newArr);

    for (let i = 0; i < newArr.length; i++) {
        if (A.includes(newArr[i]) === false) {
            unpairedInt = newArr[i];
        }
    }

    //console.log(unpairedInt);
    return unpairedInt;
}

// Note to next Version build: not efficient in tests with large arrays