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

  const elMatch = el => Object.keys(els).find(key => key === el);
  const magMatch = mag => Object.keys(mags).find(key => key === mag);

  if (!!elMatch(string)) return els[elMatch(string)];
  if (!!magMatch(string)) return mags[magMatch(string)];

  const regex = /(hundred|thousand|million)/g;

  const arrOfEls = string.split(' ')
  .map(el => !!el.match(regex) ? mags[magMatch(el)] : el)
  .filter(el => el !== 'and');

  let numbers = [];

  arrOfEls.forEach((el, i, arr) => {
    const elWithDash = typeof el === 'string' ? (el.includes('-') ? el.split('-') : false) : false;
    const elWithDashMatch = elMatch(elWithDash[0]) && elMatch(elWithDash[1]);
    const numFromElWithDash = els[elMatch(elWithDash[0])]+els[elMatch(elWithDash[1])];

    if (elMatch(el)) {
      const xHundxThouCase = arr[arr.length-1] === 1000 && arr[i-1] === 100;
      xHundxThouCase ? numbers[numbers.length-1] += els[elMatch(el)] : numbers.push(els[elMatch(el)]);
    }
    else if (elWithDashMatch && !numbers.length) numbers.push(numFromElWithDash);
    else if (elWithDashMatch && numbers.length) numbers[numbers.length-1] += numFromElWithDash;
    else numbers[numbers.length-1] *= el;
  });

  return numbers.reduce((a, b) => a + b);
}