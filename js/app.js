'use strict';

let userName = prompt('What is your name?').toUpperCase();
console.log('welcome' + userName);
document.write('<p> Thank you for visiting my website ' + userName);

function first(){



  let userType = prompt('Guess who i\'m (Ala/Ahmad)?').toUpperCase();
  switch (userType) {
  case 'AHMAD':
    console.log('sorry you can\'t access');
    alert('Welcome ' + userName + ' you choosed ' + userType + ', Check the end of the page');
    document.write('<p id="ADMIN">AHMAD / sorry you didn\'t know</p>');
    break;
  case 'ALA':
    console.log('ok you can access');
    alert('Welcome ' + userName + ' you choosed ' + userType + ', Check the end of the page');
    document.write('<p id="ADMIN">ALA / yes you know me</p>');
    break;
  default:
    console.log('sorry we don\'t have this user');
    alert('Welcome ' + userName + ' you choosed ' + userType + ', Check the end of the page');
    document.write('<p id="ADMIN">sorry you didn\'t pick who i\'m</p>');
    break;

  }
}
first();
function second(){


  let q3 = prompt('Do you know from where am i? y/n').toLowerCase();
  switch (q3) {
  case 'y':
    alert('Good, move to the next quastion');
    break;
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
  case 'y':
    alert('Good');
    break;
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
  let q5 = prompt('What is my last name? (AbuRish or Rish)?').toLowerCase();
  switch (q5) {
  case 'aburish':
    alert('Good');
    break;
  case 'rish':
    alert('Wrong');
    break;
  default:
    alert('You should answer');
    break;
  }
}
fourth();
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
      break;
    }
  }
}
fifth();
function sixth(){



  let countries = ['jordan', 'turkey', 'germany', 'japan'];
  for (let attempt = 1; attempt <= 6; attempt++){
    let q0 = prompt('Do you know where i\'m going?').toLowerCase();
    for (let i = 0; i < countries.length; i++) {
      if (q0 === countries[i]){
        alert('Correct, On my way to this countrie');
        attempt = 9;
        break;
      }
    }
  }
}
sixth();
