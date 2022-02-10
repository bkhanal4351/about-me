'use strict';
let counter = 0;

console.log('Welcome!');

let userName = prompt('What is your Name?');
alert(`Hello ${userName}! Welcome! Lets play a Guessing game! Please answer either yes or No.`);

let answerOne = prompt('Is Inception my Favorite Movie?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct!');
  counter = counter + 1;
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('You are incorrect! Inception is my all time Fav movie.');
}
console.log(`${userName} answered ${answerOne}`);

let answerTwo = prompt('Do I enjoy coding?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are correct!');
  counter = counter + 1;
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('You are incorrect! I love Coding.');
}
console.log(`${userName} answered ${answerTwo}`);

let answerThree = prompt('Do I live in Washington State?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('You guessed it right!');
  counter = counter + 1;
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Wrong! I do live in WA state.');
}
console.log(`${userName} answered ${answerThree}`);

let answerFour = prompt('Is my favorite band Megadeth?').toUpperCase();

if (answerFour === 'YES' || answerFour === 'Y') {
  alert('You are correct!');
  counter = counter + 1;
} else if (answerFour === 'NO' || answerFour === 'N') {
  alert('You are wrong.Megadeth is my fav Band!');
}
console.log(`${userName} answered ${answerFour}`);

let answerFive = prompt('Do I have a dog?').toUpperCase();

if (answerFive === 'YES' || answerFive === 'Y') {
  alert('You are right!');
  counter = counter + 1;
} else if (answerFive === 'NO' || answerFive === 'N') {
  alert('Incorrect. I do have a dog.');
}
console.log(`${userName} answered ${answerFive}`);

alert(`Thank you for playing the game ${userName}! Now lets play a game where you guess the number that I am thinking of!`);

let myNumber = 5;
let userNumber = prompt('What number am I thinking of?');
let userTry = 3;

while (userTry) {
  userTry--;


  if (userNumber > myNumber) {
    alert('Too High! keep guessing');
    userNumber = prompt('What number am i Thinking of?');


  }
  else if (userNumber < myNumber) {
    alert('Too low!keep guessing.');
    userNumber = prompt('What number am i Thinking of?');


  }
  else if (+userNumber === myNumber) {
    alert('You Guessed it right!');
    console.log('here');
    counter = counter + 1;
    break;
  }
  if (!userTry) {
    alert('sorry!you have tried all 4 attempts, 5 is the number I was thinking of!');
    break;
  }
}

let athletes = ['Tom Brady', 'Michael Jordan', 'Cristiano Ronaldo', 'Wayne Rooney', 'Lionel Messi', 'Lebron James', 'Joe Montana', 'Muhammad Ali', 'Mike Tyson', 'Usain Bolt'];

let userInput = 6;

let favAthletes = ['tom brady','cristiano ronaldo'];

let foundFav = false;

while (userInput && !foundFav) {
  let userGuess = prompt('which two of the listed 10 athletes are my favs?').toLowerCase();
  userInput--;
  for (let i = 0; i < favAthletes.length; i++) {


    if (userGuess === favAthletes[i]) {
      alert('You Guessed it right!');
      counter = counter+1;
    



      foundFav = true;
    }
  }
}

alert(`Well played ${userName}! Here are my fav athletes 'Tom Brady' and 'Cristiano Ronaldo'`);

alert(`Thank you  ${userName} you got ${counter} questions correct`);








