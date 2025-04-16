let gameseq = [];
let userseq = [];
let hiscore = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["yellow","red","green","blue"];
// let body = document.querySelector("body");
document.addEventListener("keypress", function (event) {
    if (started == false) {
        console.log("game is started");
        
        started = true;

        levelup();
}
});

function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

};

function levelup(){
    userseq = [];
    level++;
    h2.innerText = "Level: " + level;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    
    gameflash(randombtn);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
        
    }, 250);
}
function checkans(idx){
    // console.log("curr level : ", level);
    if (gameseq[idx] === userseq[idx]) {
       if (userseq.length == gameseq.length) {
        setTimeout(levelup,1000);
        
       }
    }
    else{
        
        
        h2.innerHTML = `game over : your score was <b> ${level} </b> <br>  and  press the  new key to start the game`;

        

        document.querySelector('body').style.backgroundColor= "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";

            
        },160);

        reset();
        
    }
    
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn); 


    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
    
    
}
let allbtn = document.querySelectorAll(".btn");
for(btnop of allbtn){
    btnop.addEventListener("click",btnpress);
}

function reset(){
    userseq = [];
    gameseq = [];
    started = false;
    level = 0;

}


function score(){
    
    hiscore.push(level);
    let max = Math.max(...hiscore);
    
    h2.innerHTML = `your highest score is <b> ${max} </b>
    `;

    
}


