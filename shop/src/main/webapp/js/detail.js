$(document).ready(function() {
	
	$('.MK_total').html($util.get_commas(Number($('.itemcnt').html()) * productSalePrice));
	
	// 마우스 오버할때 다른 이미지 보이기
	$(".detail-thumb-wrap ul li img").hover(function() {
		$(".detail_image").attr("src", $(this).attr("src"));
	}, function() {
	});
	// 마우스 오버할때 다른 이미지 보이기 끝
	
	//색상 선택시 사이즈 표시
	$("#selColor").on("change", function() {

		$("#selSize option").remove();
		$("#selSize").append("<option value=''>사이즈 선택</option>");

		let prodId = $("#prodid").val();
		let selColor = $("#selColor option:selected").val();
		console.log("selColor : " + selColor);
		console.log("prodId : " + prodId);

		dataSet = {};
		dataSet.prod_id = prodId;
		dataSet.color_nm = selColor;

		$.ajax({
			url: '/getSize.do',
			type: 'POST',
			data: dataSet,
			dataType: 'json',

			success: function(data) {
				console.log("success! : " + data);

				$("colorname").val(selColor);

				let str = {};
				for (let i in data.productSize) {
					str = data.productSize[i].sizeName

					console.log("str : " + str);

					$("#selSize").append("<option value='" + str + "'>" + str + "</option>");
				}
			},
			error: function(data) {
			}
		});

	});
	//색상 선택시 사이즈 표시 끝
	
	//카트 담기
	$(document).on('click', '#cartBtn', function() {
		console.log('cart click');

		let dataSet = {};
		let uuid = $util.get_uuid();
		if (!login_success) {
			if ($util.getCookie("cart") == undefined) {
				$util.setCookie("cart", "");
			}
		} else {
			let userid = $("#userid").val();
			dataSet.user_id = userid;			
		}
		console.log("userid : " + dataSet.user_id);
		
		if($('#selColor').val() == undefined || $('#selColor').val() == ""){
			alert('색상을 선택해주세요.');
			return;
		}
		
		dataSet.uuid = uuid;
		dataSet.prod_id = $("#prodid").val();
		dataSet.cart_img = $("#cartimg").val();
		dataSet.prod_nm = $("#prodname").val();
		dataSet.color_nm = $("#selColor option:selected").val();
		dataSet.size_nm = $("#selSize option:selected").val();

		console.log(dataSet.color_nm);
		console.log(dataSet.size_nm);
		dataSet.prod_price = $("#prodprice").val();
		dataSet.prod_sale_price = $("#prodsaleprice").val();
		console.log("카트추가시 qty : " +  Number($('.itemcnt').html()));
		dataSet.qty = Number($('.itemcnt').html());

		if ($util.getCookie("cart") == undefined) {
			$util.setCookie("cart", "");
		}

		let carts_product = $util.getCookie("cart");
		console.log(carts_product);
		
		let carts = [];
		if (carts_product != undefined && carts_product !== "") {
			carts = JSON.parse(carts_product);
			console.log("장바구니 담을때 carts : " + carts);
		}
		
		carts.push(dataSet);
		let jsonstring = JSON.stringify(carts);
		
		console.log('jsonstring : ' + jsonstring);
		
		$util.setCookie("cart", jsonstring);
		
		let rtn = confirm('장바구니에 담았습니다.\n장바구니로 이동하시겠습니까?');
		
		if (rtn) {
			location.href = "cart.do";
		} else {
			//location.href = "main.do";
			return;
		}
		
	});
	//카트담기 끝
	
	//스크롤시 주문박스 위치조정
	let $wind = $(window),
		box = $('.goods-info-box');
		
	$wind.scroll(function(){
		console.log("윈도우탑 : " + $wind.scrollTop());
		console.log("박스탑 : " + box.offset().top);
		console.log("상품박스높이 : " + box.height());
		console.log("상품설명높이 : " + $('.detail-thumb-wrap').height());
		let pos = 190 + $('.detail-thumb-wrap').height() - box.height();
		console.log("pos : " + pos);
		if(pos - 22 >= $wind.scrollTop() && $wind.scrollTop() >= 190){
			$('.goods-info-box.fixed.bottom').css({ 'position': '', 'top': '', 'right': '' });
			box.addClass('fixed');
			box.removeClass('bottom');
		} 
		else if($wind.scrollTop() >= pos - 22) {
			box.addClass('bottom');
			$('.goods-info-box.fixed.bottom').css({'top': pos-10});
		}
		else {
			$('.goods-info-box.fixed.bottom').css({ 'position': '', 'top': '', 'right': '' });
			box.removeClass('fixed');
			box.removeClass('bottom');
		}
		
	});
	//스크롤시 주문박스 위치조정 끝
	
	// 상품개수감소
	$('.cntdown').click(function() {
		let itemqty = $('.itemcnt');
		//let uuid = $(this).context.dataset.no;
		if (itemqty.html() == 1) {
			alert('상품은 최소 한개 이상 주문해야 합니다.');
			return;
		} else {
			itemqty.html(Number(itemqty.html()) - 1);
			$('.MK_total').html($util.get_commas(Number(itemqty.html()) * productSalePrice));
		}
	});
	//상품개수감소 함수 끝	

	// 상품개수증가
	$('.cntup').click(function() {
		let itemqty = $('.itemcnt');
		if (itemqty.html() > 99) {
			alert('백개 이하로 선택해주세요.');
			return;
		} else {
			itemqty.html(Number(itemqty.html()) + 1);
			$('.MK_total').html($util.get_commas(Number(itemqty.html()) * productSalePrice));
		}
	});
	//상품개수증가 함수 끝	
});
//ready



