package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：InfomationEntity
 * Description：数据库中 t_infomation表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class InfomationEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * title标题
	     */
	    private String title;
	    /**
	     * 头图信息，多个用分号隔开
	     */
	    private String picUrls;
	    /**
	     * 主体信息
	     */
	    private String content;
	    /**
	     * 信息分类，1：基础信息，0：头图等信息
	     */
	    private int infoType;
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
	     * 备用描述信息
	     */
	    private String describ;
	
}