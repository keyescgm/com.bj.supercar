package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：UserLogEntity
 * Description：数据库中 t_user_log表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class UserLogEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 操作记录：增加，删除，修改
	     */
	    private String action;
	    /**
	     * 操作记录信息
	     */
	    private String content;
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