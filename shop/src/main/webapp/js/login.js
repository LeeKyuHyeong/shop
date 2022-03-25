

$(document).ready(function(){
	
	if (err_msg == '') {
		console.log("alert-danger hide");
		
		$(".col-12").hide();
	}
	
	$("#btnLogin").click(function() {
		loginId = $("#loginId").val();
		var loginPwd = $("#loginPwd").val();
		if (loginId == "") {
			alert("아이디를 입력해주세요.");
			$("#loginId").focus();
			return;
		}
		if (loginPwd == "") {
			alert("비밀번호를 입력하세요.");
			$("#loginPwd").focus();
			return;
		}
		
		//alert("로그인성공.");
		document.loginForm.action = "/loginAction.do";
		document.loginForm.submit(); //제출
		
	});
});