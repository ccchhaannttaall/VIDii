// JavaScript Document
console.log("Howdy!");

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openText);
}

function openText(event) {
    let textblock = event.target.parentElement.getElementsByTagName("p")[0];
    textblock.classList.toggle('open');
}