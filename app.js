'use strict';

const loadingText = document.querySelector('.loadingText');
const backGround = document.querySelector('.background');

let loading = 0;

let int = setInterval(blurring, 30)


function blurring() {
    loading++;

    if (loading > 99) {
        clearInterval(int);
    }

    loadingText.innerHTML= `${loading}%`;
    loadingText.style.opacity = scale(loading, 0, 100, 1, 0);
    backGround.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}