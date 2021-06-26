'use strict';
let score= 0;
let userName = prompt('What is your name?').toUpperCase();
console.log('welcome' + userName);
document.write('<p> Thank you for visiting my website ' + userName);

function first(){

  let userType = prompt('Do you know my name? (y/n)').toLowerCase();
  switch (userType) {
  case 'no':
  case 'n':
    console.log('Wrong');
    alert('My name is Ala. you are welcome ' + userName);
    // document.write('<p id="ADMIN">AHMAD / sorry you didn\'t know</p>');
    break;
  case 'yes':
  case 'y':
    console.log('Correct');
    alert('Welcome ' + userName);
    // document.write('<p id="ADMIN">ALA / yes you know me</p>');
    break;
  default:
    console.log('Please answer y\n');
    alert('Welcome ' + userName);
    // document.write('<p id="ADMIN">sorry you didn\'t pick who i\'m</p>');
    break;

  }
}
first();
function second(){


  let q3 = prompt('Do you know from where am i? y/n').toLowerCase();
  switch (q3) {
  case 'yes':
  case 'y':
    alert('Good, move to the next quastion');
    score++;
    break;
  case 'no':
  case 'n':
    alert('guss from where in the next quastion');
    break;
  default:
    alert('please answer with y or n');
    break;
  }
}
second();
function third(){

  let q4 = prompt('Am i from Amman? y/n').toLowerCase();
  switch (q4) {
  case 'yes':
  case 'y':
    alert('Good');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Wrong');
    break;
  default:
    alert('please answer with y or n');
    break;
  }
}
third();
function fourth(){
  let q5 = prompt('does my last name? AbuRish? (y/n)').toLowerCase();
  switch (q5) {
  case 'yes':
  case 'y':
    alert('Good');
    score++;
    break;
  case 'n':
  case 'no':
    alert('Wrong');
    break;
  default:
    alert('You should answer (y/n)');
    break;
  }
}
fourth();



function birth(){
  let q5 = prompt('Do you know the year of my birthday? (y/n)').toLowerCase();
  switch (q5) {
  case 'yes':
  case 'y':
    alert('Good');
    score++;
    break;
  case 'n':
  case 'no':
    alert('Wrong, My brthday 1988');
    break;
  default:
    alert('You should answer (y/n)');
    break;
  }
}
birth();



function fifth(){
  let num = 7;
  for (let i = 1; i <= 9; i++) {
    let x = Number(prompt('What is my Favorite Number? 1-10'));
    if (x > num) {
      alert('try again');
    }
    else if (x < num) {
      alert('try again');
    }
    else {
      alert('Correct, My Favorite Number is 7');
      score++;
      break;
    }
  }
}
fifth();
function sixth(){
  let countries = ['jordan', 'turkey', 'germany', 'japan'];
  for (let attempt = 1; attempt <= 6; attempt++){
    let q0 = prompt('Do you know where i\'m going? (Jordan, Turkey, Germany, Japan)').toLowerCase();
    for (let i = 0; i < countries.length; i++) {
      if (q0 === countries[i]){
        alert('Correct, On my way to this countrie');
        score++;
        attempt = 9;
        break;
      }
    }
  }
}
sixth();
alert('you answered '+score+' out of 6 quastions');
