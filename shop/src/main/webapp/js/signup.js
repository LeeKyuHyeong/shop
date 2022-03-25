
$(document).ready(function() {

	$("#btn_idCheck").click(function() {
		console.log("test");

		var idCheck = $("#login_id").val();

		if (idCheck != "") {
			var dataSet = {};
			dataSet.login_id = idCheck;

			var data = JSON.stringify(dataSet);

			var param = { "login_id": idCheck };

			$.ajax({
				url: 'idCheckAction.do',
				type: 'post',
				dataType: 'json',
				data: dataSet,
				
				success: function(data) {
					console.log("ajax success : " + data);
					console.log("ajax success : " + data.check_ok);
					console.log("ajax success : " + data.check_msg);

					$('.error_next_box').eq(0).html(data.check_msg);
					$('.error_next_box').eq(0).show();
					$('#chk_login_id_ok').val(data.check_ok);

					if (data.check_ok == "T") {
						$('.error_next_box').eq(0).css('color', 'green');
					} else {
						$('.error_next_box').eq(0).css('color', 'red');
					}
				}
			});
		}

	});

	$("#btn_join").click(function() {
		var login_id = $("#login_id").val();
		var password1 = $("#login_pwd").val();
		var password2 = $("#login_pwd2").val();
		var name = $("#user_name").val();
		var birth = $("#user_birth").val();
		var phone = $("#user_phone").val();
		var email = $("#user_email").val();

		if (login_id == "") {
			alert('로그인 아이디를 입력하세요.');
			return;
		}
		if (login_id.length < 4) {
			alert('로그인 아이디를 4자리 이상으로 입력하세요.');
			return;
		}
		if (password1.length < 4) {
			alert('비밀번호를 4자리 이상으로 입력하세요.');
			return;
		}

		if ($('#chk_login_id_ok').val() != 'T') {
			alert('아이디 중복체크를 하세요.');
			return;
		}

		if (password1 != password2) {
			alert('비밀번호가 서로다릅니다, 다시 확인해주세요.');
			return;
		}
		if (name == "") {
			alert('이름을 입력하세요.');
			return;
		}
		if (birth == "") {
			alert('생년월일을 입력하세요.');
			return;
		}
		if (phone == "") {
			alert('전화번호를 입력하세요.');
			return;
		}
		/*var checkOk = isBirthday(birth);
		if (!checkOk) {
			alert('생년월일이 양식과 다릅니다. 다시 입력하세요');
			return;
		}*/

		var dataSet = {};

		console.log("login_id : " + login_id);

		dataSet.login_id = login_id;
		dataSet.login_pwd = password1;
		dataSet.user_name = name;
		dataSet.user_birth = birth;
		dataSet.user_phone = phone;
		dataSet.user_email = email;

		//var data = JSON.stringify(dataSet);

		$.ajax({
			type: 'POST',
			url: '/signUpAction.do',
			data: dataSet,
			dataType: 'json',
			success: function(data) {

				console.log("btn_join_success : " + data);

				if (data.err_code == "1") {
					var rtn = confirm('회원가입 되었습니다. \n로그인 페이지로 이동 하시겠습니까?');
					if (rtn) {
						location.href = "login.do";
					} else {
						location.href = "main.do";
					}
				} else {
					$('.alert-danger').html(data.err_msg);
					$(".col-13").show();
				}
			},
			error: function(request, status, error) {
				var msg = error;
				//$("#search_response_message").text(msg);
				alert(msg);
			},
		});
	});

	$("#user_birth").blur(function() {
		var birth = $(this).val();

		var checkOk = isBirthday(birth);

		if (!checkOk) {
			$(".error_next_box").eq(2).html("생년월일이 양식과 다릅니다. 다시 확인하세요");
			$(".error_next_box").eq(2).show();
		} else {
			$(".error_next_box").eq(2).hide();
		}
	});

	function isBirthday(dateStr) {
		var year = Number(dateStr.substr(0, 4)); // 입력한 값의 0~4자리까지 (연) 
		var month = Number(dateStr.substr(4, 2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월) 
		var day = Number(dateStr.substr(6, 2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일) 
		var today = new Date(); // 날짜 변수 선언
		var yearNow = today.getFullYear(); // 올해 연도 가져옴 

		if (dateStr.length <= 8) { // 연도의 경우 1900 보다 작거나 yearNow 보다 크다면 false를 반환합니다. 
			if (1900 > year || year > yearNow) {
				return false;
			} else if (month < 1 || month > 12) {
				return false;
			} else if (day < 1 || day > 31) {
				return false;
			} else if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
				return false;
			} else if (month == 2) {
				var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));

				if (day > 29 || (day == 29 && !isleap)) {
					return false;
				} else {
					return true;
				} //end of if (day>29 || (day==29 && !isleap)) 
			} else {
				return true;
			}	//end of if

		} else {
			//1.입력된 생년월일이 8자 초과할때 : auth:false 
			return false;
		}
	}

	$("#user_birth").on('blur', function() {

		var birth = $(this).val();
		var birthformat = birthNumber(birth);

		$(this).val(birthformat);
	});

	function birthNumber(value) {
		if (!value) {
			return "";
		}

		value = value.replace(/[^0-9]/g, "");

		let result = [];
		let restNumber = "";

		if (value.length > 3) {
			// 19940102
			result.push(value.substr(0, 4));  //1994 input
			value = value.substr(4);   // 0102
		}
		if (value.length > 1) {
			result.push(value.substr(0, 2));  //01 input
			value = value.substr(2);   // 02
		}
		if (value.length > 1) {
			result.push(value.substr(0, 2));  //02 input
		}

		return result.filter((val) => val).join("-");
	}

	//$('#user_phone').blur(function(event) {

	$("#user_phone").on('blur', function() {

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



});