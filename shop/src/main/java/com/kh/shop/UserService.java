package com.kh.shop;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

@Service("UserService")
public class UserService {

	@Resource(name = "UserDAO")
	private UserDAO userDAO;

	public UserVO selectUserInfo(String loginId) throws Exception {

		UserVO searchVO = new UserVO();
		searchVO.setLoginId(loginId);

		UserVO userVO = userDAO.selectUserInfo(searchVO);

		return userVO;
	}
	public UserVO selectOrderUser(String userId) throws Exception {
		
		UserVO searchVO = new UserVO();
		searchVO.setUserId(userId);
		
		UserVO userVO = userDAO.selectOrderUser(searchVO);
		
		return userVO;
	}

	public String findId(String name, String phone) {
		UserVO findVO = new UserVO();
		findVO.setUserName(name);
		findVO.setUserPhone(phone);

		String result = userDAO.findId(findVO);

		return result;
	}
	
	public String findPwd(String id, String name, String phone) {
		UserVO findVO = new UserVO();
		
		findVO.setLoginId(id);
		findVO.setUserName(name);
		findVO.setUserPhone(phone);
		
		String result = userDAO.findPwd(findVO);
		
		return result;
	}

	public int idCheck(String loginId) throws Exception {
		int cnt = userDAO.idCheck(loginId);
		return cnt;
	}

	public String nextUserId() {
		String nextId = userDAO.nextUserId();

		return nextId;
	}

	public boolean signUp(String user_id, String login_id, String login_pwd, String user_name, String user_birth,
			String user_phone, String user_email) {
		UserVO userVO = new UserVO();

		userVO.setUserId(user_id);
		userVO.setLoginId(login_id);
		userVO.setLoginPwd(login_pwd);
		userVO.setUserName(user_name);
		userVO.setUserBirthDay(user_birth);
		userVO.setUserPhone(user_phone);
		userVO.setUserEmail(user_email);

		int rtn = userDAO.signUp(userVO);

		return (rtn > 0);
	}
	public boolean addOrderProd(String order_id, String prod_id, String prod_nm, int prod_sale_price, int qty) {
		OrderProdVO orderprodVO = new OrderProdVO();
		
		orderprodVO.setOrderId(order_id);
		orderprodVO.setProductId(prod_id);
		orderprodVO.setProductName(prod_nm);
		orderprodVO.setProdcutSalePrice(prod_sale_price);
		orderprodVO.setQty(qty);
		
		int rtn = userDAO.addOrderProd(orderprodVO);
		
		return (rtn > 0);
	}
	public boolean addOrder(String order_id, String user_id, int tot_price, int tot_qty, int deliv_fee, String order_dt) {
		
		OrderVO orderVO = new OrderVO();
		
		orderVO.setOrderId(order_id);
		orderVO.setUserId(user_id);
		orderVO.setTotalPrice(tot_price);
		orderVO.setTotalQty(tot_qty);
		orderVO.setDeliveryFee(deliv_fee);
		orderVO.setOrderDate(order_dt);
		
		int rtn = userDAO.addOrder(orderVO);
		
		return (rtn > 0);
	}

	public void logout(HttpSession session) {
		session.invalidate();
	}

}
