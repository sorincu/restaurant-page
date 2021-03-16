import DOM from './dom.js';
import menu from './menu.js';
import contact from './contact.js';

const menuDOM = document.querySelector('#menu');
const contactDOM = document.querySelector('#contact');
const tabsContent = document.querySelector('#tabs-content');

DOM();

menuDOM.addEventListener('click', () => {
    tabsContent.textContent = "";
    contactDOM.className = "tabs";
    menuDOM.className = "tabs active";
    menu();
});

contactDOM.addEventListener('click', () => {
    tabsContent.textContent = "";
    menuDOM.className = "tabs"
    contactDOM.className = "tabs active";
    contact();
});
