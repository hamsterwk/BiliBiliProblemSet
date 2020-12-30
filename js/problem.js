

function SetProblemRandom(){
    var idx=Math.floor( Math.random()*problemList.length );
    console.log(idx);
    var problem=problemList[idx];
    document.getElementById("hinttitle").innerText=problem.content;
    document.getElementById("userBox").innerText="问题贡献用户：\n"+problem.uame;
}