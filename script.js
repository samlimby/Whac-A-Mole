let mole1 = {
    element: document.getElementById("mole1"),
    score: false
};

let mole2 = {
    element: document.getElementById("mole2"),
    score: false
};

let mole3 = {
    element: document.getElementById("mole3"),
    score: false
};

let mole4 = {
    element: document.getElementById("mole4"),
    score: false
};

let mole5 = {
    element: document.getElementById("mole5"),
    score: false
};

let mole6 = {
    element: document.getElementById("mole6"),
    score: false
};

const timerText = document.getElementById("timer-text");

let counter = 0;
let gameStatus = true;
let moleArray = [];
let activeArray = [];

moleArray.push(mole1, mole2, mole3, mole4, mole5, mole6);

for (let i = 0; i < moleArray.length; i++) {

    const randomValue = Math.floor(Math.random() * moleArray.length);
    const randomItem = moleArray[randomValue];
    console.log(randomItem);


    moleRandomizer(randomItem)
    // setInterval(function() {
    //     moleRandomizer(randomItem);
    // }, 1000); 

}



// eventlisteners live here

mole1.element.addEventListener("click", function(){
    console.log("first mole has been clicked - beware!");
    if (!mole1.score) {
        mole1.score = true;
        moleStateChange(mole1.element, mole1.score)
        return;
    }

    if (mole1.score) {
        mole1.score = false;
        moleStateChange(mole1.element, mole1.score)
    }
    
});

mole2.element.addEventListener("click", function(){
    console.log("second mole has been clicked - beware!");
    if (!mole2.score) {
        mole2.score = true;
        moleStateChange(mole2.element, mole2.score)
        return;
    }

    if (mole2.score) {
        mole2.score = false;
        moleStateChange(mole2.element, mole2.score)
    }

});

mole3.element.addEventListener("click", function(){
    console.log("third mole has been clicked - beware!");
    if (!mole3.score) {
        mole3.score = true;
        moleStateChange(mole3.element, mole3.score)
        return;
    }

    if (mole3.score) {
        mole3.score = false;
        moleStateChange(mole3.element, mole3.score)
    }

});

mole4.element.addEventListener("click", function(){
    console.log("fourth mole has been clicked - beware!");
    if (!mole4.score) {
        mole4.score = true;
        moleStateChange(mole4.element, mole4.score)
        return;
    }

    if (mole4.score) {
        mole4.score = false;
        moleStateChange(mole4.element, mole4.score)
    }
});

mole5.element.addEventListener("click", function(){
    console.log("fifth mole has been clicked - beware!");
    if (!mole5.score) {
        mole5.score = true;
        moleStateChange(mole5.element, mole5.score)
        return;
    }

    if (mole5.score) {
        mole5.score = false;
        moleStateChange(mole5.element, mole5.score)
    }
});

mole6.element.addEventListener("click", function(){
    console.log("sixth mole has been clicked - beware!");
    if (!mole6.score) {
        mole6.score = true;
        moleStateChange(mole6.element, mole6.score)
        return;
    }

    if (mole6.score) {
        mole6.score = false;
        moleStateChange(mole6.element, mole6.score)
    }
});

// relevant functions 

function moleStateChange(mole, moleScore) {
    
    if (moleScore) {
        mole.classList.replace("mole-wrapper", "mole-wrapper_active")
        mole.score = true;
    } else {
        mole.classList.replace("mole-wrapper_active", "mole-wrapper")
        moleScore = false;
    }
};

function moleRandomizer(mole) {


    if (activeArray.length < 2) {
        activeArray.push(mole)
        mole.score = true;
        moleStateChange(mole.element, mole.score)
        let index = moleArray.indexOf(mole);
        console.log(index)
        moleArray.splice(index, 2, mole);
    }

    console.log(activeArray)

}

console.log(activeArray)
console.log(moleArray)

// function timerCounter() {

//     if (gameStatus) {
//         counter++;
//         timerText.textContent = `
//             ${counter}
//         `;
//     }
// }

// setInterval(timerCounter, 1000)
// timerCounter()




// game timer variable - timer at the top of the arcade
// randomize the changing of the moles from default to active
// detect and manually change the class states from default to active and vice versa on click
// slowly increase the frequency at which moles go active for gradual difficulty
// each mole to active state increases the timer
// score being generated that is based on simple time
// alert on game over - i.e when the timer goes down
