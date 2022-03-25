package com.kh.shop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.kh.shop.ProductVO;

@Service("MainService")
public class MainService {

	@Resource(name = "MainDAO")
	private MainDAO mainDAO;

	public Map<String, Object> selectProducts(String categoryId) throws Exception {
		ProductSearchVO productVO = new ProductSearchVO();
		productVO.setCategoryId(categoryId);

		List<ProductVO> list = mainDAO.selectProductList(productVO);

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("productList", list);

		return map;
	}

	public Map<String, Object> selectProductsByName(String product_name) throws Exception {
		ProductSearchVO productVO = new ProductSearchVO();
		productVO.setProductName(product_name);

		List<ProductVO> list = mainDAO.selectProductList(productVO);

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("productList", list);

		return map;
	}

	public ProductVO selectProductInfo(String productId) throws Exception {

		ProductSearchVO searchVO = new ProductSearchVO();
		searchVO.setProductId(productId);

		ProductVO productVO = mainDAO.selectProductInfo(searchVO);

		return productVO;
	}

	public Map<String, Object> selectProductImage(String productId) throws Exception {

		ProductSearchVO searchVO = new ProductSearchVO();
		searchVO.setProductId(productId);

		List<ImageVO> list = mainDAO.selectProductImage(searchVO);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("imageList", list);

		return map;
	}

	public Map<String, Object> selectColor(String productId) throws Exception {

		ColorSizeVO searchVO = new ColorSizeVO();
		searchVO.setProductId(productId);

		List<ColorSizeVO> list = mainDAO.selectColor(searchVO);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("productColor", list);

		return map;
	}

	public Map<String, Object> selectSize(String productId, String productColor) throws Exception {

		ColorSizeVO searchVO = new ColorSizeVO();
		searchVO.setProductId(productId);
		searchVO.setColorName(productColor);

		List<ColorSizeVO> list = mainDAO.selectSize(searchVO);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("productSize", list);

		return map;
	}

	public Map<String, Object> getSize(String productId) throws Exception {

		ColorSizeVO searchVO = new ColorSizeVO();
		searchVO.setProductId(productId);

		List<ColorSizeVO> list = mainDAO.getSize(searchVO);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("getSize", list);

		return map;
	}

	public Map<String, Object> selectCartList(String userId) throws Exception {

		CartVO searchVO = new CartVO();
		searchVO.setUserId(userId);

		List<CartVO> list = mainDAO.selectCartList(searchVO);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("cartList", list);

		return map;
	}

	public CartVO getTotal(String userid) throws Exception {

		CartVO searchVO = new CartVO();
		searchVO.setUserId(userid);

		CartVO cartVO = mainDAO.getTotal(searchVO);

		return cartVO;
	}
	/*
	 * public int nextCartId() { int nextId = mainDAO.nextCartId();
	 * 
	 * return nextId; }
	 */

	public boolean cartAdd(String uuid, String user_id, String prod_id, String cart_img, String prod_nm,
			String color_nm, String size_nm, String prod_price, int qty, String prod_sale_price) {
		CartVO cartVO = new CartVO();

		cartVO.setUuId(uuid);
		cartVO.setUserId(user_id);
		cartVO.setProductId(prod_id);
		cartVO.setCartImg(cart_img);
		cartVO.setProductName(prod_nm);
		cartVO.setColorName(color_nm);
		cartVO.setSizeName(size_nm);
		cartVO.setQty(qty);
		cartVO.setProductPrice(prod_price);
		cartVO.setProductSalePrice(prod_sale_price);

		int rtn = mainDAO.cartAdd(cartVO);
		System.out.println("rtn : " + rtn);
		return (rtn > 0);
	}

	public boolean orderAdd(String order_id, String user_id, int tot_price, int tot_qty, int deliv_fee,
			String order_dt) {
		OrderVO orderVO = new OrderVO();

		orderVO.setOrderId(order_id);
		orderVO.setUserId(user_id);
		orderVO.setTotalPrice(tot_price);
		orderVO.setTotalQty(tot_qty);
		orderVO.setDeliveryFee(deliv_fee);
		orderVO.setOrderDate(order_dt);

		int rtn = mainDAO.orderAdd(orderVO);
		System.out.println("rtn : " + rtn);
		return (rtn > 0);
	}

	public Map<String, Object> selectOrderList(String user_id) throws Exception {

		OrderVO orderVO = new OrderVO();
		orderVO.setUserId(user_id);

		List<OrderVO> list = mainDAO.selectOrderList(orderVO);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("orderedList", list);

		return map;
	}
	/*
	 * public boolean cartDel(int cart_id) { CartVO cartVO = new CartVO();
	 * 
	 * //cartVO.setCartId(cart_id); int rtn = mainDAO.cartDel(cartVO);
	 * System.out.println("rtn : " + rtn); return (rtn > 0); }
	 */

	/*
	 * public boolean itemCnt(int cart_id, int cnt) { CartVO cartVO = new CartVO();
	 * 
	 * //cartVO.setCartId(cart_id); cartVO.setCnt(cnt);
	 * 
	 * int rtn = mainDAO.itemCnt(cartVO);
	 * 
	 * System.out.println("rtn : " + rtn);
	 * 
	 * return (rtn > 0); }
	 */
	public boolean setCheck(int cart_id) {
		CartVO cartVO = new CartVO();

		// cartVO.setCartId(cart_id);

		int rtn = mainDAO.setCheck(cartVO);

		System.out.println("rtn : " + rtn);

		return (rtn > 0);
	}

	public boolean delCheck(int cart_id) {
		CartVO cartVO = new CartVO();

		// cartVO.setCartId(cart_id);

		int rtn = mainDAO.delCheck(cartVO);

		System.out.println("rtn : " + rtn);

		return (rtn > 0);
	}

	public boolean resetCheck(String user_id) {
		CartVO cartVO = new CartVO();

		cartVO.setUserId(user_id);

		int rtn = mainDAO.resetCheck(cartVO);

		System.out.println("rtn : " + rtn);

		return (rtn > 0);
	}

	public boolean cartDrop(String uuid) {
		CartVO cartVO = new CartVO();

		cartVO.setUuId(uuid);

		int rtn = mainDAO.cartDrop(cartVO);

		System.out.println("rtn : " + rtn);

		return (rtn > 0);
	}
	// public int cartClear() {
	// return mainDAO.cartClear();
	// }
}
