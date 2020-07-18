const solution = array => {
    let unpairedInt = null;
    let newArr = [];

    array.forEach(element => {
        let elementIndex = array.indexOf(element);
        if (!newArr.includes(element)) array.splice(elementIndex, 1); newArr.push(element);
    });

    newArr.forEach((element, i) => {
        if (!array.includes(newArr[i])) unpairedInt = newArr[i];
    });

    console.log(unpairedInt); return unpairedInt;
};

exampleArr = [123132, 88, 873284, 0, 7437, 0, 123132, 7437, 88];
exampleArr2 = [123132, 555555, 88, 44, 873284, 19273, 0, 7437, 0, 99999999, 123132, 7437, 88, 19273, 555555, 99999999, 44];

solution(exampleArr2);
