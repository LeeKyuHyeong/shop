<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
<link rel="stylesheet" href="/css/order.css">
</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
<div class="at-html">
<c:import url="./inc/ShopHeader.jsp"></c:import>
<script src="/js/order.js"></script>
<script>
	console.log("주문내역 페이지에서 userid : " + user_id);
	
	let orderedlist = '${orderedList}';
	console.log("orderlistpage : " + orderedlist);
</script>
	<div class="at-body">
		<div class="main_wrap">
			<!-- block content  -->
			<div id="top_tit">
				<h3>최근 주문 내역</h3>
			</div>
			<div class="ordertbl_wrap">
				<table class="ordertbl">
					<tr class="order_tr_first">
						<td class = "order_td_first" width=20%>날짜
						</td>
						<td class = "order_td_first" width=50%>주문정보
						</td>
						<td class = "order_td_first" width=10%>주문금액
						</td>
						<td class = "order_td_first" width=20%>주문상태
						</td>
					</tr>
				</table>
			</div>
			<!-- end block  -->
		</div>
		<!-- end main_wrap -->
	</div>
	<!-- end at-body -->
</div>
<c:import url="./inc/ShopFooter.jsp"></c:import>
</body>
</html>