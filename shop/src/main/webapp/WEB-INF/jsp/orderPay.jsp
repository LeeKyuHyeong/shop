<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
<link rel="stylesheet" href="/css/pay.css">
</head>
<body class="responsive is-pc" data-aos-easing="ease-out" data-aos-duration="800" data-aos-delay="0">
<div class="at-html">
	<c:import url="./inc/ShopHeader.jsp"></c:import>
	<script src="/js/pay.js"></script>
	<!-- block content  -->
	<div id="content" class="checkout__wrap">
		<div class="box__contents">
			<div class="section__left">
				<div class="section__checkout-info section__person-info">
					<div class="box__card box__card-person box__card-person--simple">
						<div class="box__inner">
							<div class="text__title">주문자정보</div>
							<div class="box__form-control person-info__name">
								<div class="box__label">
									<label for="xo_id_buyer_name"
										class="sprite__checkout--after text__label">주문자</label>
								</div>
								<div class="box__input ">
									<input type="text" id="xo_id_buyer_name" title="주문자" placeholder="이름을 입력해 주세요." class="input_txt" name="name" value="${user.userName}">
								</div>
							</div>
							<div class="box__form-control person-info__tel">
								<div class="box__label">
									<label for="xo_id_buyer_phone_number" class="sprite__checkout--after text__label">연락처</label>
								</div>
								<div class="box__input ">
									<input type="tel" id="xo_id_buyer_phone_number" class="input_txt input_tel" title="연락처"
										placeholder="“-“없이 입력해 주세요." value="${user.userPhone}">
								</div>
							</div>
							<p class="sprite__checkout--before text__message">
								연락처는 국내 휴대폰 번호만 입력 가능합니다.(- 생략)
							</p>
						</div>
					</div>
				</div>
				<div class="section__checkout-info section__delivery-info">
					<div class="box__card box__card-address box__card-address--new">
						<div class="box__inner">
							<div class="text__title">배송지 입력</div>
							<input type="text" id="sample6_postcode" class="d_form mini" placeholder="우편번호">
							<input type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기" class="d_btn">
							<br>
							<input type="text" id="sample6_address" class="d_form large" placeholder="주소">
							<br>
							<input type="text" id="sample6_detailAddress" class="d_form" placeholder="상세주소">
							<input type="text" id="sample6_extraAddress" class="d_form" placeholder="참고항목">
						</div>
					</div>
				</div>
				<section class="section__checkout-info section__paycase-info">
				<div class="box__card box__paycase-info">
					<div class="box__inner">
						<div class="text__title">결제수단</div>
						<div class="box__info box__payment-wrap">
							<div class="box__payment box__payment-default"
								id="xo_id_section_normal_pay">
								<div class="box__pay-view" style="display: block;">
									<div class="box__pay-inner">
										<ul class="payway_lst list__tab list__tab-v2">
											<li class="list-item">
												<input type="radio" name="pay_chk" id="pay_chk_CreditCard" class="input__rdo" value="CreditCard" checked="">
												<label for="pay_chk_CreditCard">신용/체크카드</label>
											</li>
											<li class="list-item">
												<input type="radio" name="pay_chk" id="pay_chk_VirtualAccount" class="input__rdo" value="VirtualAccount">
												<label for="pay_chk_VirtualAccount">무통장 입금</label>
											</li>
										</ul>
										<div class="pay_openbx box__method-creditcard" style="display: block;">
											<div class="pay_open">
												<ul class="pay_lst_chk" role="tablist">
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/hdcard.jpg" alt="현대카드">
															<strong>현대카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/sscard.png" alt="삼성카드">
															<strong>삼성카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/shcard.png" alt="신한카드">
															<strong>신한카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/kbcard.jpg" alt="KB국민카드">
															<strong>KB국민카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/ltcard.jpg" alt="롯데카드">
															<strong>롯데카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/wrcard.png" alt="우리카드">
															<strong>우리카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/hncard.png" alt="하나카드">
															<strong>하나카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/bccard.png" alt="비씨카드">
															<strong>비씨카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/nhcard.png" alt="NH농협카드">
															<strong>NH농협카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/ctcard.jpg" alt="씨티카드">
															<strong>씨티카드</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false">
															<img src="/images/card/kakaocard.png" alt="카카오뱅크">
															<strong>카카오뱅크</strong>
														</a>
													</li>
												</ul>
												<div class="box__pay-method">
													<span class="text__notice">법인카드 결제 시 일시불만 가능</span>
													<div class="box__other-method">
														<ul class="list__pay-method">
															<li class="list-item">
																<div class="box__form-group">
																	<div class="box__form-control box__control-select box__form-small sprite__checkout--after">
																		<label for="card-select7" class="text__label">
																			<em class="text__emphasis">일시불</em>
																		</label>
																		<select id="card-select7" class="form__select">
																			<option value="0">일시불</option>
																			<option value="2">2개월 무이자 할부</option>
																			<option value="3">3개월 무이자 할부</option>
																			<option value="4">4개월 무이자 할부</option>
																			<option value="5">5개월</option>
																			<option value="6">6개월</option>
																			<option value="7">7개월</option>
																			<option value="8">8개월</option>
																			<option value="9">9개월</option>
																			<option value="10">10개월</option>
																			<option value="11">11개월</option>
																			<option value="12">12개월</option>
																		</select>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div class="pay_openbx box__method-cash" style="display: none;">
											<div class="pay_open">
												<p class="sprite__checkout--before text__message">
													<span class="text__limit"></span>
													까지 미입금 시 자동취소 됩니다.
												</p>
												<ul class="pay_lst_chk" role="tablist">
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/wrcard.png" alt="우리은행">
															<strong>우리은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/shcard.png" alt="신한은행">
															<strong>신한은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false"  >
															<img src="/images/card/hncard.png" alt="하나은행">
															<strong>하나은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/scbank.jpg" alt="SC은행">
															<strong>SC은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/kbcard.jpg" alt="국민은행">
															<strong>국민은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/wcgbank.jpg" alt="우체국은행">
															<strong>우체국은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/ibkbank.jpg" alt="기업은행">
															<strong>기업은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/nhcard.png" alt="농협은행">
															<strong>농협은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/whbank.jpg" alt="외한은행">
															<strong>외한은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/bsbank.png" alt="부산은행">
															<strong>부산은행</strong>
														</a>
													</li>
													<li role="none presentation" class="">
														<a role="tab" aria-selected="false" >
															<img src="/images/card/ctcard.jpg" alt="씨티은행">
															<strong>씨티은행</strong>
														</a>
													</li>
												</ul>
											</div>
											<div class="box__payment--refund">
												<div class="box__method-refund">
													<h3 class="text__refund-title">입금계좌 선택</h3>
													<ul class="list__notice">
														<li class="list-item">주문 후 입금하실 은행을 선택해주세요.</li>
													</ul>
													<div class="box__refund-info">
														<div class="box__form-control">
															<div class="box__label">
																<label for="xo_id_refund_account_bank" class="sprite__checkout--after text__label">은행명</label>
															</div>
															<div class="box__form-group">
																<div class="box__control-select sprite__checkout--after">
																	<label for="xo_id_refund_account_bank" class="text__label cash_label" style="color: rgb(0, 0, 0);">
																		<em class="text_bank">우리은행</em>
																	</label>
																	<select id="xo_id_refund_account_bank" class="form__select js-form__select">
																		<option value="002">산업은행</option>
																		<option value="003">기업은행</option>
																		<option value="004">국민은행</option>
																		<option value="005">외환은행</option>
																		<option value="007">수협</option>
																		<option value="011">농협은행</option>
																		<option value="020">우리은행</option>
																		<option value="023">SC은행</option>
																		<option value="027">씨티은행</option>
																		<option value="031">대구은행</option>
																		<option value="032">부산은행</option>
																		<option value="034">광주은행</option>
																		<option value="037">전북은행</option>
																		<option value="039">경남은행</option>
																		<option value="045">새마을금고</option>
																		<option value="048">신협</option>
																		<option value="071">우체국은행</option>
																		<option value="081">하나은행</option>
																		<option value="088">신한은행</option>
																	</select>
																</div>
															</div>
														</div>
														<div class="box__form-control">
															<div class="box__label">
																<label for="xo_id_refund_account_number" class="sprite__checkout--after text__label">계좌번호</label>
															</div>
															<div class="box__input">
																<input type="text" id="xo_id_refund_account_number" class="input_txt text_account" title="계좌번호" placeholder="“-”없이 입력해 주세요." value="">
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</section>
			</div>
			<div class="section__right">
				<div class="section__right-inner">
					<div class="section__checkout-info section__order-info">
						<div class="box__card box__order-info">
							<div class="box__inner">
								<div class="text__title">
									주문상품 <span class="text__count">0</span>개
								</div>
								<div class="box__goods">
									<ul class="list__goods-view">
										
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="section__checkout-info section__payment-info">
						<div class="box__card box__payment-info">
							<div class="box__inner">
								<ul class="list__detail-price">
									<li class="list-item">
										<div class="box__option">
											<span class="text__title">상품금액</span>
											<span class="text__price">0
												<span class="text__unit">원</span>
											</span>
										</div>
									</li>
									<li class="list-item">
										<div class="box__option">
												<span class="text__title ">배송비</span>
												<span class="text__num">0
													<span class="text__unit">원</span>
												</span>
										</div>
									</li>
								</ul>
								<ul class="list__detail-price box__total-price">
									<li class="list-item list__total-price">
										<div class="box__option">
											<span class="text__title">총 결제금액</span>
											<span class="text__price">0
												<span class="text__unit">원</span>
											</span>
										</div>
									</li>
								</ul>
								<button type="button" class="button__total-price">결제하기</button>
							</div>
						</div>
					</div>
				</div>
				<section class="section__checkout-info section__term-info" style="margin-top: 0px;">
					<div class="box__card box__term-info">
						<div class="box__inner">
							<ul class="list__term">
								<li class="list-item list__term-allagree">
									<div class="box__custom-form">
										<input type="checkbox" id="agreeInfoAllTop" name="agreeInfoAll" class="input__checkbox">
										<label for="agreeInfoAllTop" class="text__label">
											<em class="text__deco">전체동의</em>
											<span class="text__explain">만 14세 이상만 구매가능합니다.</span>
										</label>
									</div>
								</li>
							</ul>
							<ul class="list__term">
								<li class="list-item sprite__checkout--after list__term-essential">
									<div class="box__custom-form">
										<input type="checkbox" id="xo_id_agreements_collecting_personal_info" name="agreeInfo" class="input__checkbox">
										<label for="xo_id_agreements_collecting_personal_info" class="text__label">
											<em class="text__deco">필수</em>
											개인정보 수집 및 이용동의
										</label>
									</div>
									<button class="button__term button__detail sprite__checkout--after" aria-expanded="false">자세히</button>
									<div class="box__detail-term">
										<p class="text__detail-term">만 14세 이상만 구매가능합니다.</p>
										<p class="text__detail-term">목적: 주문, 결제 및 배송서비스</p>
										<p class="text__detail-term">항목: 구매자정보(이름, 연락처, 메일주소),
											주문비밀번호, 상품 구매/취소/반품/교환/환불 정보, 수령인정보(이름, 주소, 연락처), 결제번호, 송장정보,
											은행계좌정보, 휴대폰번호(휴대폰결제시), 해외카드번호(해외카드결제시), 현금영수증 정보</p>
										<p class="text__detail-term">보유기간: 관련 법률에 따라 5년간 보존</p>
										<p class="text__detail-term">이용동의: KHSHOP은 고객님께서
											구매하신 서비스 및 상품의 원활한 제공을 위해 최소한의 범위 내에서 아래와 같이 개인정보를 수집·이용 합니다.
											고객님께서는 수집 및 이용에 동의하지 않으실 수 있으며 동의하지 않으실 경우, 일부 구매가 제한될 수 있습니다.</p>
									</div>
								</li>
								<li class="list-item sprite__checkout--after list__term-essential">
									<div class="box__custom-form">
										<input type="checkbox" id="xo_id_agreements_providing_personal_info" name="agreeInfo" class="input__checkbox">
										<label for="xo_id_agreements_providing_personal_info" class="text__label">
											<em class="text__deco">필수</em>
											개인정보 제3자 제공동의
										</label>
									</div>
									<button class="button__term button__detail sprite__checkout--after" aria-expanded="false">자세히</button>
									<div class="box__detail-term">
										<p class="text__detail-term">제공받는자: 홍길동컴퍼니, 글로벌비즈니스</p>
										<p class="text__detail-term">목적: 판매자와 구매자의 거래의 원활한 진행, 본인
											의사의 확인, 고객 상담 및 불만처리, 상품과 경품배송을 위한 배송지 확인 등</p>
										<p class="text__detail-term">항목: 구매자정보(이름, 연락처, 메일주소),
											주문비밀번호, 상품 구매/취소/반품/교환/환불 정보, 수령인정보(이름, 주소, 연락처), 결제번호, 송장정보,
											은행계좌정보, 휴대폰번호(휴대폰결제시), 해외카드번호(해외카드결제시), 현금영수증 정보</p>
										<p class="text__detail-term">보유기간: 구매 서비스 종료 후 1개월</p>
										<p class="text__detail-term">이용동의: KHSHOP은 고객님께서
											구매하신 서비스 및 상품의 원활한 제공을 위해 최소한의 범위 내에서 아래와 같이 개인정보를 수집·이용 합니다.
											고객님께서는 수집 및 이용에 동의하지 않으실 수 있으며 동의하지 않으실 경우, 일부 구매가 제한될 수 있습니다.</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
	<c:import url="./inc/ShopFooter.jsp"></c:import>
</div>
<script>
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}
</script>	
</body>
</html>