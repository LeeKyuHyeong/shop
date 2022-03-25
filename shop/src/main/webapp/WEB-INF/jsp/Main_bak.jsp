<!DOCTYPE html>
<html>
<head>

<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" href="../css/content.css">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>KH SHOP</title>
</head>
<body>

	<c:import url="./inc/ShopHeader.jsp"></c:import>
	
	<div class="contents">
		<section class="main-sec">
			<div class="cont-head">
				<h3>
					<span>KH SHOP</span>
				</h3>
				<h6>KH SHOP의 아이템들을 만나보세요</h6>
			</div>
	
				<div class="item-wrap"> 
	
				<div class="item-cont">
					<c:forEach var="product" items="${productList}" varStatus="status">
						<dl class="item-list">
							<dt class="thumb">
								<a href="MainDetail.do"> <img
									src="/images/${product.productImg}" alt="상품 썸네일 이미지"></a>
							</dt>
							<dd class="prd-info">
								<dl class="prd-name-box">
									<div class="prod-review">
										<span class="review-cnt"
											data-product-code="142808" data-format="리뷰  : {{{count}}}"
											data-hide-if-zero="1">리뷰 : 491</span>
									</div>
									<dt class="prd-name">
										<a href="#">
											${product.productName} 
										</a>
									</dt>
									<dd class="prd-subname">
										<p>1~2(95~110)</p>
									</dd>
								</dl>
								<div class="prd-icon">
									<span class="MK-product-icons"></span>
								</div>
								<div class="prd-price-box">
									<div class="prd-price">
	
										<p class="price1 e no-dis">
											<span class="check_price_consumer">${product.productPrice}</span>원
										</p>
										<p class="price2 e no-dis">
											<span class="check_price_sell">${product.productSalePrice}</span>원
										</p>
									</div>
								</div>
							</dd>
						</dl>
					</c:forEach>
	
				</div>
	
			</div>
	
		</section>
	</div>
	
	<c:import url="../jsp/main/inc/ShopFooter.jsp"></c:import>
</body>
</html>