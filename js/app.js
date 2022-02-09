'use strict';

console.log('Welcome!');

let userName = prompt('What is your Name?');
alert(`Hello ${userName}! Welcome! Lets play a Guessing game!`);

let answerOne = prompt('Is Inception my Favorite Movie?').toLowerCase();

if(answerOne === 'yes' || answerOne ==='y'){
  alert ('You are correct!');
}else if(answerOne === 'no' || answerOne ==='n'){
  alert('You are incorrect! Inception is my all time Fav movie.');
}
console.log(`${userName} answered ${answerOne}`);

let answerTwo = prompt('Do I enjoy coding?').toLowerCase();

if(answerTwo === 'yes' || answerTwo ==='y'){
  alert ('You are correct!');
}else if(answerTwo === 'no' || answerTwo ==='n'){
  alert('You are incorrect! I love Coding.');
}
console.log(`${userName} answered ${answerTwo}`);

let answerThree = prompt('Do I live in Washington State?').toLowerCase();

if(answerThree === 'yes' || answerThree ==='y'){
  alert ('You guessed it right!');
}else if(answerThree === 'no' || answerThree ==='n'){
  alert('Wrong! I do live in WA state.');
}
console.log(`${userName} answered ${answerThree}`);

let answerFour = prompt('Is my favorite band Megadeth?').toUpperCase();

if(answerFour === 'YES' || answerFour ==='Y'){
  alert ('You are correct!');
}else if(answerFour === 'NO' || answerFour ==='N'){
  alert('You are wrong.Megadeth is my fav Band!');
}
console.log(`${userName} answered ${answerFour}`);

let answerFive = prompt('Do I have a dog?').toUpperCase();

if(answerFive === 'YES' || answerFive === 'Y'){
  alert('You are right!');
}else if(answerFive === 'NO' || answerFive ==='N'){
  alert('Incorrect. I do have a dog.');
}
console.log(`${userName} answered ${answerFive}`);

alert(`Thank you for playing the game ${userName}! That was fun`);




