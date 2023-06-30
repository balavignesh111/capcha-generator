'use strict';

/* steps
1. user i/p
2. comp generated capcha
3. compare it with user i/p
4. results
*/

// elements
const userInput = document.getElementById('capcha-input');
const checkBtn = document.querySelector('.btn-check');
const resetBtn = document.querySelector('.reset-button');
const computerGeneratedCapcha = document.querySelector('.capcha');
const capchaMsg = document.querySelector('.capcha-msg');

//gb var
const capchaString = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

//function
//random num generator
const randomNumber = function(){
  return Math.trunc(Math.random()*(capchaString.length))
}

const strGenerated = function(){
  const letterIndex = randomNumber();
  return (capchaString.slice(letterIndex,letterIndex+1));
}


// capcha string
const capchaStr = strGenerated()+strGenerated()+strGenerated()+strGenerated()+strGenerated()+strGenerated();
console.log(capchaStr);

//eventlistener