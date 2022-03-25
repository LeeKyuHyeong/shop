
// 주민등록번호의 유효성을 체크
function isValidJuminNo(jumin1, jumin2) {
  var tmpFrm = document.frm_OnlineEdu;
  //var jumin1 = tmpFrm.txt_Jumin_1.value;
  //var jumin2 = tmpFrm.txt_Jumin_2.value;
  var yy = jumin1.substr(0, 2);        // 년도
  var mm = jumin1.substr(2, 2);        // 월
  var dd = jumin1.substr(4, 2);        // 일
  var genda = jumin2.substr(0, 1);        // 성별
  var msg, ss, cc;
  
  // 숫자가 아닌 것을 입력한 경우
  if (!isNumeric(jumin1)) {
    alert("주민등록번호 앞자리를 숫자로 입력하세요.");
    tmpFrm.txt_Jumin_1.focus();
    return false;
  }

  // 길이가 6이 아닌 경우
  if (jumin1.length != 6) {
    alert("주민등록번호 앞자리를 다시 입력하세요.");
    tmpFrm.txt_Jumin_1.focus();
    return false;
  }

  // 첫번째 자료에서 연월일(YYMMDD) 형식 중 기본 구성 검사
  if (yy < "00"
    || yy > "99"
    || mm < "01"
    || mm > "12"
    || dd < "01"
    || dd > "31") {
    alert("주민등록번호 앞자리를 다시 입력하세요.");
    tmpFrm.txt_Jumin_1.focus();
    return false;
  }

  // 숫자가 아닌 것을 입력한 경우
  if (!isNumeric(jumin2)) {
    alert("주민등록번호 뒷자리를 숫자로 입력하세요.");
    tmpFrm.txt_Jumin_2.focus();
    return false;
  }
  // 길이가 7이 아닌 경우
  if (jumin2.length != 7) {
    alert("주민등록번호 뒷자리를 다시 입력하세요.");
    tmpFrm.txt_Jumin_2.focus();
    return false;
  }

  // 성별부분이 1 ~ 4 가 아닌 경우
  if (genda < "1" || genda > "4") {
    alert("주민등록번호 뒷자리를 다시 입력하세요.");
    tmpFrm.txt_Jumin_2.focus();
    return false;
  }

  // 연도 계산 - 1 또는 2: 1900년대, 3 또는 4: 2000년대
  cc = (genda == "1" || genda == "2") ? "19" : "20";
  // 첫번째 자료에서 연월일(YYMMDD) 형식 중 날짜 형식 검사
  if (isValidDate(cc + yy + mm + dd) == false) {
    alert("주민등록번호 앞자리를 다시1 입력하세요.");
    tmpFrm.txt_Jumin_1.focus();
    return false;
  }

  // Check Digit 검사
  if (!isSSN(jumin1, jumin2)) {
    alert("입력한 주민등록번호를 검토한 후, 다시 입력하세요.");
    tmpFrm.txt_Jumin_1.focus();
    return false;
  }
  return true;
}
function isValidDate(iDate) {
  if (iDate.length != 8) {
    return false;
  }

  oDate = new Date();
  oDate.setFullYear(iDate.substring(0, 4));
  oDate.setMonth(Number(iDate.substring(4, 6)) - 1);
  oDate.setDate(iDate.substring(6));
  if (Number(oDate.getFullYear()) != Number(iDate.substring(0, 4))
    || Number(oDate.getMonth() + 1) != Number(iDate.substring(4, 6))
    || Number(oDate.getDate()) != Number(iDate.substring(6))) {

    return false;
  }

  return true;
}

function isNumeric(s) {
  for (i = 0; i < s.length; i++) {
    c = s.substr(i, 1);
    if (c < "0" || c > "9") return false;
  }
  return true;
}

function isSSN(s1, s2) {
  n = 2;
  sum = 0;
  for (i = 0; i < s1.length; i++)
    sum += Number(s1.substr(i, 1)) * n++;
  for (i = 0; i < s2.length - 1; i++) {
    sum += Number(s2.substr(i, 1)) * n++;
    if (n == 10) n = 2;
  }

  c = 11 - sum % 11;
  if (c == 11) c = 1;
  if (c == 10) c = 0;
  if (c != Number(s2.substr(6, 1))) return false;
  else return true;
}

//출처: https://minineko.tistory.com/entry/JavaScript-주민등록번호-체크-로직 [MiniNeko :: =^..^=]