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
let finalCapcha;

//function
//random num generator
const randomNumber = function(){
  return Math.trunc(Math.random()*(capchaString.length))
}

const strGenerated = function(){
  const letterIndex = randomNumber();
  return (capchaString.slice(letterIndex,letterIndex+1));
}
// final capcha str
const capcha = function(){
  const capchaStr = strGenerated()+strGenerated()+strGenerated()+strGenerated()+strGenerated()+strGenerated();
  return capchaStr;
}

function init(){
  capchaMsg.style.display = 'none';
  finalCapcha = capcha();
  computerGeneratedCapcha.innerText = finalCapcha;
  userInput.value = '';
}

const result = function(str){
  capchaMsg.style.display = 'block';
  if(str === finalCapcha){
    if(capchaMsg.classList.contains('fai;lure')){
      capchaMsg.classList.remove('failure');  
    }
    capchaMsg.classList.add('success');
    capchaMsg.innerText = `Nice. You don't appear to be robot`;
  }else if(str === ''){
    if(capchaMsg.classList.contains('success')){
      capchaMsg.classList.remove('success');  
    }
    capchaMsg.classList.add('failure');
    capchaMsg.innerText = `Please type capcha!`;
  }else{
    if(capchaMsg.classList.contains('success')){
      capchaMsg.classList.remove('success');  
    }
    capchaMsg.classList.add('failure');
    capchaMsg.innerText = `Captcha not matched. Please try again!`
  }
}



//eventlistener
resetBtn.addEventListener('click',()=>{
  init();
})

checkBtn.addEventListener('click',()=>{
  result(userInput.value);
})
init();