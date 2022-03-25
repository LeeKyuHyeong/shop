package com.kh.shop;

public class OrderProdVO {
	String orderId;
	String productId;
	String productName;
	int productSalePrice;
	int qty;
	
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProdcutSalePrice() {
		return productSalePrice;
	}
	public void setProdcutSalePrice(int prodcutSalePrice) {
		this.productSalePrice = prodcutSalePrice;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
}
