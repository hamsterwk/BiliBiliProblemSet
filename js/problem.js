
function SetProblemRandom(){
    var problem;
	$.ajax({
		type: "GET",//方法类型
        dataType: "jsonp",
        jsonp:"callback",
		url: "http://81.71.15.106:8080/getQuestion/" ,
        async : false,
        jsonpCallback: "callback",
		success: function (result) {
            console.log(result);
            problem=result.data;
            document.getElementById("hinttitle").innerText=problem.problem;
            document.getElementById("userBox").innerText="问题贡献用户："+problem.member;		}
    });
}