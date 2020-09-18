// Less validation
const parseInt = string => {
  const els = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
  };

  const mags = {
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
  };

  const regex = /(hundred|thousand|million)/g;

  const arrOfEls = string.split('-').join(' ').split(' ').filter(el => el !== 'and')
  .map(el => !!el.match(regex) ? mags[el] : els[el]);

  let finalNum = 0;

  arrOfEls.forEach((el, i, arr) => {
    const xThouxHundCase = el.toString().length === 1 && arr[i-1] === 1000 && i !== arr.length-1;
    if (xThouxHundCase) finalNum = finalNum / 100;

    Object.values(mags).includes(el) ? finalNum *= el : finalNum += el;
  });

  return finalNum;
}