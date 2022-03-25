package com.kh.shop;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes(types = UserVO.class)
public class KhShopUserController {

	@Resource(name = "UserService")
	private UserService userService;


	@RequestMapping(value = "/login.do")
	public String login(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 로그인화면");

		return "login";
	}
	@RequestMapping(value = "/popup.do")
	public String popup(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 주소찾기팝업");
		
		return "popup";
	}
	@RequestMapping(value = "/zipcodepopup.do")
	public String zipcodepopup(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 주소찾기팝업에서 우편번호");
		
		return "zipcodepopup";
	}
	@RequestMapping(value = "/orderPay.do")
	public String orderPay(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 주문결제");
		
		String user_id = (String)requests.getSession().getAttribute("user_id");
		System.out.println("주문결제에서 user_id : " + user_id);
		
		UserVO userVO = userService.selectOrderUser(user_id);
		
		System.out.println("userVO : " + userVO.userName);
		model.addAttribute("user", userVO);
		return "orderPay";
	}

	@RequestMapping(value = "/findIdAction.do")
	public String findIdAction(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 아이디찾기 처리");

		String user_name = requests.getParameter("user_name");
		String user_phone = requests.getParameter("user_phone");
		String find_id = userService.findId(user_name, user_phone);

		System.out.println("user_name : " + user_name);
		System.out.println("user_phone : " + user_phone);
		System.out.println("find_id : " + find_id);

		String err_code = "";
		String err_msg = "";

		if (find_id != null && find_id != "0") {
			System.out.println("찾은 아이디 : " + find_id);
			err_code = "1";
			err_msg = "";
		} else {
			System.out.println("일치하는정보없음");
			err_code = "0";
			err_msg = "일치하는 정보가 없습니다.";
		}
		System.out.println("err_code : " + err_code);
		System.out.println("err_msg : " + err_msg);

		model.addAttribute("find_id", find_id);
		model.addAttribute("err_code", err_code);
		model.addAttribute("err_msg", err_msg);
		System.out.println("=======");

		return "jsonView";
	}

	@RequestMapping(value = "/findId.do")
	public String findId(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 아이디찾기화면");

		return "findId";
	}

	@RequestMapping(value = "/findPwdAction.do")
	public String findPwdAction(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 비밀번호 찾기 처리");

		String login_id = requests.getParameter("login_id");
		String user_name = requests.getParameter("user_name");
		String user_phone = requests.getParameter("user_phone");
		String find_pwd = userService.findPwd(login_id, user_name, user_phone);

		System.out.println("login_id : " + login_id);
		System.out.println("user_name : " + user_name);
		System.out.println("user_phone : " + user_phone);

		String err_code = "";
		String err_msg = "";

		if (find_pwd != null && find_pwd != "0") {
			System.out.println("찾은 비밀번호 : " + find_pwd);
			err_code = "1";
			err_msg = "";
		} else {
			System.out.println("일치하는정보없음");
			err_code = "0";
			err_msg = "일치하는 정보가 없습니다.";
		}
		System.out.println("err_code : " + err_code);
		System.out.println("err_msg : " + err_msg);

		model.addAttribute("find_pwd", find_pwd);
		model.addAttribute("err_code", err_code);
		model.addAttribute("err_msg", err_msg);
		System.out.println("=======");

		return "jsonView";
	}

	@RequestMapping(value = "/findPwd.do")
	public String findPwd(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 비밀번호찾기화면");

		return "findPwd";
	}

	@RequestMapping(value = "/loginAction.do")
	public String loginAction(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저 컨트롤에서 로그인처리 ------------");
		String login_id = requests.getParameter("loginId");
		String login_pwd = requests.getParameter("loginPwd");

		System.out.println("loginId : " + login_id + "\tuserPassword : " + login_pwd);

		String err_code = "0";
		String err_msg = "";

		UserVO user = userService.selectUserInfo(login_id);

		if (user == null) {
			System.out.println("userVO is null");
			err_code = "100";
			err_msg = "존재하지 않는 아이디 입니다.";
		} else {
			if (!login_pwd.equals(user.loginPwd)) {
				System.out.println("비밀번호 다름");
				err_code = "200";
				err_msg = "비밀번호를 다시 확인해주세요.";
			} else {
				System.out.println("로그인 성공");
				System.out.println("user.loginId : " + user.loginId + "loginPwd : " + user.loginPwd);

				err_code = "0";
				err_msg = "";

				requests.getSession().setAttribute("UserVO", user); // 세션에 로그인성공 객체
				requests.getSession().setAttribute("login_id", login_id); // 세션에 로그인아이디값 입력
				requests.getSession().setAttribute("user_id", user.getUserId()); // 세션에 유저아이디값 입력
				
				System.out.println("user : " + user);
				System.out.println("user.user_id : " + user.userId);
				System.out.println("user.user_name : " + user.userName);
				
				model.addAttribute("login_id", user.loginId);
				model.addAttribute("user_name", user.userName);
				model.addAttribute("user_id", user.userId);
			}
		}

		model.addAttribute("err_code", err_code);
		model.addAttribute("err_msg", err_msg);

		if (!"0".equals(err_code)) {
			return "forward:/login.do";
		} else {
			return "forward:/main.do";
		}
	}

