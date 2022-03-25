package com.kh.exception;

import org.apache.log4j.Level;
import org.egovframe.rte.fdl.cmmn.trace.handler.TraceHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ShopTraceHandler implements TraceHandler{
	private static final Logger LOGGER = LoggerFactory.getLogger(ShopTraceHandler.class);

    /**
     * 발생된 메시지를 출력한다.
     */
    public void todo(Class<?> clazz, String message) {
    	
    	System.out.println("log ==> DefaultTraceHandler run...............");
    	LOGGER.debug("[TRACE]CLASS::: {}", clazz.getName());
    	LOGGER.debug("[TRACE]MESSAGE::: {}", message);
    	//이곳에서 후속처리로 필요한 액션을 취할 수 있다.
    }
}
