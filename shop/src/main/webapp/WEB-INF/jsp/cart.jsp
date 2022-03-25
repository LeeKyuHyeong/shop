<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
<link rel="stylesheet" href="/css/cart.css">
</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
<div class="at-html">
<c:import url="./inc/ShopHeader.jsp"></c:import>
<script type="text/javascript" src="/js/cart.js"></script>
	<!-- Menu -->
<script>
	//let savedlist = '${cartList}';
	//console.log("cartpage : " + savedlist);
</script>
	<div class="at-body">
		<div class="main_wrap">
			<!-- block content  -->
			<div id="cart_head">
				<h2>장바구니</h2>
			</div>
			
			<div id="cart-wrap">
				<div id="cart_list" class="cartlist">
					<ul id="select_cart_all" style="display:none;">
						<li class="select_all" >
							<span class="input_custom">
								<input type="checkbox" id="item_all_select" title="장바구니 상품 전체" name="prodSelect" class="input__checkbox sprite__cart" >
								<label for="item_all_select" >전체선택</label>
							</span>
						</li>
					</ul>
					<ol id = "basketlist" class="basket_list_group">
					</ol>
				</div>
				
				<div class = "cart_info">
					<div id="cart_order" class="cart_total">
						<div class="order"  >
							<div class="order_title order_local"  >
								<strong class="text__title" >결제정보</strong>
								<button class="order_delivery"></button>
							</div>
							<div class="order_info">
								<ul class="receipt_list_box">
									<li class="list">
										<span class="label">주문상품수</span>
										<span class="format-amount">
											<span class="box__format-amount">
												<strong class="text__value qty">0</strong>
												<span class="text__unit">개</span>
											</span>
										</span>
									</li>
									<li class="list">
										<span class="label">주문금액</span>
										<span class="format-price">
											<span class="box__format-amount">
												<strong class="text__value price" >0</strong>
												<span class="text__unit" >원</span>
											</span>
										</span>
									</li>
								</ul>
							</div>
							<div class="order_summary">
								<strong class="label">전체 주문금액</strong>
								<span class="format-price">
									<span class="box__format-amount">
										<strong class="text__value summary">0</strong>
										<span class="text__unit">원</span>
									</span>
								</span>
							</div>
							<div class="order_action fixed">
								<div class="flex_wrap">
									<div class="flex add_line">
									</div>
									<div class="flex">
										<button class="btn_submit" type="button">
											<span class="text">구매하기</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			<!-- end block  -->
		
		<!-- end main_wrap -->
	</div>
	<!-- end at-body -->
</div>
<c:import url="./inc/ShopFooter.jsp"></c:import>
</body>
</html>