var seconds=0;
var minutes=0;
var hours=0;
var time=0;

var myInterval=undefined;
/*EVENTS */
const bnt_play=document.getElementById("bnt-play");
bnt_play.addEventListener('click',play)
const bnt_stop=document.getElementById("bnt-stop");
bnt_stop.addEventListener('click',stop)
const bnt_reset=document.getElementById("bnt-reset");
bnt_reset.addEventListener('click',reset)

/*Controls */
function play() {
    const elementP = document.getElementById("timer");
myInterval=setInterval(function() {
    
    seconds+=1;
    if(seconds==60){
        seconds=0;
        minutes+=1;
    }
    if(minutes==60){
        minutes=0;
        hours+=1;
    }
    const display=(
    (hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":" 
    +(minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) +":"
    +(seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    elementP.innerHTML = display;
},1000)    
}

function stop(){
    if (myInterval!=undefined) {
        clearInterval(myInterval);
    }
}
function reset() {
    stop()
    const elementP = document.getElementById("timer");
    seconds=0;
    minutes=0;
    hours=0;
    time=0;
    const display=("00:00:00");
    elementP.innerHTML = display;
}