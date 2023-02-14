const pageOne = document.getElementById('page-one');
const pageTwo = document.getElementById('page-two');
const pageThree = document.getElementById('page-three');
const pageFour = document.getElementById('page-four');
const pageFive = document.getElementById('page-five');
function one() {
    pageTwo.scrollIntoView();
}

function two() {
    pageThree.scrollIntoView();
}

function three() {
    pageFour.scrollIntoView();
}

function four() {
    pageFive.scrollIntoView();
}

window.addEventListener("load", function() {
    document.getElementById("loading").style.display= "none";
  })