const transform = roman => {
  const romanNumbers = [{I: 1}, {V: 5}, {X: 10}, {L: 50}, {C: 100}, {D: 500}, {M: 1000}];

  const romanToArabic = roman.split('').map(romanChar => {
    const thisValueCanBeAssigned = romanNumbers.find(romanCharObj => {
      if (Object.keys(romanCharObj).includes(romanChar)) return romanCharObj;
    });
    if (thisValueCanBeAssigned) romanChar = Object.values(thisValueCanBeAssigned)[0];
    return romanChar;
  });

  const arabicValue = romanToArabic.reduce((acc, curr, index, array) => {
    if (curr < array[index+1]) return acc;
    if (curr > array[index-1]) return acc + (curr - array[index-1]);
    return acc + curr;
  }, 0);

  return arabicValue;
}
