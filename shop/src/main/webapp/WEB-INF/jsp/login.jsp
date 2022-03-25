<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>

</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
<div class="at-html">
<c:import url="./inc/ShopHeader.jsp"></c:import>
<script src="/js/login.js"></script>
<script>
	var err_msg = '${err_msg}';
	console.log("err_msg:" + err_msg);
</script>
	<div class="at-body">
		<div class="main_wrap">
			<div class="at-container">
				<div class="at-content">
					<div class="page-wrap">
					<!-- block content  -->
					
						<div class="row mt-5">
							<div class="col-12">
								<div class="alert alert-danger" style="font-weight:bold;">
						            ${err_msg}
						        </div>
							</div>
						</div>
						<form method="post" class="loginForm" id="loginForm" name="loginForm">
							<input type="hidden" name="next" value="{{next}}" />
							<h2>Login</h2>
							<div class="idForm">
								<input type="text" id="loginId" name="loginId" class="id" value="dddd" placeholder="로그인 아이디">
							</div>
							<div class="passForm">
								<input type="password" id="loginPwd" name="loginPwd" class="pw" value="1111" placeholder="비밀번호">
							</div>
							<button id="btnLogin" class="btnLogin">로그인</button>
							<div class="login_rel">
								<a id="btn_popup1" class="link_rel" href="findId.do">아이디 찾기</a> 
								<span class="txt_bar">&nbsp;|&nbsp;</span> 
								<a id="btn_popup2" class="link_rel" href="findPwd.do">비밀번호 찾기</a>
							</div>
						</form>
						
					<!-- end block  -->
					</div>
				<!-- end page-wrap -->
				</div>
			<!-- end at-content -->
			</div>
		<!-- end at-container -->
		</div>
	<!-- end main_wrap -->
	</div>
<!-- .at-body -->
</div>
</body>
</html>

