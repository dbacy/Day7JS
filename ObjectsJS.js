// Introduction to Objects
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]
////// gave us an array

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
//// not to sure what the dots are doing


// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);  // prints it all out even the brackets


console.log(jonas.lastName);  // prints the last name
console.log(jonas['lastName']);  // prints the last name


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);  // printed first name
console.log(jonas['last' + nameKey]);   // printed last name


  console.log(jonas.lastName  + nameKey)  // prints the last name + 'name'


// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
//
//
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }


jonas.location = 'Portugal';  // prints  -  location: 'Portugal'
jonas['twitter'] = '@jonasschmedtman';  // prints  -  twitter: '@jonasschmedtman'
console.log(jonas);  // added the two above to the array list
