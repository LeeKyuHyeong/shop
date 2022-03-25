package com.kh.exception;

import org.egovframe.rte.fdl.cmmn.exception.handler.ExceptionHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ShopExceptionHandler implements ExceptionHandler{

	private static final Logger LOGGER = LoggerFactory.getLogger(ShopExceptionHandler.class);

    /**
     * 발생된 Exception을 처리한다.
     */
    public void occur(Exception ex, String packageName) {
		LOGGER.debug("[HANDLER][PACKAGE]::: {}", packageName);
		LOGGER.debug("[HANDLER][Exception]:::", ex);
    }
}
