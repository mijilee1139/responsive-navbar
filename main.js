'use strict'

const toggleBtn = document.querySelector('.navbar__toggle-btn');
const menu = document.querySelector('.navbar__menu');
const contacts = document.querySelector('.navbar__contacts');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    contacts.classList.toggle('active');
});