/*
Make a function in JS in which the following condition would apply
if the age is greater than 18, print Eligible to vote
if the age is less than 18, print Not-Eligible to vote
if the age equals 18, print Make your VoterId
*/

const age = () => {
    if (age > 18) {
        console.log('Eligible');
    } else if (age < 18) {
        console.log('Not-Eligible');
    } else {
        console.log('Make your VoterId');
    }
}

// ******************************************************************************************


/* 
2. Make a function in JS according to concept of FizzBuzz
if parameter supplied is Fizz, print Fizz
if parameter supplied is Buzz, print Buzz
for every other supplied parameter, print FizzBuzz
*/

var n = 15;
const fizzBuzzFunction = () => {
    for (let i=0; i<n; i++) {
        if (i % 3 && i % 5  === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
    }
}

// ******************************************************************************************