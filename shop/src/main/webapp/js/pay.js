$(function(){
	
	let startPhone = $('#xo_id_buyer_phone_number').val();
	var startformat = phoneNumber(startPhone);
	$('#xo_id_buyer_phone_number').val(startformat);
	
	let today = new Date();
	let today_year = today.getFullYear();
	let today_month = today.getMonth() + 1;
	let today_date = today.getDate() + 1;
	$('.text__limit').html(today_year + "년 " + today_month + "월 " + today_date + "일");
	
	let orderstr = $util.getCookie("order");
	console.log('쿠키에서꺼낸 결제할 리스트 : ' + orderstr);
	
	let remakedlist = JSON.parse(orderstr);
	console.log("remakedlist.length : " + remakedlist.length);
	
	$('.text__count').html(remakedlist.length);

	$("#card-select7").change(function() {
		let selectopt = $('#card-select7 option:selected').html();
		$('.text__emphasis').html(selectopt);
	});
	
	$("#xo_id_refund_account_bank").change(function() {
		console.log($(this).closest('.box__control-select').find('label').html());
		let selectopt = $('#xo_id_refund_account_bank option:selected').html();
		$(this).closest('.box__control-select').find('label').html(selectopt);
		let banknm = $(this).closest('.box__control-select').find('label').html();
		
		setaccount(banknm);
	});
	
	//은행명에 따라 계좌번호 구조 변경
	function setaccount(banknm){
		console.log('은행명 : ' + banknm);
		
		if(banknm == '우리은행'){
			$('.text_account').val('1111-222-333333');
		} else if (banknm == '신한은행'){
			$('.text_account').val('111-222-333333');
		} else if (banknm == '하나은행'){
			$('.text_account').val('111-222222-33333');
		} else if (banknm == 'SC은행'){
			$('.text_account').val('111-22-333333');
		} else if (banknm == '국민은행'){
			$('.text_account').val('111111-22-333333');
		} else if (banknm == '우체국은행'){
			$('.text_account').val('000000-222-111111');
		} else if (banknm == '기업은행'){
			$('.text_account').val('111-222222-33-444');
		} else if (banknm == '농협은행'){
			$('.text_account').val('111-2222-3333-44');
		} else if (banknm == '외환은행'){
			$('.text_account').val('111-222222-333');
		} else if (banknm == '부산은행'){
			$('.text_account').val('111-2222-3333-44');
		} else if (banknm == '씨티은행'){
			$('.text_account').val('111-222222-333');
		} else if (banknm == '산업은행'){
			$('.text_account').val('1111-222-333333');
		} else if (banknm == '수협'){
			$('.text_account').val('0111-222-33333');
		} else if (banknm == '신협'){
			$('.text_account').val('0011-222-3333');
		} else if (banknm == '새마을금고'){
			$('.text_account').val('8111-222-33333-0');
		} else if (banknm == '경남은행'){
			$('.text_account').val('111-22-333333');
		} else if (banknm == '전북은행'){
			$('.text_account').val('011-222-3333');
		} else if (banknm == '산업은행'){
			$('.text_account').val('111-2222-3333-444');
		} else if (banknm == '광주은행'){
			$('.text_account').val('8011-222-333333');
		} else if (banknm == '대구은행'){
			$('.text_account').val('111-00-333333-2');
		} 
	}
	
	//결제수단 클릭시 함수
	$('a[role=tab]').click(function(){
		console.log('카드 클릭');
		let cardlist = [];
		cardlist = $('a[role=tab]');
		
		$.each(cardlist, function(index, item){
			cardlist.closest('li').removeClass('selected');
		})
		
		$(this).closest('li').addClass('selected');
		
		$(this).attr("aria-selected", true);
		
		let bank = "";
		bank = $(this).find('strong').html();
		
		if($('.box__method-cash').css('display') == 'block' && $('.box__method-creditcard').css('display') == 'none'){
			console.log('무통장입금 조작');
			$('.text_bank').html(bank);
			setaccount(bank);
		}
		if($('.box__method-creditcard').css('display') == 'block' && $('.box__method-cash').css('display') == 'none'){
			console.log('신용/체크카드 조작');
		}
	})
	//결제수단 클릭시 함수 끝
	
	//결제페이지 리스트 뿌리기
	let totalprice = 0;	
	try {
		let boxlist = $('.list__goods-view');

		$.each(remakedlist, function(index, element) {
			console.log("remakedlist uuid: " + element.uuid);
			try {
				let html = makeHtml(element.uuid, element.prod_img, element.prod_id, element.prod_nm, element.color_nm, element.size_nm,
					element.prod_sale_price, element.qty);
				boxlist.append(html);
				
				totalprice += element.prod_sale_price * element.qty;
				console.log("totalprice : " + totalprice);
				$('.text__price').html($util.get_commas(totalprice) +'원');
			} catch (error0) { }
		});

	} catch (error) { console.log("error:" + error); }
	//결제페이지 리스트 뿌리기 끝
	
	//쿠키에서 받아서 html 만들기 
	function makeHtml(uuid, productImg, productId, productName, colorName, sizeName, productSalePrice, qty) {

		let html = "";

		html += "<li class='list-item'> ";
		html += "	<div class='box__goods-info'> ";
		html += "		<div class='box__thmb'> ";
		html += "			<a class='link__goods' href='#'> ";
		html += "				<img src='/images/" + productImg + "' width='86' height='86' alt='" + productName + "' class='image__goods'> ";
		html += "			</a> ";
		html += "		</div> ";
		html += "		<div class='box__info '> ";
		html += "			<div class='box__goods-name'> ";
		html += "				<a href='#' class='text__goods-name'> ";
		html += "					<span class='text__brand'>KHSHOP</span> ";
		html += "					" + productName + "";
		html += "				</a> ";
		html += "			</div> ";
		html += "			<div class='box__option'></div> ";
		html += "			<div class='box__price'> ";
		html += "				<span class='text__value'>" + $util.get_commas(productSalePrice * qty) + "</span> ";
		html += "				<span class='text__unit'>원</span> ";
		html += "				<span class='text__amount'> / " + qty + "개</span> ";
		html += "			</div> ";
		html += "		</div> ";
		html += "	</div> ";
		html += "	<div class='box__delivery-charge'> ";
		html += "		<span class='text__delivery'>배송비</span> ";
		html += "		<span class='text__delivery-charge'>무료배송</span> ";
		html += "	</div> ";
		html += "</li> ";


		return html;
	}
	//쿠키에서 받아서 html 만들기 끝
	
	//전화번호 blur 시 함수
	$("#xo_id_buyer_phone_number").on('blur', function() {

		var phone = $(this).val();
		var phoneformat = phoneNumber(phone);

		$(this).val(phoneformat);
	});
	
	function phoneNumber(value) {
		if (!value) {
			return "";
		}

		value = value.replace(/[^0-9]/g, "");

		let result = [];
		let restNumber = "";

		// 지역번호와 나머지 번호로 나누기
		if (value.startsWith("02")) {
			// 서울 02 지역번호
			result.push(value.substr(0, 2));
			restNumber = value.substring(2);
		} else if (value.startsWith("1")) {
			// 지역 번호가 없는 경우
			// 1xxx-yyyy
			restNumber = value;
		} else {
			// 나머지 3자리 지역번호
			// 0xx-yyyy-zzzz
			result.push(value.substr(0, 3));
			restNumber = value.substring(3);
		}

		if (restNumber.length === 7) {
			// 7자리만 남았을 때는 xxx-yyyy
			result.push(restNumber.substring(0, 3));
			result.push(restNumber.substring(3));
		} else {
			result.push(restNumber.substring(0, 4));
			result.push(restNumber.substring(4));
		}

		return result.filter((val) => val).join("-");
	}
	//전화번호 blur 시 함수 끝
	
	//개인정보 자세히 보기 클릭시
	$('.button__term').click(function(){
		console.log('자세히 클릭');
		$(this).toggleClass('js_active');
		if($(this).hasClass('js_active')) {
			$('.js_active').attr('aria-expanded', true);
			$('.js_active').html('간단히');
			$('.js_active').closest('.list-item').find('.box__detail-term').show();
		} else {
			$(this).attr('aria-expanded', false);
			$(this).html('자세히');
			$(this).closest('.list-item').find('.box__detail-term').hide();
		}
	})
	//개인정보 자세히 보기 클릭시 끝
	
	//결제하기 버튼 클릭 시 함수
	$('.button__total-price').click(function(){
		console.log('결제하기 버튼 클릭');
		let ordernm = $('#xo_id_buyer_name').val();
		let orderphone = $('#xo_id_buyer_phone_number').val();
		
		let orderaddr = $('#sample6_address').val();
		let orderaddrdetail = $('#sample6_detailAddress').val();
		let tot_price = 0;
		let tot_qty = 0;
		let deliv_fee = 0;
		
		let orderlist = [];
		
		if(ordernm == '' || orderphone == ''){
			alert('입력되지 않은 주문자 정보가 존재합니다.');
			return;
		}
		if(orderaddr == ''){
			alert('주소를 입력하세요.');
			return;
		}
		if(orderaddrdetail == ''){
			alert('상세주소를 입력하세요.');
			return;
		}
		var selected = $(".selected").length;
		if(selected == 0){
			alert('결제수단을 선택해주세요.');
			return;
		}
		var checked = $("input[name=agreeInfo]:checked").length;
		if(checked < 2){
			alert('개인정보 수집 및 이용동의를 체크해주세요.');
			return;
		}
		
		let orderuuid = $util.get_uuid();
		console.log('새로만들 orderuuid : ' + orderuuid);
		
		$.each(remakedlist, function(index,item){
			tot_price += (Number)(item.prod_sale_price);
			tot_qty += item.qty;
			
			console.log('tot_price : ' + typeof(tot_price) + tot_price);
			console.log('tot_qty : ' + typeof(tot_qty) + tot_qty);
			
			
			let obj = {};
			obj.order_id = orderuuid;
			obj.uuid = item.uuid;
			obj.prod_id = item.prod_id;
			obj.color_nm = item.color_nm;
			if (item.size_nm != undefined || item.size_nm != "") {
				obj.size_nm = item.size_nm;
			}
			obj.qty = item.qty;
			obj.prod_sale_price = item.prod_sale_price;
			orderlist.push(obj);
		})
		let str = JSON.stringify(orderlist);
		console.log("str : " + str);
		//주문계산후 주문리스트 
		$util.setCookie("order", str);
		
		let dataSet = {};
		dataSet.order_id = orderuuid;
		//dataSet.user_id = user_id;
		dataSet.tot_price = tot_price;
		dataSet.tot_qty = tot_qty;
		dataSet.deliv_fee = deliv_fee;
		dataSet.order_dt = today_year + "-0" + today_month + "-" + Number(today_date-1);
		
		$.ajax({
			url: '/addOrder.do',
			type: 'POST',
			data: dataSet,
			dataType: 'json',

			success: function(data) {
				console.log("success! : " + data);
				let rtn = confirm('총 ' + tot_price + '원 결제하시겠습니까?');
		
				if (rtn) {
					$util.setCookie("cart","");
					location.href = "orderList.do";
				} else {
					return;
				}

			},
			error: function(data) {
			}
		});
	})
	//결제하기 버튼 클릭 시 함수 끝
	
	//결제수단 카드 선택시 함수
	$('#pay_chk_CreditCard').click(function(){
		//console.log("카드 클릭");
		
		$(this).prop('checked', true); // 선택하기
		
		$('.box__method-cash').hide();
		$('.box__method-creditcard').show();
	})
	//결제수단 카드 선택시 함수 끝
	
	//결제수단 무통장 입금 선택시 함수
	$('#pay_chk_VirtualAccount').click(function(){
		//console.log("현금 클릭");
		
		$(this).prop('checked', true); // 선택하기
		
		console.log('현금 체크');
		$('.box__method-creditcard').hide();
		$('.box__method-cash').show();
		
		setaccount($('.text_bank').html());
	})
	//결제수단 무통장 입금 선택시 함수 끝
	
	//체크박스 전체선택/해제 함수
	
	$("#agreeInfoAllTop").click(function() {
		if($(this).is(":checked")){ 
			$("input[name=agreeInfo]").prop("checked", true);
		}
		else 
			$("input[name=agreeInfo]").prop("checked", false);
	});
	
	$("input[name=agreeInfo]").click(function() {
		var total = $("input[name=agreeInfo]").length;
		var checked = $("input[name=agreeInfo]:checked").length;

		if(total != checked) $("#agreeInfoAllTop").prop("checked", false);
		else $("#agreeInfoAllTop").prop("checked", true); 
	});
	//체크박스 전체선택/해제 함수 끝
	
	
});
//ready