package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：UserEntity
 * Description：数据库中 t_user表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class UserEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 用户名
	     */
	    private String userName;
	    /**
	     * 权限IDs,多个之间以,隔开
	     */
	    private String authIds;
	    /**
	     * 是否被删除，1：未被删除，0：已删除
	     */
	    private int enabled;
	    /**
	     * 录入时间
	     */
	    private Date insertTime;
	    /**
	     * 修改时间
	     */
	    private Date lastupdateTime;
	    /**
	     * 操作人
	     */
	    private String operator;
	    /**
	     * 
	     */
	    private String describ;
	
}