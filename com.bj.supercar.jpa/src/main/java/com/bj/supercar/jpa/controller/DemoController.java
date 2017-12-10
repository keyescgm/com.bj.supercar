package com.bj.supercar.jpa.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.alibaba.fastjson.JSON;

@Controller
@RequestMapping("/demo")
public class DemoController {
	//@Autowired
	//private DemoService demoService;

	@ResponseBody
	@RequestMapping("/info")
	public String getInfo(HttpServletRequest request,
			HttpServletResponse response) {
		String username = request.getParameter("username");
		return "fjsh web";
	}

	/*
    // http://localhost:8080/com_spring_mybatis_user_web/demo/basicjsoninfo
	@ResponseBody
	@RequestMapping("/basicjsoninfo")
	public String getbasicInfo(HttpServletRequest request,
			HttpServletResponse response) {
		DemoEntity demoEntity = demoService.selectByPrimaryKey(1l);
		return JSON.toJSONString(demoEntity);
	}

	// http://localhost:8080/com_spring_mybatis_user_web/demo/basicjson
	@ResponseBody
	@RequestMapping(value = "/basicjson", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String getbasicjsonInfo(HttpServletRequest request,
			HttpServletResponse response) {
		DemoEntity demoEntity = demoService.selectByPrimaryKey(1l);
		return JSON.toJSONString(demoEntity);
	}

	// http://localhost:8080/com_spring_mybatis_user_web/demo/velocity
	@RequestMapping("/velocity")
	public String showUser(ModelMap modelMap, HttpServletRequest request) {
		modelMap.put("user", "fjsh");
		return "demo";
	}

	// http://localhost:8080/com_spring_mybatis_user_web/demo/showinfbyid?id=2
	@RequestMapping("showinfbyid")
	public String showUserEntity(String id, ModelMap modelMap,
			HttpServletRequest request) {
		DemoEntity demoEntity = demoService
				.selectByPrimaryKey(Long.valueOf(id));
		modelMap.put("user", demoEntity.getName());
		return "demo";
	}

	// http://localhost:8080/com_spring_mybatis_user_web/demo/demoredir
	@RequestMapping("/demoredir")
	public String showUsers(ModelMap modelMap, HttpServletRequest request) {
		return "redirect:/demo/velocity";
	}

	// http://localhost:8080/com_spring_mybatis_user_web/demo/demolist
	@RequestMapping("/demolist")
	public String list(ModelMap model, HttpServletRequest request) {
		model.put("list", demoService.getListByPage(0, 10));
		return "list";
	}

	// http://localhost:8080/com_spring_mybatis_user_web/demo/1
	@RequestMapping("/{id}")
	public String detail(@PathVariable(value = "id") String id, ModelMap model) {
		DemoEntity demoEntity = demoService
				.selectByPrimaryKey(Long.valueOf(id));
		model.put("user", demoEntity.getName());
		return "demo";
	}*/
}
