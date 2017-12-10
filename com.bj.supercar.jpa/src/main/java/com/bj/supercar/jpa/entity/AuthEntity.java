package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：AuthEntity
 * Description：数据库中 t_auth表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class AuthEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 权限名称
	     */
	    private String authName;
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
	     * 备用描述信息
	     */
	    private String describ;
	
}