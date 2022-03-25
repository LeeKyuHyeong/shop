package com.kh.shop;

import java.util.List;
import org.egovframe.rte.psl.dataaccess.EgovAbstractMapper;
import org.springframework.stereotype.Repository;

@Repository("MainDAO")
public class MainDAO extends EgovAbstractMapper {

	@SuppressWarnings("unchecked")
	public List<ProductVO> selectProductList(ProductSearchVO searchVO) throws Exception {
		return (List<ProductVO>) list("product.selectProductList", searchVO);
	}

	@SuppressWarnings("unchecked")
	public ProductVO selectProductInfo(ProductSearchVO searchVO) throws Exception {
		return selectOne("product.selectProductInfo", searchVO);
	}

	@SuppressWarnings("unchecked")
	public List<ImageVO> selectProductImage(ProductSearchVO searchVO) throws Exception {
		return (List<ImageVO>) list("product.selectProductImage", searchVO);
	}

	@SuppressWarnings("unchecked")
	public List<ColorSizeVO> selectColor(ColorSizeVO colorSizeVO) throws Exception {
		return (List<ColorSizeVO>) list("selectColor", colorSizeVO);
	}
	@SuppressWarnings("unchecked")
	public List<ColorSizeVO> selectSize(ColorSizeVO colorSizeVO) throws Exception {
		return (List<ColorSizeVO>) list("selectSize", colorSizeVO);
	}
	@SuppressWarnings("unchecked")
	public List<ColorSizeVO> getSize(ColorSizeVO colorSizeVO) throws Exception {
		return (List<ColorSizeVO>) list("getSize", colorSizeVO);
	}

	@SuppressWarnings("unchecked")
	public List<CartVO> selectCartList(CartVO cartVO) throws Exception {
		return (List<CartVO>) list("selectCartList", cartVO);
	}
	@SuppressWarnings("unchecked")
	public List<OrderVO> selectOrderList(OrderVO orderVO) throws Exception {
		return (List<OrderVO>) list("product.selectOrderList", orderVO);
	}
	@SuppressWarnings("unchecked")
	public CartVO getTotal(CartVO cartVO) throws Exception {
		return selectOne("getTotal", cartVO);
	}

	public int cartAdd(CartVO cartVO) {
		return insert("cartAdd", cartVO);
	}
	public int orderAdd(OrderVO orderVO) {
		return insert("orderAdd", orderVO);
	}

	/*
	 * public int cartDel(CartVO cartVO) { return update("cartDel", cartVO); }
	 */
	public int itemCnt(CartVO cartVO) {
		return update("itemCnt", cartVO);
	}
	public int setCheck(CartVO cartVO) {
		return update("setCheck", cartVO);
	}
	public int resetCheck(CartVO cartVO) {
		return update("resetCheck", cartVO);
	}
	public int delCheck(CartVO cartVO) {
		return update("delCheck", cartVO);
	}
	public int cartDrop(CartVO cartVO) {
		return delete("cartDrop", cartVO);
	}
	//public int cartClear() {
	//	return selectOne("cartClear");
	//}
}
