/* The new "Avengers" movie has just been released! There are a lot of people at
the cinema box office standing in a huge line. Each of them has a single 100, 50
or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Jacob is currently working as a clerk. He wants to sell a ticket to every single
person in this line.

Can Jacob sell a ticket to every person and give change if he initially has no
money and sells the tickets strictly in the order people queue? */

const tickets = peopleInLine => {
    let money = [];
    if (peopleInLine[0] === 25) {
        console.log(`People have bills as follows: ${peopleInLine}`);
        money.push(25);
        console.log('One ticket sold!');
        const give25asChange = () => {
            let indexOf25 = money.indexOf(25);
            if (indexOf25 > -1) {
            money.splice(indexOf25, 1);
            }
        }
        const give50asChange = () => {
            let indexOf50 = money.indexOf(50);
            if (indexOf50 > -1) {
            money.splice(indexOf50, 1);
            }
        }
        const hasThree25Bills = arr => {
            arr.sort((a, b) => a - b);
            console.log(`Person has 100 bill. Clerk's bills: ${arr}.`);
            if (arr[2] === 25) {
            return true;
            }
            return false;
        }
        console.log(`Clerk's bills: ${money}`);
        for (let i = 1; i < peopleInLine.length; i++) {
            if (peopleInLine[i] === 25) {
            money.push(peopleInLine[i]);
            console.log(`Sold tickets to ${i} people. Clerk's bills: ${money}`);
            } else if (peopleInLine[i] === 50 && money.includes(25)) {
                give25asChange();
                money.push(peopleInLine[i]);
                console.log(`Sold tickets to ${i} people. Clerk's bills: ${money}`);
            } else if (peopleInLine[i] === 100 && money.includes(25) && money.includes(50)) {
                give25asChange();
                give50asChange();
                money.push(peopleInLine[i]);
                console.log(`Sold tickets to ${i} people. Clerk's bills: ${money}`);
            } else if (peopleInLine[i] === 100 && money.includes(25) && hasThree25Bills(money)) {
                give25asChange();
                give25asChange();
                give25asChange();
                money.push(peopleInLine[i]);
                console.log(`Sold tickets to ${i} people. Clerk's bills: ${money}`);
            } else {
                console.log('Could not give change');
                return 'NO';
            }
        }
        console.log('Sold ticket to every person');
        return 'YES';
    }
    console.log('Can not begin to sell');
    return 'NO';
}

// Test
tickets([25,25,25,100,25,50,25,100,25,25,50,100,25,50,25,100]);
tickets([25,25,50,100,25,25,50,100,25,50,25,100,25,25,50,100,25,100,100]);