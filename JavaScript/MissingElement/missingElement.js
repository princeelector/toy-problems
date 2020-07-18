const solution = A => {
    let maximumNumber = A.length + 1;
    let totalSum = (maximumNumber * (maximumNumber + 1)) / 2;
    let partialSum = 0;

    A.forEach((el, i) => partialSum += A[i]);

    return totalSum - partialSum;
};