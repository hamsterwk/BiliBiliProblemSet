
window.onload = function(){
    document.getElementById("LoadingHint").style.visibility="hidden";
    SetProblemRandom();
    resize();
}
window.onresize = function(){
    resize();
}

function resize(){
    width = window.screen.width;
    if(width>=1000){
        document.getElementById("hatsheet").style.width="800px";
        document.getElementById("hatsheet").style.margin="auto";
    }
}