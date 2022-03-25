<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
	<div class="at-html">
		<div id="thema_wrapper" class="wrapper ko">
			<div class="at-wrapper">

				<c:import url="./inc/ShopHeader.jsp"></c:import>

				<!-- Menu -->

				<div class="at-body">
					<div class="main_wrap">

						<!-- block content  -->
						<c:if test="${category == null && category_nm == null}">
							<div class="cont-head">
								<h3>
									<span>KH SHOP</span>
								</h3>
								<h6>KH SHOP의 아이템들을 만나보세요</h6>
							</div>
						</c:if>

						<div class="item-wrap">

							<c:forEach var="product" items="${productList}" varStatus="status">
								<c:if test="${status.index % 4 == 0}">
									<div class="item-cont">
								</c:if>

								<dl class="item-list">
									<dt class="thumb">
										<a href="productDetail.do?productid=${product.productId }">
											<img src="/images/${product.productImg}" alt="상품 썸네일 이미지">
										</a>
									</dt>
									<dd class="prd-info">
										<dl class="prd-name-box">
											<div class="prod-review">
												<span class="review-cnt" data-product-code="142808" data-format="리뷰  : {{{count}}}" data-hide-if-zero="1">
												리뷰 : 0</span>
											</div>
											<dt class="prd-name">
												<a href="#"> ${product.productName} </a>
											</dt>
										</dl>
										<div class="prd-icon">
											<span class="MK-product-icons"></span>
										</div>
										<div class="prd-price-box">
											<div class="prd-price">

												<p class="price1 e no-dis">
													<span class="check_price_consumer"><fmt:formatNumber value="${product.productPrice}" pattern="#,###" />
													</span>원
												</p>
												<p class="price2 e no-dis">
													<span class="check_price_sell"><fmt:formatNumber value="${product.productSalePrice}" pattern="#,###" /> 
													</span>원
												</p>
											</div>
										</div>
									</dd>
								</dl>

								<c:if test="${status.index  % 4 == 3 || status.index == fn:length(productList) - 1}">
									</div>
								</c:if>

						</c:forEach>
					</div>
					<!-- end block  -->

				</div>
				<!-- end main_wrap -->
			</div>
			<!-- .at-body -->
			<c:import url="./inc/ShopFooter.jsp"></c:import>

		</div>
	</div>
	</div>
</body>
</html>