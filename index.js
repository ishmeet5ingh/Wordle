import words from './wordList.js';

var randomWord = words[Math.floor(Math.random()*words.length)]

document.querySelector("h2").innerHTML = randomWord;

var randomWordlength = document.querySelector("#randomWords").children.length

for(var i = 0; i < randomWordlength; i++){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    document.querySelector('#randomWords').children[i].innerHTML = alphabet[randomIndex];
}

function getRandomOddNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var count = getRandomOddNumber(1, 27);
var upDown = getRandomOddNumber(1, 2);

var container = document.getElementById('randomWords');
var h5Elements = container.querySelectorAll('h5');

var h5Array = Array.from(h5Elements)

var forwardRun = (h5Array, idx)=>{
    for(var elm of randomWord){
        h5Array[idx].innerHTML = elm;
        idx++;
    }
}
var backwardRun = (h5Array, idx)=>{
    for(var elm of randomWord){
        h5Array[idx].innerHTML = elm;
        idx = idx + 6;
    }
}



h5Array.forEach(function(elem, idx){
    if(elem.id == count){
        if(elem.id<=9){
            if(upDown==1){
                forwardRun(h5Array, idx);
            }else{
                backwardRun(h5Array, idx);
            }
        }else if(elem.id<=18){
            backwardRun(h5Array, idx)
        }else if(elem.id<=27){
            forwardRun(h5Array, idx)
        }
    }
})

var match = ""

var flag = 0;
var i = 0;
h5Array.forEach(function(elem, idx){
    elem.addEventListener("click", function(e){
        
        const clickedButton = e.target;

        const isActive = clickedButton.getAttribute('data-active') === 'true';
        if(e.target.innerHTML == randomWord[i]){
            match += e.target.innerHTML;
            console.log(e.target.innerHTML);
            i++;
            if(isActive) {
                clickedButton.style.backgroundColor = ''; // Remove background color
              } else {
                clickedButton.style.backgroundColor = 'red'; // Set your desired active color
            }
        }else{
            if(isActive) {
                clickedButton.style.backgroundColor = ''; // Remove background color
              } else {
                  clickedButton.style.backgroundColor = 'red'; 
                  navigator.vibrate(200)// Set your desired active color
                setTimeout(() => {
                    clickedButton.style.backgroundColor = ''; // Set your desired active color
                }, 500);
            }
        }
       
        // Toggle the 'data-active' attribute
        clickedButton.setAttribute('data-active', !isActive);
            // e.target.style.backgroundColor = "red"
        if(match == randomWord){
            console.log(match);
            match = ""
            h5Array.forEach(function(elem){
                if(elem.style.backgroundColor == "red"){
                    setTimeout(() => {
                        elem.style.backgroundColor = "rgb(43, 39, 39)"
                        setTimeout(() => {
                            location.reload();
                        },500);
                    }, 500);
                }
            })
        }
    })
})

document.querySelector("#re").addEventListener("click", function(){
    location.reload();
})