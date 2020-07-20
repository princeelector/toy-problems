const tickets = peopleInLine => {
  if (peopleInLine[0] !== 25 || (peopleInLine[1] === 100 || peopleInLine[2] === 100)) return 'NO';

  let clerksBills = [];
  let clerkCanSellTicketsToEveryone = 'YES';

  peopleInLine.forEach(person => {
    if (person === 50 && clerksBills.includes(25)) clerksBills.splice(clerksBills.indexOf(25), 1);
    else if (person === 100 && (clerksBills.includes(25) && clerksBills.includes(50))) {
      clerksBills.splice(clerksBills.indexOf(25), 1); clerksBills.splice(clerksBills.indexOf(50), 1);
    } else if (person === 100 && clerksBills.filter(bill => bill === 25).length >= 3) {
      clerksBills.sort((a, b) => a - b).splice(0, 3);
    } else if (person !== 25) clerkCanSellTicketsToEveryone = 'NO';
    clerksBills.push(person);
  });

  return clerkCanSellTicketsToEveryone;
};

tickets([25, 25, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100]);