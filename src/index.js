// import myImage from './images/hero2.jpg'; // Webpack processes this and gives you the correct URL
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";
import './styles.css';

console.log('in index.js');

function clearContent(){
  document.getElementById('content').innerHTML = '';
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', function() {
    clearContent();
    console.log(` ${btn.id} clicked`);
    switch (btn.id) {
  case "home":
    clearContent();
    displayHome();
    break;
  case "menu":
    clearContent();
    displayMenu();
    break;
  case "about":
    clearContent();
    displayAbout();
    break;
  default:
    console.warning(`invalid btn.id ${btn.id}`);
}
    // alert(`Button clicked! ${btn.id}`);
  });
});
//start by displaying the Home Page
displayHome();

