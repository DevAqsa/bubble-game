let timer = 60;
let score = 0;

let hitrn = 0;



function increaseScore(){
    score = score + 10;
    document.querySelector("#score").textContent = score;

}


function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#newhit").innerHTML = hitrn;
}


function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 114; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    
    }
    
    document.querySelector(".pbtm").innerHTML = clutter;
    
    
}



function runTime() {
    
    let timerInt = setInterval(function(){
        
        if(timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}



document.querySelector(".pbtm").addEventListener("click", function(detls){

    let clickedNum = Number(detls.target.textContent);


    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewhit();
        
    }
})

runTime();
makeBubble();
getNewhit();





