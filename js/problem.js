

function SetProblemRandom(){
    var idx=Math.floor( Math.random()*problemList.length );
    console.log(idx);
    var problem=problemList[idx];
    document.getElementById("hinttitle").innerText=problem.content;
    document.getElementById("userBox").innerText="大哥哥大姐姐们不要沉迷B站，\n要多学习提高自己的知识才是正事！\n问题贡献用户："+problem.uame;
}