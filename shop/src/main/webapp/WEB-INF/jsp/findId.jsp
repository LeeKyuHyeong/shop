<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<link rel="stylesheet" href="/css/find.css">
<head>
</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
<c:import url="./inc/ShopHeader.jsp"></c:import>
<script src="/js/find.js"></script>
<script>
	var err_msg = '${err_msg}';
	console.log("err_msg:" + err_msg);
</script>
	<!-- Menu -->
	<div class="at-body">
		<div class="main_wrap">
			<!-- block content  -->

			<div class="row mt-5">
				<div class="col-12">
					<div class="alert alert-danger">
						${err_msg}
					</div>
				</div>
			</div>
			
				<form method="post" class="findIdForm" id="findIdForm" name="findIdForm" action ="/findIdAction.do">
					<input type="hidden" name="next" value="{{next}}" />
					<h2>아이디 찾기</h2>
					<div class="nmForm">
						<input type="text" id="userName" name=userName class="name" value=""
							placeholder="가입시 등록한 이름">
					</div>
					<div class="phoneForm">
						<input type="tel" id="userPhone" name="userPhone" class="phone"
							value="" placeholder="가입시 등록한 전화번호">
					</div>
					<button id="btn_id_find" class="btnfind" type="button">찾기</button>
					<div class="find_rel">
						<a id="btn_popup2" class="link_rel" href="findPwd.do">비밀번호 찾기</a>
					</div>
				</form>
			
			<!-- end block  -->
		</div>
	</div>
	<!-- .at-body -->
</body>
</html>