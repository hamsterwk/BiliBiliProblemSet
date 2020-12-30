
function SetProblemRandom(){
    var idx=Math.floor(Math.random()*p.length)
    var problem=p[idx];
    document.getElementById("hinttitle").innerText=problem.a;
    document.getElementById("userBox").innerText="问题贡献用户："+problem.b;		
}  


function SetProblemRandomAjax(){
    var problem;
	$.ajax({
		type: "GET",//方法类型
        dataType: "jsonp",
        jsonp:"callback",
		url: "https://81.71.15.106:8080/getQuestion/" ,
        async : false,
        jsonpCallback: "callback",
		success: function (result) {
            console.log(result);
            problem=result.data;
            document.getElementById("hinttitle").innerText=problem.problem;
            document.getElementById("userBox").innerText="问题贡献用户："+problem.member;		}
    });

}