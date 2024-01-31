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

h5Array.forEach(function(elem, idx){
    if(elem.id == count){
        if(elem.id<=9){
            if(upDown==1){
                for(var elm of randomWord){
                    h5Array[idx].innerHTML = elm;
                    idx++;
                }
            }else{
                for(var elm of randomWord){
                    h5Array[idx].innerHTML = elm;
                    idx = idx + 6;
                }
            }
        }else if(elem.id<=18){
            for(var elm of randomWord){
                h5Array[idx].innerHTML = elm;
                idx = idx + 6;
            }
        }else if(elem.id<=27){
            for(var elm of randomWord){
                h5Array[idx].innerHTML = elm;
                idx++;
            }
        }
        
    }
    
})

var match = ""

var flag = 0;

h5Array.forEach(function(elem, idx){
    elem.addEventListener("click", function(e){
            match += e.target.innerHTML;
            e.target.style.backgroundColor = "red"

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
                    }, 1000);
                }
            })
        }
    })
})

document.querySelector("#re").addEventListener("click", function(){
    location.reload();
})





  




