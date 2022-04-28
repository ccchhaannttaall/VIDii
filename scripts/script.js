// JavaScript Document
console.log("Howdy!");

let main = document.getElementsByTagName("main")[0];



for (let i = 1; i < 1000; i++) {
    setTimeout(() => {
        if (i <= 50) { // 5 seconden 
            main.style["background-position-x"] = i + '%';
        } else if (i > 50 && i < 100) { // 5-10 seconden
            main.style["background-position-y"] = i - 50 + '%';
        } else if (i > 100) { // Na 10 seconden
            main.style["background-position-x"] = i - 50 + '%';
        }
      }, i * 100);
}