	@RequestMapping(value = "/signUp.do")
	public String SignUp(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 회원가입화면");
		return "signUp";
	}

	

	@ResponseBody
	@RequestMapping(value = "/idCheck", method = RequestMethod.POST)
	public int idCheck(String login_id) throws Exception {
		System.out.println("유저컨트롤에서 유저아이디가져오기");

		int result = userService.idCheck(login_id);
		return result;
	}

	@RequestMapping(value = "/idCheckAction.do")
	public String idCheckAction(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 아이디 중복확인처리");

		String login_id = requests.getParameter("login_id");

		System.out.println("idCheckAction.do : " + login_id);

		String check_ok = "F";
		String idCheck_msg = "";

		int result = userService.idCheck(login_id);

		if (result == 0) {
			System.out.println("중복된 아이디 없음");
			check_ok = "T";
			idCheck_msg = "사용 가능한 아이디 입니다.";

		} else {
			System.out.println("중복된 아이디 있음, 다른아이디 입력요망");
			check_ok = "F";
			idCheck_msg = "중복된 아이디 존재, 다른 아이디 입력하세요.";

		}

		model.addAttribute("check_ok", check_ok);
		model.addAttribute("check_msg", idCheck_msg);

		return "jsonView";
	}
	
	@RequestMapping(value = "/addOrderProd.do")
	public String addOrderProd(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 orderProd 테이블 추가");
		
		
		String order_id = requests.getParameter("order_id");
		String prod_id = requests.getParameter("prod_id");
		String prod_nm = requests.getParameter("prod_nm");
		int prod_sale_price = Integer.parseInt(requests.getParameter("prod_sale_price"));
		int qty = Integer.parseInt(requests.getParameter("qty"));
		
		System.out.println("addOrderProd.do : " + order_id);
		
		String err_code = "";
		String err_msg = "";
		
		boolean success = userService.addOrderProd(order_id, prod_id, prod_nm, prod_sale_price, qty);
		
		try {
			if (success) {
				System.out.println("인서트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("인서트 실패");
				err_code = "0";
				err_msg = "주문상품 리스트 등록에 실패했습니다.";
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			err_code = "-1";
			err_msg = "알수없는 에러가 발생했습니다.";
		}
		
		model.addAttribute("err_code", err_code);
		model.addAttribute("err_msg", err_msg);
		
		return "jsonView";
	}
	@RequestMapping(value = "/addOrder.do")
	public String addOrder(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 order 테이블 추가");
		
		
		String order_id = requests.getParameter("order_id");
		String user_id = (String)requests.getSession().getAttribute("user_id");
		int tot_price = Integer.parseInt(requests.getParameter("tot_price"));
		int tot_qty = Integer.parseInt(requests.getParameter("tot_qty"));
		int deliv_fee = Integer.parseInt(requests.getParameter("deliv_fee"));
		String order_dt = requests.getParameter("order_dt");
		
		System.out.println("addOrder.do : " + order_id);
		
		String err_code = "";
		String err_msg = "";
		
		boolean success = userService.addOrder(order_id, user_id, tot_price, tot_qty, deliv_fee, order_dt);
		
		try {
			if (success) {
				System.out.println("인서트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("인서트 실패");
				err_code = "0";
				err_msg = "주문 리스트 등록에 실패했습니다.";
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			err_code = "-1";
			err_msg = "알수없는 에러가 발생했습니다.";
		}
		
		model.addAttribute("err_code", err_code);
		model.addAttribute("err_msg", err_msg);
		
		return "jsonView";
	}

	@RequestMapping(value = "/signUpAction.do")
	public String SignUpAction(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("유저컨트롤에서 회원가입처리");

		String nextId = userService.nextUserId();
		System.out.println("nextId : " + nextId);

		String login_id = requests.getParameter("login_id");
		String login_pwd = requests.getParameter("login_pwd");
		String user_name = requests.getParameter("user_name");
		String user_birth = requests.getParameter("user_birth");
		String user_phone = requests.getParameter("user_phone");
		String user_email = requests.getParameter("user_email");

		String err_code = "";
		String err_msg = "";

		boolean success = userService.signUp(nextId, login_id, login_pwd, user_name, user_birth, user_phone,
				user_email);
		try {
			if (success) {
				System.out.println("인서트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("인서트 실패");
				err_code = "0";
				err_msg = "회원가입이 실패했습니다.";
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			err_code = "-1";
			err_msg = "알수없는 에러가 발생했습니다.";
		}

		model.addAttribute("err_code", err_code);
		model.addAttribute("err_msg", err_msg);

		return "jsonView";
	}

	@GetMapping("/logout.do")
	public String logout(HttpSession session) {
		System.out.println("유저컨트롤에서 로그아웃처리 후 메인으로");
		session.invalidate();
		return "redirect:/main.do"; // 주소 요청으로 변경
	}
}
