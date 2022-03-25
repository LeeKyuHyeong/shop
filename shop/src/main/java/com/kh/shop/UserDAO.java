package com.kh.shop;

import javax.inject.Inject;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.SqlSession;
import org.egovframe.rte.psl.dataaccess.EgovAbstractMapper;
import org.springframework.stereotype.Repository;

@Repository("UserDAO")
public class UserDAO extends EgovAbstractMapper {
	
	//@Inject
	//SqlSession sqlSession;
	
	@SuppressWarnings("unchecked")
	public UserVO selectUserInfo(UserVO userVO) throws Exception {
		return selectOne("user.selectUserInfo", userVO);
	}
	@SuppressWarnings("unchecked")
	public UserVO selectOrderUser(UserVO userVO) throws Exception {
		return selectOne("user.selectOrderUser", userVO);
	}
	
	public String nextUserId() {
		
		return selectOne("nextUserId");
	}
	public String findId(UserVO userVO) {
		
		return selectOne("findId", userVO);
	}
	
	public String findPwd(UserVO userVO) {
		
		return selectOne("findPwd", userVO);
	}
	
	
	public int signUp(UserVO userVO) {
		return insert("user.signUp", userVO);
	}
	public int addOrderProd(OrderProdVO orderprodVO) {
		return insert("user.addOrderProd", orderprodVO);
	}
	public int addOrder(OrderVO orderVO) {
		return insert("user.addOrder", orderVO);
	}
	
	public int idCheck(String loginId) throws Exception {
		int cnt = selectOne("user.idCheck", loginId);
		return cnt;		
	}
}
