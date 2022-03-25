
$(function() {
	let cookielist = $util.getCookie("cart");	//"카트"쿠키에서의 값(String)
	let cartprod = {};
	if (cookielist != undefined) {
		cartprod = JSON.parse(cookielist);		//"카트"쿠키에서의 값을 객체로 변환
	}

	//쿠키와 DB의 저장된 값을 비교후 새로 저장할 배열(remakedlist)
	let remakedlist = [];

	//결제정보란의 주문상품수
	let totalqty = $(".format-amount").find("strong");
	//결제정보란의 주문금액
	let totalprice = $(".format-price").find("strong");
	//결제정보란의 전체 주문금액
	let totalsummary = $(".summary");
	
	function chkcartall() {
		if(remakedlist.length > 0){
			$('#select_cart_all').show();
		} else {
			$('#select_cart_all').hide();
		}	
	}
	
	$.each(cartprod, function(index, element) {		//쿠키에 있는 장바구니를 새로만들 장바구니로 넣겠다
		remakedlist.push(element);
	});
	//다시 문자열형변환
	let str = JSON.stringify(remakedlist);
	console.log("str : " + str);
	//새로만든 장바구니를 쿠키에 새로저장
	$util.setCookie("cart", str);

	// List --> Html 로 append
	try {
		let basketlist = $('#basketlist');
		chkcartall();
		$.each(remakedlist, function(index, element) {
			console.log("remakedlist uuid: " + element.uuid);
			try {
				let html = makeHtml(element.uuid, element.cart_img, element.prod_id, element.prod_nm, element.color_nm, element.size_nm,
					element.prod_sale_price, element.qty);
				basketlist.append(html);
			} catch (error0) { }
		});

	} catch (error) { console.log("error:" + error); }

	//스크롤에 따른 박스 위치 지정
	let $wind = $(window),
		cartinfo = $('.cart_info');

	$wind.scroll(function() {
		let pos = cartinfo.offset().top + $('#basketlist').height() - $('#cart_order').height();

		let botheight = pos - cartinfo.offset().top;

		if (pos - 67 > $wind.scrollTop() && $wind.scrollTop() >= 295) {
			$('.bottom').css({ 'postion': '', 'top': '', 'left': '' });
			$('#cart_order').addClass('fixed');
			$('#cart_order').removeClass('bottom');
		} else if ($wind.scrollTop() >= pos - 67) {
			$('#cart_order').addClass('bottom');
			$('.bottom').css({ 'postion': 'absolute', 'top': pos - 16 });
		} else {
			$('.bottom').css({ 'postion': '', 'top': '', 'left': '' });
			$('#cart_order').removeClass('fixed');
			$('#cart_order').removeClass('bottom');
		}
	});
	//스크롤에 따른 박스 위치 지정 끝

	//장바구니 삭제
	$(document).on('click', '#btn_cart_del', function() {

		console.log("$(this).context.dataset.no : " + $(this).context.dataset.no);
		let uuid = $(this).context.dataset.no;
		let dataSet = {};

		$('#basketlist').find('#cartitem_' + uuid).remove();

		console.log("장바구니 삭제전 remakedlist 길이: " + remakedlist.length);
		$.each(remakedlist, function(index, element) {
			try {
				if (element.uuid == uuid) {
					console.log("장바구니 삭제할 remakedlist uuid : " + element.uuid);
					remakedlist.splice(index, 1);
					return true;
				}
			} catch (error1) {
				console.log(error1);
			}
		});

		console.log("장바구니 삭제후 remakedlist 길이: " + remakedlist.length);

		let strcart = JSON.stringify(remakedlist);

		console.log('strcart : ' + strcart);

		$util.setCookie("cart", strcart);
		chkcartall();
		chk();
		//장바구니 삭제 끝
	});

	function makeHtml(uuid, productImg, productId, productName, colorName, sizeName, productSalePrice, qty) {

		let html = "";
		let totalPrice = productSalePrice * qty;

		html += "<li id='cartitem_" + uuid + "'  class='cart--basket type_minishop' >";
		html += "	<div class='cart--basket_body'>";
		html += "		<ul class='order--list'>";
		html += "			<li class='order--idx'>";
		html += "				<div class='item'>";
		html += "					<div class='item_check'>";
		html += "						<span class='input_custom'>";
		html += "							<input type='checkbox' id='prodSelect' data-no='" + uuid + "' name ='prodSelect' title='상품선택' class='input__checkbox'>";
		html += "						</span>";
		html += "					</div>";
		html += "					<div class='item_img'>";
		html += "						<a href='productDetail.do?productid=" + productId + "'>";
		html += "							<img src='/images/" + productImg + "' alt='상품이미지'>";
		html += "						</a>";
		html += "					</div>";
		html += "					<div class='item_info'>";
		html += "						<dl class='unit--item first'>";
		html += "							<dd class='unit--item_desc'>";
		html += "								<div class='section item_title'>";
		html += "									<a href='productDetail.do?productid='" + productId + "'>";
		html += "										<span class='item_name'>";
		html += "											" + productName + "";
		html += "										</span>";
		html += "									</a>";
		html += "									<span class='text__delivery-make'>";
		html += "										<strong class='text__object'></strong>";
		html += "										<span class='text__condition'></span>";
		html += "									</span>";
		html += "								</div>";
		html += "								<div class='section item_option'>";
		html += "									<ul>";
		html += "										<li>";
		html += "											<span class='option_value'>";
		html += "												<span>색상 : " + colorName + "</span>";
		html += "												<br><br>";
		if (sizeName != undefined && sizeName != "") {
			html += "												<span>사이즈 : " + sizeName + "</span>";
		}
		html += "											</span>";
		html += "										</li>";
		html += "									</ul>";
		html += "								</div>";
		html += "								<div class='section item_qty'>";
		html += "									<div class='item_qty_wrap'>";
		html += "										<button class='cntdown' data-no='" + uuid + "' value='' type='button'><img src='/images/icon/minus.png'></button>";
		html += "										<span class = 'itemcnt' value='" + qty + "'>" + qty + " </span>";
		html += "										<button class='cntup' data-no='" + uuid + "' value='' type='button'><img src='/images/icon/plus.png'></button>";
		html += "									</div>";
		html += "								</div>";
		html += "								<div class='section item_price'>";
		html += "									<span class='format-price'>";
		html += "										<span class='box__format-amount'>";
		html += "											<strong class='text__value'>" + $util.get_commas(productSalePrice) + "</strong>";
		html += "											<span class='text__unit'>원</span>";
		html += "										</span>";
		html += "									</span>";
		html += "									<span class='price_desc'></span>";
		html += "								</div>";
		html += "								<div class='section item_del'>";
		html += "									<button id ='btn_cart_del' value='' data-no='" + uuid + "' class='btn_del sprite__cart' type='button'>";
		html += "										<img src='/images/icon/X.png' style='width : 12px;'>";
		html += "									</button>";
		html += "								</div>";
		html += "							</dd>";
		html += "						</dl>";
		html += "						<div class='div_cart_price'>";
		html += "							<span class='total_text'>총 가격</span>";
		html += "							<span class = 'total_price cart_price'> ";
		html += "								<strong class='str_total_price'>" + $util.get_commas(totalPrice) + " </strong> ";
		html += "								<span class='text__unit'>원</span> ";
		html += "							</span>";
		html += "						</div>";
		html += "					</div>";
		html += "				</div>";
		html += "			</li>";
		html += "		</ul>";
		html += "	</div>";
		html += "</li>";


		return html;
	}
	
	//체크박스 전체 선택/해제
	$("#item_all_select").click(function() {
		if($(this).is(":checked")){ 
			$("input[name=prodSelect]").prop("checked", true);
		}
		else {
			$("input[name=prodSelect]").prop("checked", false);
		}
		chkcartall();
		chk();
	});
	
	$("input[name=prodSelect]").click(function() {
		var total = $("input[name=prodSelect]").length;
		var checked = $("input[class='input__checkbox']:checked").length;

		if (total-1 == checked) {
			$("#item_all_select").prop("checked", true);
		} else {
			$("#item_all_select").prop("checked", false);
		}
		
		chkcartall();
		chk(); 
	});
	//체크박스 전체 선택/해제 끝
	
	// 상품개수감소
	$('.cntdown').click(function() {
		let itemqty = $(this).closest('.item_qty_wrap').find("span");
		let uuid = $(this).context.dataset.no;
		let price = $(this).closest('.unit--item_desc').find(".item_price").find("strong");
		let total = $(this).closest('.item_info').find(".div_cart_price").find("strong");

		if (itemqty.html() == 1) {
			alert('상품은 최소 한개 이상 주문해야 합니다.');
			return;
		}
		$.each(remakedlist, function(index, item) {
			if (item.uuid == uuid) {
				item.qty -= 1;
				console.log("숫자 감소 후 : " + item.qty);
				itemqty.html(item.qty);
				total.html($util.get_commas(item.qty * item.prod_sale_price));
				return true;
			}
		});

		let strcart = JSON.stringify(remakedlist);

		console.log('strcart : ' + strcart);
		console.log('price : ' + $(this).closest('.unit--item_desc').find(".item_price").find("strong").html());
		$util.setCookie("cart", strcart);
		//상품 감소 쿠키에 적용
		chk();

	});
	//상품개수감소 함수 끝	

	// 상품개수증가
	$('.cntup').click(function() {
		let itemqty = $(this).closest('.item_qty_wrap').find("span");
		let uuid = $(this).context.dataset.no;
		let price = $(this).closest('.unit--item_desc').find(".item_price").find("strong");
		let total = $(this).closest('.item_info').find(".div_cart_price").find("strong");

		if (itemqty.html() > 99) {
			alert('백개 이하로 선택해주세요.');
			return;
		}
		$.each(remakedlist, function(index, item) {
			if (item.uuid == uuid) {
				item.qty += 1;
				console.log("숫자 증가 후 : " + item.qty);
				itemqty.html(item.qty);
				total.html($util.get_commas(item.qty * item.prod_sale_price));
				return true;
			}
		});

		let strcart = JSON.stringify(remakedlist);

		console.log('strcart : ' + strcart);

		$util.setCookie("cart", strcart);
		//상품 증가 쿠키에 적용
		chk();
	});
	//상품개수증가 함수 끝

	//총 주문금액 변경함수
	function chk() {
		let chkbox = {};
		chkbox = $('input[class="input__checkbox"]');
		console.log(chkbox);

		let boxqty = 0;
		let boxprice = 0;

		$.each(remakedlist, function(index, item) {

			if (chkbox[index].checked) {
				console.log("chkbox[index].is(':checked') : " + chkbox[index].checked);
				boxqty += item.qty;
				boxprice += Number(item.prod_sale_price) * item.qty;
				return true;
			} else {
				return true;
			}
		});
		totalqty.html(boxqty);
		totalprice.html($util.get_commas(Number(boxprice)));
		totalsummary.html($util.get_commas(Number(boxprice)));
	}
	//총 주문금액 변경함수 끝

	//날짜생성
	function nowdt() {
		let now = new Date();

		let nowdate = new String(now.getDate());
		nowdate = nowdate >= 10 ? nowdate : '0' + nowdate;

		let nowyear = now.getFullYear();

		let nowmonth = new String(now.getMonth() + 1);
		nowmonth = nowmonth >= 10 ? nowmonth : '0' + nowmonth;

		let day = nowyear + "-" + nowmonth + "-" + nowdate;
		return day;
	}
	//날짜 생성 끝

	//구매하기 버튼 클릭시 함수
	$('.btn_submit').click(function() {
		console.log('구매하기 버튼클릭');
		dataSet = {};
		let chkbox = {};
		chkbox = $('input[name="prodSelect"]');
		if (totalqty.html() == '0') {
			alert('선택된 물건이 없습니다.');
			return;
		} else {
			if (!login_success) {
				alert('로그인이 필요한 서비스입니다.');
				location.href = "login.do";
				return;
			}
		}
		let rtn = confirm('상품 구매를 진행하시겠습니까?');
		//주문한다 클릭시

		let tmpcart = [];
		if (rtn) {

			$.each(remakedlist, function(index, item) {
				if (chkbox[index].checked) {
					let tmp = {};
					tmp.uuid = item.uuid;
					tmp.prod_id = item.prod_id;
					tmp.color_nm = item.color_nm;
					tmp.prod_img = item.cart_img;
					tmp.prod_nm = item.prod_nm;
					if (item.size_nm != undefined || item.size_nm != "") {
						tmp.size_nm = item.size_nm;
					}
					tmp.qty = item.qty;
					tmp.prod_sale_price = item.prod_sale_price;
					tmpcart.push(tmp);
					console.log('tmpcart : ' + tmpcart);
				} else {
					return true;
				}

			});
			
			let orderstr = JSON.stringify(tmpcart);
			console.log('orderstr : ' + orderstr)
			$util.setCookie("order", orderstr);

			location.href = "orderPay.do";
		} else
			return;

	});
	//구매하기 버튼 클릭시 함수 끝
});
//ready