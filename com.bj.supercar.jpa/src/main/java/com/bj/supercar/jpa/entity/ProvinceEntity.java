package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：ProvinceEntity
 * Description：数据库中 t_province表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class ProvinceEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 省份名称
	     */
	    private String name;
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