import './style.css';
import './home.jpeg';
import './github.png';

import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';


homePage();

const content = document.querySelector('#content');

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', () => {
    content.innerHTML = "";
    homePage();
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = "";
    aboutPage();
});

menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    menuPage();
});




