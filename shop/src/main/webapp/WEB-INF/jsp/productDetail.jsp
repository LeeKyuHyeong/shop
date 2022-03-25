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
<c:import url="./inc/ShopHeader.jsp"></c:import>
<script type="text/javascript" src="/js/detail.js"></script>

<!-- Menu -->
<script>
	let productSalePrice = ${product.productSalePrice};
</script>
<c:choose>
	<c:when test="${user_id eq null}">
		<input type="hidden" id="userid" value="cart">		
	</c:when>
	<c:otherwise>
		<input type="hidden" id="userid" value="${user_id}">	
	</c:otherwise>
</c:choose>
<input type="hidden" id="prodid" value="${product.productId }">
<input type="hidden" id="cartimg" value="${product.thumbImg }">
<input type="hidden" id="prodname" value="${product.productName }">
<input type="hidden" id="prodprice" value="${product.productPrice }">
<input type="hidden" id="prodsaleprice" value="${product.productSalePrice }">
	<div class="at-body">
		<div class="main_wrap">
	
			<!-- block content  -->
			<div id="contentWrapper">
				<div id="content">
					<div class="container sub-container">
	
						<div class="contents-body">
							
							<div class="detail-wrap">
								<!-- thumbnail image container -->
								<div class="detail-thumb-wrap">
									<div class="thumb">
										<img class="detail_image" id="lens_img" src="/images/${product.thumbImg}" 
											border="0" width="300" alt="썸네일">
									</div>
									<ul>
										<c:forEach var="img" items="${imageList}" varStatus="status">
											<c:if test="${status.index < 5}">
												<li><img src="/images/${img.imagePath}"></li>
											</c:if>
										</c:forEach>
									</ul>
								</div>
	
							</div>
							<!-- 상품정보 박스 컨테이너 시작 -->
							<div class="goods-info-box-wrap">
								<!-- 상품정보 박스(따라다니기) 시작 -->
								<div class="goods-info-box">
									<div class="goods-info-box-inner">
										<form name="form1" method="post" id="form1" action="/cart.do">
	
											<div class="goods-info">
												<div class="info-tit-wrap">
													<h3 class="goods-title">${product.productName}</h3>
													<div class="goods-description">
														${product.productDescription}
													</div>
													<div class="icon-box"></div>
												</div>
												<div class="table-opt">
													<table summary="판매가, 주문수량, 옵션, 사이즈">
														<caption>상품 옵션</caption>
														<colgroup>
															<col width="90">
															<col width="*">
														</colgroup>
														<tbody>
															<tr>
																<th scope="row">
																	<div>소비자가</div>
																</th>
																<td class="price">
																	<div>
																		<strike>
																			<fmt:formatNumber value="${product.productPrice}" pattern="#,###" />
																		</strike>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<div>판매가</div>
																</th>
																<td class="price">
																	<div>
																		<fmt:formatNumber value="${product.productSalePrice}" pattern="#,###" />
																	</div>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<div class="opt-wrap" style="margin-top: 0">
																		
																		<c:if test="${fn:length(productColor) > 0}">
																			<dl>
																				<dt>색상 선택</dt>
																				<dd>
																					<select id="selColor" name="optionlist" label="색상선택" require="Y" class="basic_color">
																						<option value="">옵션 선택</option>
																						<c:forEach var="color" items="${productColor}" varStatus="status">
																								<option value="${color.colorName}" title="${color.colorName}">
																									${color.colorName}
																								</option>
																						</c:forEach>
																					</select>
																				</dd>
																			</dl>
																		</c:if>
																		
																		<c:if test="${fn:length(getSize) > 0}" >
																			<dl>
																				<dt>사이즈 선택</dt>
																				<dd>
																					<select name="optionlist" id="selSize" label="사이즈선택" require="Y" class="basic_size">
																						<option value="">사이즈 선택</option>
																					</select>
																				</dd>
																		</dl>
																		</c:if>
																		
																		<div class='section item_qty'>
																			<div class='item_qty_wrap'>
																				<button class='cntdown' data-no="" value='' type='button'><img src='/images/icon/minus.png'></button>
																				<span class = 'itemcnt' value=''> 1 </span>	
																				<button class='cntup' data-no='' value='' type='button'><img src='/images/icon/plus.png'></button>
																			</div>
																		</div>
																	</div>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<div class="MK_optAddWrap">
																			<div id="MK_innerOptTotal">
																				<span class="MK_txt-total">총 상품 금액</span> 
																				<strong class="MK_total" id="MK_p_total"></strong> <%--<fmt:formatNumber value="${product.productSalePrice}" pattern="#,###" /> --%>
																				<span class="MK_txt-won">원</span>
																			</div>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
	
												<div class="prd-btns">
													<button id="cartBtn" type="button">
														<span class="tb_tagManagerCart">장바구니</span>
													</button> 
												</div>
	
											</div>
										</form>
									</div>
								</div>
								<!-- / 상품정보 박스(따라다니기) 끝 -->
							</div>
							<!-- /상품정보 박스 컨테이너 끝-->
						</div>
					</div>
				</div>
			</div>
			<!-- end block  -->
		</div>
		<!-- end main_wrap -->
	</div>
	<!-- .at-body -->
</div>
<c:import url="./inc/ShopFooter.jsp"></c:import>
</body>
</html>