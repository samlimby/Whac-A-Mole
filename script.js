const firstMole = document.getElementById("mole1");
let firstMoleScore = false;

const secondMole = document.getElementById("mole2");
let secondMoleScore = false;

const thirdMole = document.getElementById("mole3");
let thirdMoleScore = false;

const fourthMole = document.getElementById("mole4");
let fourthMoleScore = false;

const fifthMole = document.getElementById("mole5");
let fifthMoleScore = false;

const sixthMole = document.getElementById("mole6");
let sixthMoleScore = false;

const timerText = document.getElementById("timer-text");

let counter = 0;
let gameStatus = true;

// eventlisteners live here

firstMole.addEventListener("click", function(){
    console.log("first mole has been clicked - beware!");
    if (!firstMoleScore) {
        firstMoleScore = true;
        moleStateChange(firstMole, firstMoleScore)
        return;
    }

    if (firstMoleScore) {
        firstMoleScore = false;
        moleStateChange(firstMole, firstMoleScore)
    }
    
});

secondMole.addEventListener("click", function(){
    console.log("second mole has been clicked - beware!");
    if (!secondMoleScore) {
        secondMoleScore = true;
        moleStateChange(secondMole, secondMoleScore)
        return;
    }

    if (secondMoleScore) {
        secondMoleScore = false;
        moleStateChange(secondMole, secondMoleScore)
    }

});

thirdMole.addEventListener("click", function(){
    console.log("third mole has been clicked - beware!");
    if (!thirdMoleScore) {
        thirdMoleScore = true;
        moleStateChange(thirdMole, thirdMoleScore)
        return;
    }

    if (thirdMoleScore) {
        thirdMoleScore = false;
        moleStateChange(thirdMole, thirdMoleScore)
    }

});

fourthMole.addEventListener("click", function(){
    console.log("fourth mole has been clicked - beware!");
    if (!fourthMoleScore) {
        fourthMoleScore = true;
        moleStateChange(fourthMole, fourthMoleScore)
        return;
    }

    if (fourthMoleScore) {
        fourthMoleScore = false;
        moleStateChange(fourthMole, fourthMoleScore)
    }
});

fifthMole.addEventListener("click", function(){
    console.log("fifth mole has been clicked - beware!");
    if (!fifthMoleScore) {
        fifthMoleScore = true;
        moleStateChange(fifthMole, fifthMoleScore)
        return;
    }

    if (fifthMoleScore) {
        fifthMoleScore = false;
        moleStateChange(fifthMole, fifthMoleScore)
    }
});

sixthMole.addEventListener("click", function(){
    console.log("sixth mole has been clicked - beware!");
    if (!sixthMoleScore) {
        sixthMoleScore = true;
        moleStateChange(sixthMole, sixthMoleScore)
        return;
    }

    if (sixthMoleScore) {
        sixthMoleScore = false;
        moleStateChange(sixthMole, sixthMoleScore)
    }
});

// relevant functions 

function moleStateChange(mole, moleScore) {
    
    if (moleScore) {
        mole.classList.replace("mole-wrapper", "mole-wrapper_active")
        moleScore = true;
    } else {
        mole.classList.replace("mole-wrapper_active", "mole-wrapper")
        moleScore = false;
    }
};

function timerCounter() {

    if (gameStatus) {
        counter++;
        timerText.textContent = `
            ${counter}
        `;
    }
}

setInterval(timerCounter, 1000)
timerCounter()




// game timer variable - timer at the top of the arcade
// randomize the changing of the moles from default to active
// detect and manually change the class states from default to active and vice versa on click
// slowly increase the frequency at which moles go active for gradual difficulty
// each mole to active state increases the timer
// score being generated that is based on simple time
// alert on game over - i.e when the timer goes down
