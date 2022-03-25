
$(document).ready(function(){
	
	if (login_success == false) {
		$("#li_memberPrac").hide();
		$("#li_logout").hide();
		$("#li_orderlist").hide();
		
		$("#li_login").show();
		$("#li_join").show();
	} else {
		$("#li_memberPrac").show();
		$("#li_logout").show();
		$("#li_orderlist").show();
		
		$("#li_login").hide();
		$("#li_join").hide();
		
		$("#li_memberPrac a").html(user_name + "님 반갑습니다.");		
	}
	/*
	if (login_id == "") {
		$("#li_memberPrac").hide();
		$("#li_logout").hide();
		$("#li_orderlist").hide();
		
		$("#li_login").show();
		$("#li_join").show();
	} else {
		$("#li_memberPrac").show();
		$("#li_logout").show();
		$("#li_orderlist").show();
		
		$("#li_login").hide();
		$("#li_join").hide();
		
		$("#li_memberPrac a").html(user_name + "님 반갑습니다.");		
	}
	*/
	
});
