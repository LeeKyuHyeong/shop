package com.kh.shop;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@SessionAttributes(types = ProductVO.class)
public class KhShopMainController {
	@Resource(name = "MainService")
	private MainService mainService;

	@RequestMapping("/base3.do")
	public String base(HttpServletRequest requests, ModelMap model) throws Exception {
		return "base3";
	}
	
	@RequestMapping(value = "/orderList.do")
	public String orderList(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("메인컨트롤에서 주문내역화면");
		String user_id = (String)requests.getSession().getAttribute("user_id");
		
		System.out.println("user_id : " + user_id);
		
		Map<String, Object> map = mainService.selectOrderList(user_id);
		
		List<OrderVO> list = (List<OrderVO>)map.get("orderedList");

		ObjectMapper mapper = new ObjectMapper();
		String strOrderItem = mapper.writeValueAsString(list);
		System.out.println("strOrderItem : " + strOrderItem);

		model.addAttribute("orderedList", strOrderItem);
		
		return "orderList";
	}
	
	@RequestMapping(value = "/orderAdd.do")
	public String orderAdd(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("메인컨트롤에서 주문담기");
		
		String order_id = requests.getParameter("order_id");
		String user_id = requests.getParameter("user_id");
		int tot_price = Integer.parseInt(requests.getParameter("tot_price"));
		int tot_qty = Integer.parseInt(requests.getParameter("tot_qty"));
		int deliv_fee = Integer.parseInt(requests.getParameter("deliv_fee"));
		String order_dt = requests.getParameter("order_dt");
		
		boolean add_success = mainService.orderAdd(order_id, user_id, tot_price, tot_qty, deliv_fee, order_dt);
		
		String err_code = "";
		String err_msg = "";

		try {
			if (add_success) {
				System.out.println("주문 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("주문 실패");
				err_code = "0";
				err_msg = "주문을 실패했습니다.";
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
	
	@RequestMapping("/main.do")
	public String main(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("MainPage-------------------");

		String category_id = requests.getParameter("category");
		String category_name = requests.getParameter("category_nm");
		String product_name = requests.getParameter("productName");

		System.out.println("categoryid : " + category_id + ", category Name : " + category_name);

		if (category_id != null && !"".equals(category_id)) {
			Map<String, Object> map = mainService.selectProducts(category_id);
			model.addAttribute("category_id", category_id);
			model.addAttribute("category_nm", category_name);
			model.addAttribute("productList", map.get("productList"));
		} else if (product_name != null && !"".equals(product_name)) {
			Map<String, Object> map = mainService.selectProductsByName(product_name);
			model.addAttribute("productName", product_name);
			model.addAttribute("productList", map.get("productList"));
		} else {
			Map<String, Object> map = mainService.selectProducts("");

			model.addAttribute("category_id", "");
			model.addAttribute("productList", map.get("productList"));
		}

		return "main";
	}

	@RequestMapping(value = "/productDetail.do")
	public String ProductDetail(HttpServletRequest requests, ModelMap model) throws Exception {

		String productid = requests.getParameter("productid");
		System.out.println("productid : " + productid);

		ProductVO product = mainService.selectProductInfo(productid);
		model.addAttribute("product", product);

		Map<String, Object> map = mainService.selectColor(productid);
		model.addAttribute("productColor", map.get("productColor"));
		System.out.println(map.get("productColor").toString());

		Map<String, Object> map2 = mainService.selectProductImage(productid);
		model.addAttribute("imageList", map2.get("imageList"));

		Map<String, Object> map3 = mainService.getSize(productid);
		model.addAttribute("getSize", map3.get("getSize"));
		
		return "productDetail";
	}

	@RequestMapping(value = "/getSize.do")
	public String getSize(HttpServletRequest requests, ModelMap model) throws Exception {

		String productid = requests.getParameter("prod_id");
		String colorname = requests.getParameter("color_nm");

		System.out.println("productid : " + productid + ", colorname : " + colorname);

		Map<String, Object> map2 = mainService.selectSize(productid, colorname);
		model.addAttribute("productSize", map2.get("productSize"));

		return "jsonView";
	}
	
	@RequestMapping(value = "/cart.do")
	public String cart(HttpServletResponse response, HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("메인컨트롤에서 장바구니화면");

		String userid = (String) requests.getSession().getAttribute("user_id");
		
		System.out.println("userid : " + userid);

		Map<String, Object> map = mainService.selectCartList(userid);
		List<CartVO> list = (List<CartVO>)map.get("cartList");

		ObjectMapper mapper = new ObjectMapper();
		String strCartItem = mapper.writeValueAsString(list);
		System.out.println("strCartItem : " + strCartItem);
		
		//int clear = mainService.cartClear();
		//System.out.println("카트 클리어 : " + clear + "개 삭제");

		model.addAttribute("cartList", strCartItem);
		return "cart";
	}
	
	@RequestMapping(value = "/cartDrop.do")
	public String cartDrop(HttpServletRequest requests, ModelMap model) throws Exception {
		
		String uuid = requests.getParameter("uuid");
		System.out.println("삭제할 카트uuid : " + uuid);
		
		boolean drop_success = mainService.cartDrop(uuid);
		
		String err_code = "";
		String err_msg = "";

		try {
			if (drop_success) {
				System.out.println("삭제 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("삭제 실패");
				err_code = "0";
				err_msg = "장바구니 삭제를 실패했습니다.";
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
	
	@RequestMapping(value = "/cartAdd.do")
	public String cartAdd(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("메인컨트롤에서 카트담기");
		
		
		String uuid = requests.getParameter("uuid");
		String user_id = requests.getParameter("user_id");
		String prod_id = requests.getParameter("prod_id");
		String cart_img = requests.getParameter("cart_img");
		String prod_nm = requests.getParameter("prod_nm");
		String color_nm = requests.getParameter("color_nm");
		String size_nm = requests.getParameter("size_nm");
		String prod_price = requests.getParameter("prod_price");
		int qty = Integer.parseInt(requests.getParameter("qty"));
		String prod_sale_price = requests.getParameter("prod_sale_price");

		System.out.print(uuid + "\t");
		System.out.print(user_id + "\t");
		System.out.print(prod_id + "\t");
		System.out.print(cart_img + "\t");
		System.out.print(prod_nm + "\t");
		System.out.print(color_nm + "\t");
		System.out.print(size_nm + "\t");
		System.out.print(prod_price + "\t");
		System.out.print(qty + "\t");
		System.out.print(prod_sale_price + "\t");

		boolean success = mainService.cartAdd(uuid, user_id, prod_id, cart_img, prod_nm, color_nm, size_nm,
				prod_price, qty, prod_sale_price);
		String err_code = "";
		String err_msg = "";

		try {
			if (success) {
				System.out.println("인서트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("인서트 실패");
				err_code = "0";
				err_msg = "장바구니 담기를 실패했습니다.";
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

	/*
	 * @RequestMapping(value = "/cartDel.do") public String
	 * cartDel(HttpServletRequest requests, ModelMap model) throws Exception { int
	 * cart_id = Integer.parseInt(requests.getParameter("cart_id"));
	 * 
	 * boolean success = mainService.cartDel(cart_id);
	 * 
	 * String err_code = ""; String err_msg = "";
	 * 
	 * try { if (success) { System.out.println("업데이트 성공"); err_code = "1"; err_msg =
	 * ""; } else { System.out.println("업데이트 실패"); err_code = "0"; err_msg =
	 * "장바구니 삭제를 실패했습니다."; } } catch (Exception ex) { ex.printStackTrace(); err_code
	 * = "-1"; err_msg = "알수없는 에러가 발생했습니다."; }
	 * 
	 * model.addAttribute("err_code", err_code); model.addAttribute("err_msg",
	 * err_msg);
	 * 
	 * return "jsonView"; }
	 */

	/*
	 * @RequestMapping(value = "/itemCnt.do") public String
	 * itemCnt(HttpServletRequest requests, ModelMap model) throws Exception {
	 * 
	 * int cart_id = Integer.parseInt(requests.getParameter("cart_id")); int cnt =
	 * Integer.parseInt(requests.getParameter("cnt"));
	 * 
	 * boolean success = mainService.itemCnt(cart_id, cnt);
	 * 
	 * String err_code = ""; String err_msg = "";
	 * 
	 * try { if (success) { System.out.println("업데이트 성공"); err_code = "1"; err_msg =
	 * ""; } else { System.out.println("업데이트 실패"); err_code = "0"; err_msg =
	 * "장바구니 삭제를 실패했습니다."; } } catch (Exception ex) { ex.printStackTrace(); err_code
	 * = "-1"; err_msg = "알수없는 에러가 발생했습니다."; }
	 * 
	 * model.addAttribute("err_code", err_code); model.addAttribute("err_msg",
	 * err_msg);
	 * 
	 * return "jsonView"; }
	 */

	

	@RequestMapping(value = "/setCheck.do")
	public String setCheck(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("카트에서 체크박스 체크");
		int cart_id = Integer.parseInt(requests.getParameter("cart_Id"));

		boolean success = mainService.setCheck(cart_id);

		String err_code = "";
		String err_msg = "";

		try {
			if (success) {
				System.out.println("업데이트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("업데이트 실패");
				err_code = "0";
				err_msg = "체크박스 체크를 실패했습니다.";
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

	@RequestMapping(value = "/delCheck.do")
	public String delCheck(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("카트에서 체크박스 체크해제");
		int cart_id = Integer.parseInt(requests.getParameter("cart_Id"));

		boolean success = mainService.delCheck(cart_id);

		String err_code = "";
		String err_msg = "";

		try {
			if (success) {
				System.out.println("업데이트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("업데이트 실패");
				err_code = "0";
				err_msg = "체크박스 체크해제를 실패했습니다.";
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

	@RequestMapping(value = "/resetCheck.do")
	public String resetCheck(HttpServletRequest requests, ModelMap model) throws Exception {
		System.out.println("카트에서 전체주문 리셋");
		String user_id = requests.getParameter("user_id");

		boolean success = mainService.resetCheck(user_id);

		String err_code = "";
		String err_msg = "";

		try {
			if (success) {
				System.out.println("업데이트 성공");
				err_code = "1";
				err_msg = "";
			} else {
				System.out.println("업데이트 실패");
				err_code = "0";
				err_msg = "전체주문 리셋를 실패했습니다.";
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

}
