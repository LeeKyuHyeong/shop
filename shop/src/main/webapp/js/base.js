
// oninput="handleOnPassword(this)"
function handleOnName(e)  {
    e.value = e.value.replace(/[\s]/ig, '');
}
function handleOnID(e)  {
    console.log("handleOnID : " + e.value);
    e.value = e.value.replace(/[^A-Za-z0-9]/ig, '');
    console.log("    --> " + e.value);
}
function handleOnNumber(e)  {
    e.value = e.value.replace(/[^0-9]/ig, '');
}
function handleOnPassword(e)  {
    e.value = e.value.replace(/[^A-Za-z0-9~!@#$%^&*()<>{}+|=:;.,\[\]\-\_\/\?]/ig, '');
    //e.value = e.value.replace(/[^((?=.*\\d)(?=.*[a-zA-Z])(?=.*[\\W]]/ig, '');
}

$(document).ready(function(){
    //GNB 및 LNB 메뉴 Selected
    var url = location.pathname.split("/")[1];
    var url2 = location.pathname.split("/")[2];
    var username = login_id;

	if(username != ""){
        $("#pnl_order").show();
		$("#pnl_member").show();
		$("#pnl_logout").show();
		$("#li_order").show();
		$("#li_member").show();
		$("#li_logout").show();
		//$(".bottom-menu-bar").show();
        $(".bottom-menu-bar").removeClass('hide');
        $(".bottom-menu-bar").addClass( 'show' );
        $(".at-footer").hide();

		$("#pnl_login").hide();
		$("#pnl_join").hide();
		$("#li_login").hide();
		$("#li_join").hide();
	} else {
        $("#pnl_order").hide();
		$("#pnl_member").hide();
		$("#pnl_logout").hide();
		$("#li_order").hide();
		$("#li_member").hide();
		$("#li_logout").hide();
		//$(".bottom-menu-bar").hide();
        $(".bottom-menu-bar").removeClass('show');
        $(".bottom-menu-bar").addClass( 'hide' );

		$("#pnl_login").show();
		$("#pnl_join").show();
		$("#li_login").show();
		$("#li_join").show();
	}


    var start = $( ".datepicker" ).datepicker({
        autoclose: true
        ,showOn:"both"
        ,buttonImage: "/static/data/icon/calendar.gif"
        ,dateFormat: 'yy-mm-dd' //Input Display Format 변경
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        ,changeYear: true //콤보박스에서 년 선택 가능
        ,changeMonth: true //콤보박스에서 월 선택 가능
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        ,minDate: "-6M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "0M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
    });

    var end = $( ".datepicker2" ).datepicker({
        dateFormat: 'yy-mm-dd' //Input Display Format 변경
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        ,changeYear: true //콤보박스에서 년 선택 가능
        ,changeMonth: true //콤보박스에서 월 선택 가능
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        ,minDate: "-6M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "0M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
           ,defaultDate: "+1w"
      });

});
