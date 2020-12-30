
window.onload = function(){
    SetProblemRandom();
    resize();
}
window.onresize = function(){
    resize();
}

function resize(){
    width = window.screen.width;
    if(width>=1000){
        document.getElementById("sheet").style.width="800px";
        document.getElementById("sheet").style.margin="auto";
    }
}