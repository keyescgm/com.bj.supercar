package com.bj.supercar.jpa.service;

import static org.junit.Assert.fail;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import com.bj.supercar.jpa.main.StartApp;
import com.bj.supercar.jpa.repository.UserLogMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = StartApp.class)
@WebAppConfiguration
public class UserLogMapperTest {

	@Resource
	UserLogMapper userLogMapper;
	@Test
	public void testGetCount() {
		System.out.println(userLogMapper.getCount());
	}
	@Test
	public void testDeleteByPrimaryKey() {
		fail("Not yet implemented");
	}

	@Test
	public void testInsert() {
		fail("Not yet implemented");
	}

	@Test
	public void testInsertSelective() {
		fail("Not yet implemented");
	}

	@Test
	public void testSelectByPrimaryKey() {
		//userLogMapper.selectByPrimaryKey(1l);
	}

	@Test
	public void testUpdateByPrimaryKeySelective() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateByPrimaryKey() {
		fail("Not yet implemented");
	}

}
