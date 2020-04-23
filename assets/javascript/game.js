//Global Variables
//--------------------------------------------------------------------
//Arrays and Variables for holding data


//Game counters
let winCount = 0;
let lossCount = 0;
let guessesLeft = 0;
let playerNumber = 0;
let compGeneratedNumber = getRandom (19, 120);
let crystal = {
    pink: {
        name: 'pink',
        value: 0
    },
    blue: {
        name: 'blue',
        value: 0
    },
    purple: {
        name: 'purple',
        value: 0
    },
    green: {
        name: 'green',
        value: 0
    }

}

function startGame() {
//set values for each crystal
    crystal.pink.value = getRandom(1,12);
    crystal.blue.value = getRandom (1,12);
    crystal.purple.value = getRandom (1,12);
    crystal.green.value = getRandom (1,12);
}

startGame() 

//console.log

for (var i = 0; i < winCount; i++) {
    console.log(winCount[i]);
 }


// Listener
  document.onkeydown = function (event) {
    console.log(event.key)
  }


//Functions (Reusable blocks of code)
//--------------------------------------------------------------------
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function addValues(clickedCrystal) {
    playerNumber += clickedCrystal.value
    $('#playerNumber').text(playerNumber) 
    //check if number = the guess number if it does they win, if they go over they lose if/else if/else
}


//Main Process
//--------------------------------------------------------------------

$('#compNumber').text(compGeneratedNumber)
$('#playerNumber').text(playerNumber)

$('#pinkGem').click(function(){
    addValues(crystal.pink)
})

$('#blueGem').click(function(){
    addValues(crystal.blue)
})

$('#purpleGem').click(function(){
    addValues(crystal.purple)
})

$('#greenGem').click(function(){
    addValues(crystal.green)
})

//add wins and losses and add it to variables
//start game