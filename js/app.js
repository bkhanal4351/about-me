'use strict';

let userName = prompt('What is your Name?');
alert(`Hello ${userName}! Welcome! Please guess my Favories!`);

let answerOne = prompt('Is Inception my Favorite Movie?').toLowerCase();

if(answerOne === 'yes' || answerOne ==='y'){
  alert ('You are correct!');
}else if(answerOne === 'no' || answerOne ==='n'){
  alert('You are incorrect! Inception is my all time Fav movie.');
}

let answerTwo = prompt('Do I enjoy coding?').toLowerCase();

if(answerTwo === 'yes' || answerTwo ==='y'){
  alert ('You are correct!');
}else if(answerTwo === 'no' || answerTwo ==='n'){
  alert('You are incorrect! I love Coding.');
}

let answerThree = prompt('Do I live in Washington State?').toLowerCase();

if(answerThree === 'yes' || answerThree ==='y'){
  alert ('You guessed it right!');
}else if(answerThree === 'no' || answerThree ==='n'){
  alert('Wrong! I do in WA state.');
}


