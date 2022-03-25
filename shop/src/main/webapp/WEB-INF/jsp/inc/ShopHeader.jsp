<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import ="com.kh.shop.UserVO" %>

<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">

<link rel="stylesheet" href="/css/header.css">
<link rel="stylesheet" href="/css/main.css">
<link rel="stylesheet" href='/css/default.css'>
<link rel="stylesheet" href='/css/bootstrap.min.css' type="text/css" class="thema-mode">
<link rel="stylesheet" href='/css/default_layout.css' type="text/css" class="default_layout">
<link rel="stylesheet" href="/css/detail.css">
<link rel="stylesheet" href="/css/login.css">
<link rel="stylesheet" href='/js/lib/jquery-ui-1.13.1/jquery-ui.css'>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com/">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

<title>KH SHOP</title>
<script type="text/javascript" src='/js/jquery-1.11.3.min.js'></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
<script src="/js/cookie.js" type="text/javascript" ></script>
<script src="/js/signup.js" type="text/javascript" ></script>
<script src="/js/placeholders.min.js"></script>
<script src="/js/jquery.mobile.swipe.min.js"></script>
<script type="text/javascript" src='/js/lib/jquery-ui-1.13.1/jquery-ui.js'></script>
<script type="text/javascript" src="/js/main.js" charset="utf-8"></script>
<script type="text/javascript" src="/js/util.js" charset="utf-8"></script>
<script type="text/javascript" src="/js/common.js" charset="utf-8"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script>
	var login_success = false;
	var login_id = "";
	var user_name = "";
	var user_id = null;
</script>

<%
	UserVO userVO = (UserVO)session.getAttribute("UserVO"); 
    if(userVO != null){
%>	    	
   	<script>
   		login_success = true;
   		user_id = '<%= userVO.getUserId() %>'
   		console.log('샵헤더에서 유저아이디 : ' + user_id);
   		login_id = '<%= userVO.getLoginId() %>'
   		console.log('샵헤더에서 로그인아이디 : ' + login_id);
   		user_name = '<%= userVO.getUserName() %>'
   		console.log('샵헤더에서 유저이름 : ' + user_name);
   	</script>
   <% }else { %>
   	<script>
   		login_success = false;
   	</script>
<% } %>  
<!-- Menu -->
<nav class="at-menu">
	<!-- PC Menu -->
	<div class="pc-menu">
		<div class="nav-visible">
			<div class="at-container">
				<!-- .header logo -->
				<div class="header-top">
					<div class="header-logo nav-height">
						<a href="/main.do"> <img src="/images/logo.jpg" srcset="/images/logo.svg" alt="KH SHOP" />
						</a>
					</div>
					<!-- .header-logo end-->
	
					<c:set var="class_active_1" value="" scope="request" />
					<c:set var="class_active_2" value="" scope="request" />
					<c:set var="class_active_3" value="" scope="request" />
					<c:set var="class_active_4" value="" scope="request" />
					<c:set var="class_active_5" value="" scope="request" />
					<c:set var="class_active_6" value="" scope="request" />
					<c:set var="class_active_7" value="" scope="request" />
					<c:set var="class_active_8" value="" scope="request" />
					<c:choose>
						<c:when test="${category_id eq '1'}">
							<c:set var="class_active_1" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '2'}">
							<c:set var="class_active_2" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '3'}">
							<c:set var="class_active_3" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '4'}">
							<c:set var="class_active_4" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '5'}">
							<c:set var="class_active_5" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '6'}">
							<c:set var="class_active_6" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '7'}">
							<c:set var="class_active_7" value="list-item__tab--active" scope="request" />
						</c:when>
						<c:when test="${category_id eq '8'}">
							<c:set var="class_active_8" value="list-item__tab--active" scope="request" />
						</c:when>
					</c:choose>
					
					<div id="div_login" class="nav-top nav-float nav-slide">
						<ul class="menu-ul">
							<li id="li_memberPrac" class="menu-li">
								<a class="menu-a nav-height" href="#"> 반갑습니다.</a>
							</li>
							<li id="li_logout" class="menu-li">
	 							<a class="menu-a nav-height" href="/logout.do">로그 아웃</a>
							</li>
							<li id="li_orderlist" class="menu-li">
	 							<a class="menu-a nav-height" href="/orderList.do">주문 목록</a>
							</li>
							
							<li id="li_login" class="menu-li">
								<a class="menu-a nav-height" href="/login.do"> 로그인</a>
							</li>
							<li id="li_join" class="menu-li">
								<a class="menu-a nav-height" href="/signUp.do"> 회원가입</a>
							</li>
							<li id="li_cart" class="menu-li">
	 							<a class="menu-a nav-height" href="/cart.do">장바구니</a>
							</li>
						</ul>
					</div>
				</div>
				<div id="nav-menu" class="nav-menu">
					<ul class="list_main_menu">
						<li id="li_category" class="list-item__tab ${class_active_1}">
							<a class="menu-a nav-height" href="/main.do?category=1&category_nm=BEST"> 
								<span>BEST</span>
							</a>
						</li>

						<li id="li_category" class="list-item__tab ${class_active_2}">
							<a class="menu-a nav-height" href="/main.do?category=2&category_nm=NEW7"> 
								<span>NEW 7%</span>
							</a>
						</li>

						<li id="li_category" class="list-item__tab ${class_active_3}">
							<a class="menu-a nav-height" href="/main.do?category=3&category_nm=OUTER"> 
								<span>OUTER</span>
							</a>
						</li>

						<li id="li_category" class="list-item__tab ${class_active_4}">
							<a class="menu-a nav-height" href="/main.do?category=4&category_nm=T-SHIRTS">
							 	<span>T-SHIRTS</span>
							 </a>
						</li>

						<li id="li_category" class="list-item__tab ${class_active_5}">
							<a class="menu-a nav-height" href="/main.do?category=5&category_nm=SHIRTS"> 
								<span>SHIRTS</span>
							</a>
						</li>

						<li id="li_category" class="list-item__tab ${class_active_6}">
							<a class="menu-a nav-height" href="/main.do?category=6&category_nm=PANTS"> 
								<span>PANTS</span>
							</a>
						</li>

						<li id="li_category" class="list-item__tab ${class_active_7}">
							<a class="menu-a nav-height" href="/main.do?category=7&category_nm=SHOES"> 
								<span>SHOES</span>
							</a>
						</li>
						<li id="li_category" class="list-item__tab ${class_active_8}">
							<a class="menu-a nav-height" href="/main.do?category=8&category_nm=ACC"> 
								<span>ACC</span>
							</a>
						</li>
					</ul>
				</div>

				<!-- .nav-top -->
			</div>
			<!-- .nav-container -->
		</div>
		<!-- .nav-visible -->
	</div>
	<!-- .pc-menu -->
	<!-- 				</nav> -->
</nav>
<!-- .at-menu -->


