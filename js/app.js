'use strict';

let userName = prompt('What is your name?').toUpperCase();
console.log('welcome' + userName);
document.write('<p> Thank you for visiting my website ' +userName);



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
