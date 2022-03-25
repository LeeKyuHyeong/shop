
$(document).ready(function() {

		$(".col-12").hide();

	$(document).on('click', '#btn_id_find', function() {
		console.log('id_find click');
		var name = $("#userName").val();
		var phone = $("#userPhone").val();

		if (name == "") {
			alert("이름을 입력하세요.");
			$("#userName").focus();
			return;
		}
		if (phone == "") {
			alert("전화번호를 입력하세요.");
			$("#userPhone").focus();
			return;
		}

		var dataSet = {};
		dataSet.user_name = name;
		dataSet.user_phone = phone;

		$.ajax({
			url: '/findIdAction.do',
			type: 'POST',
			data: dataSet,
			dataType: 'json',

			success: function(data) {
				console.log('success!');

				if (data.err_code == "1") {
					var rtn = confirm('찾으신 아이디는 ' + data.find_id + ' 입니다.\n비밀번호 찾기 페이지로 이동 하시겠습니까?\n취소 선택시 로그인 페이지로 이동합니다.');
					if (rtn) {
						location.href = "findPwd.do";
					} else {
						location.href = "login.do";
					}
				} else {
					$('.alert-danger').html(data.err_msg);
					$(".col-12").show();
				}
			},
			error: function(data) {
				alert('정보를 다시 입력해주시길 바랍니다.');
			}
		});
	});

	$(document).on('click', '#btn_pwd_find', function() {
		var id = $("#loginId").val();
		var name = $('#userName').val();
		var phone = $('#userPhone').val();
		
		if (id == "") {
			alert("아이디를 입력하세요.");
			$("#loginId").focus();
			return;
		}
		if (name == "") {
			alert("이름을 입력하세요.");
			$("#userName").focus();
			return;
		}
		if (phone == "") {
			alert("전화번호를 입력하세요.");
			$("#userPhone").focus();
			return;
		}
		
		var dataSet = {};
		dataSet.login_id = id;
		dataSet.user_name = name;
		dataSet.user_phone = phone;
		$.ajax({
			url: '/findPwdAction.do',
			type: 'POST',
			data: dataSet,
			dataType: "json",

			success: function(data) {
				console.log('success!');

				if (data.err_code == "1") {
					var rtn = confirm('찾으신 비밀번호는 ' + data.find_pwd + ' 입니다.\n로그인 페이지로 이동 하시겠습니까?\n취소 선택시 메인 페이지로 이동합니다.');
					if (rtn) {
						location.href = "login.do";
					} else {
						location.href = "main.do";
					}
				} else {
					$('.alert-danger').html(data.err_msg);
					$(".col-12").show();
				}
			},
			error: function(data) {
				alert('정보를 다시 입력해주시길 바랍니다.');
			}
		});
	});
});