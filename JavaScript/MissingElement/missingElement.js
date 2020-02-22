const solution = A => {
    let maximumNumber = A.length + 1;
    let totalSum = (maximumNumber * (maximumNumber + 1)) / 2;
    let partialSum = 0;
    for (let i = 0; i < A.length; i++) {
        partialSum += A[i];
    }
    return totalSum - partialSum;
};
