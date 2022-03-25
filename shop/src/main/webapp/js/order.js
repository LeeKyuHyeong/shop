$(function(){
	let orderlist = JSON.parse(orderedlist);		//DB에 저장된 카트리스트를 객체로 변환
	console.log('orderlist : ' + orderlist);
	
	let orderstr = $util.getCookie("order");
	
	// List --> Html 로 append
	try {
		let ordertbl = $('.ordertbl');
		
		if(orderlist == undefined || orderlist == ""){
			ordertbl.append(showempty());
		}
		else {
			$.each(orderlist, function(index, element) {
				console.log("orderedlist uuid: " + element.uuid);
				try {
					let html = makeOrderHtml(element.uuId, element.statusCode, element.userId, element.totalPrice, element.totalQty, element.deliveryFee,
						element.orderDate);
					ordertbl.append(html);
				} catch (error0) { }
			});
		}

	} catch (error) { console.log("error:" + error); }
	
	function showempty(){
		let html = "";
		
		html += "<tr>";
		html += "	<td class = 'orderempty' colspan='4'>주문 내역이 없습니다.</td>";
		html += "	<td></td>";
		html += "	<td></td>";
		html += "	<td></td>";
		html += "</tr>";
		
		return html;
	}
	
	
	function makeOrderHtml(uuid, status_cd, user_id, tot_price, tot_qty, deliv_fee, order_dt){
		let html = "";
		let status = "";
		if(status_cd == 1){
			status = "배송준비중";
		} else if(status_cd == 2){
			status = "배송중";
		} else 
			status = "배송완료";
		
		html += "<tr class='order_tr'>";
		html += "	<td class = 'order_td'>" + order_dt + "";
		html += "	</td>";
		html += "	<td class = 'order_td'>주문 상품수 " + tot_qty + "개, 배달비 "+ deliv_fee + "원";
		html += "	</td>";
		html += "	<td class = 'order_td'>" + $util.get_commas(tot_price + deliv_fee) + "원";
		html += "	</td>";
		html += "	<td class = 'order_td'>" + status + "";
		html += "	</td>";
		html += "</tr>";
		
		return html;
	}
	
});
//ready끝