package com.bj.supercar.manage.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {
    //http://localhost:8080/com_spring_mybatis_user_web/index
	@ResponseBody
	@RequestMapping("/index")
	public String getUserInfo(HttpServletRequest request,
			HttpServletResponse response)
	{
		String username=request.getParameter("username");
		return "fjsh web";
	}
}