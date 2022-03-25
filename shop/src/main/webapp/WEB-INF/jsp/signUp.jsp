<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import ="com.kh.shop.UserVO" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
<link rel="stylesheet" href="/css/signup.css">
</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
<div class="at-html">
<script src="/js/signup.js"></script>
<c:import url="./inc/ShopHeader.jsp"></c:import>

		<div class="at-wrapper">
			<!-- Menu -->
			<div class="at-body">
				<div class="main_wrap">
					<!-- block content  -->
					<div class="at-container">
						<div class="at-content" style="padding-top: 0px !important;">
							<div class="page-wrap scroll-touch">
								<div class="col-13" style="display:none;">
									<div class="alert alert-danger" style="font-weight:bold;">
							        </div>
								</div>

								<div class="delivery_header">
									<center>
										<h1 class="delivery_title back">회원 가입 </h1>
									</center>
								</div>
								<!-- content-->
								<div class="content">

									<div class="delivery_input">
										<ul class="inp">
											<li>
												<label for="login_id" class="label"> 
													<img src="/images/icon/required.gif" alt="필수 항목" />아이디
												</label> 
												<input type="text" name="name" id="login_id" placeholder="아이디" required maxlength="20" value="" 
													   style="display: inline-block; width: 38%; ime-mode: disabled; text-align: left;">
												<input type="hidden" id="chk_login_id_ok" value="">
												<button id="btn_idCheck" style="display: inline-block; vertical-align: baseline; width: 26%; font-size: 14px;
														margin-left: 3px; margin-right: 0px; border: 1px solid #ccc; font-weight: 700; height: 40px;" >
													중복확인
												</button> 
												<span class="error_next_box" style="display: none;" ></span>
											</li>
											
											<li>
												<label for="password1" class="label"> 
													<img src="/images/icon/required.gif" alt="필수 항목" />비밀번호
												</label> 
												<input type="password" name="name" id="login_pwd"
													placeholder="비밀번호"  required
													maxlength="20" value="" style="display: inline-block; width: 65%; text-align: left;"
													autocomplete="new-password"> 
												<span class="error_next_box" style="display: none;" ></span>
											</li>
											<li>
												<label for="password2" class="label">&nbsp;</label>
												<input type="password" name="name" id="login_pwd2"
													placeholder="비밀번호 재확인" 
													required maxlength="20" value="" style="display: inline-block; width: 65%; text-align: left;"
													autocomplete="new-password">
											</li>
											<li>
												<label for="name" class="label"> 
													<img src="/images/icon/required.gif" alt="필수 항목" />이름
												</label> 
												<input type="text" name="name" id="user_name" placeholder="이름" id="user_nm"
													   required maxlength="20"
												       value="" style="display: inline-block; width: 65%; ime-mode: active; text-align: left;">
											</li>
											<li>
												<label for="user_birth" class="label"> 
													<img src="/images/icon/required.gif" alt="필수 항목" />생년월일
												</label> 
												<input type="tel" name="user_birth" id="user_birth"
													placeholder="생년월일 8자리 (예: 20220101)" required maxlength="8" 
													value="" style="display: inline-block; padding: 5px; width: 65%;">
												<span class="error_next_box" style="display: none;" ></span>
											</li>
											<li>
												<label for="phone" class="label">
													<img src="/images/icon/required.gif" alt="필수 항목" />전화번호
												</label> 
												<input type="tel" name="user_phone" id="user_phone" placeholder="전화번호 (-생략해주세요)" required maxlength="20" 
													value="" style="display: inline-block; width: 65%; text-align: left;">
											</li>
											<li>
												<label for="email" class="label">E-Mail</label> 
												<input type="text" id="user_email" placeholder="E-Mail" value=""
													style="display: inline-block; width: 65%; text-align: left;">
											</li>
										</ul>
										<input type="hidden" id="sale_tp" value="P">
									</div>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<img src="/images/icon/required.gif" alt="필수 항목" /> 
										표시는 필수 입력 항목입니다.
									</p>
									<div class="bottom">
										<button type="submit" id="btn_join" action="/signUpAction.do" class="bbtn">
											가입하기
										</button>
									</div>
								<!-- content-->
							</div>
							<!--  .page-wrap -->
						</div>
						<!-- .at-content -->
					</div>
					<!-- .at-container -->

					<!-- 가입 후 자동 로그인 -->
					<form style="display: none" action="/login/" method="POST"
						id="form" name="form">
						<input type="hidden" id="login_username" name="username" value="" />
						<input type="hidden" id="login_password" name="password" value="" />
					</form>

					<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />

					<!-- endblock  -->
				</div>
			</div>
			<!-- .at-body -->

		</div>
		<!-- .at-wrapper -->
	</div>
	<!-- .wrapper -->
</div>
<!-- .at-html -->
<c:import url="./inc/ShopFooter.jsp"></c:import>
</body>
</html>

