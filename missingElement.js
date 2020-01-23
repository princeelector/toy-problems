/* An array A consisting of N different integers is given. The array contains
integers in the range [1..(N + 1)], which means that exactly one element is missing.
Write a function, that, given an array A, returns the value of the missing element.
For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element. */

const solution = A => {
    let maximumNumber = A.length + 1;
    let totalSum = (maximumNumber*(maximumNumber + 1))/2;
    let partialSum = 0;
    for(let i=0; i<A.length; i++) {
        partialSum += A[i];
    }
    return totalSum - partialSum;
}

