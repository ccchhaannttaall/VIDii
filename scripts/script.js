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

let audioPlayer = document.getElementById('player');
let navlinks = document.getElementsByTagName('a');
navlinks[0].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro.mp3');
});

navlinks[1].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro2.mp3');
});

navlinks[2].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro3.mp3');
});

navlinks[3].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro4.mp3');
});

navlinks[4].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro5.mp3');
});

navlinks[5].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro6.mp3');
});

navlinks[6].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro7.mp3');
});

navlinks[7].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro8.mp3');
});

navlinks[8].addEventListener('click', () => {
    audioPlayer.setAttribute('src', './intro9.mp3');
})