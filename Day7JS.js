// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; // gave us an array
console.log(friends);


const y = new Array(1991, 1984, 2008, 2020);


console.log(friends[0]);  // gives me the name in the first location
console.log(friends[2]);  // gives me the name in the third location


console.log(friends.length); // print the number of how long
console.log(friends[friends.length - 1]);  // gives me the last name in the array if i did not know the length


friends[2] = 'Jay';  // made the third name in the list now reflect jay
console.log(friends);  // prints the array
// friends = ['Bob', 'Alice']


const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// could have just said  - ages = age1,age2,age3 ???????
console.log(ages);




///////////////////////////////////////
// Basic Array Operations (Methods)
const Friends = ['Michael', 'Steven', 'Peter'];  // created our array


// Add elements
const newLength = Friends.push('Jay');  // puts jay at the end of the array
console.log(Friends);
console.log(newLength);   // gives me the new number for the length


Friends.unshift('John');  // puts john at the front of the array list
console.log(Friends);


// Remove elements
Friends.pop(); // took out the last one
const popped = Friends.pop();  // asked it to take the last one out again
console.log(popped);  // took him out and showed me who it was
console.log(Friends); // printed the new list


Friends.shift(); // took out the person in the first spot
console.log(Friends);  // printed out new list


console.log(Friends.indexOf('Steven'));   // their position in the array
console.log(Friends.indexOf('Bob'));   // -1 was given because it is not in the array


Friends.push(23);  // added it to the array
console.log(Friends.includes('Steven'));  // boolean which gives me true
console.log(Friends.includes('Bob'));  // boolean which gives me false
console.log(Friends.includes(23));  // boolean which gives me true


if (Friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}




const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;  // ask tomorrow about the (?)  and (:)


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


console.log(bills, tips, totals);
