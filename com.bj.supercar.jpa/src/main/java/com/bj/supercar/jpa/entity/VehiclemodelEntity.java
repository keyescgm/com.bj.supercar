package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：VehiclemodelEntity
 * Description：数据库中 t_vehiclemodel表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class VehiclemodelEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 车型名称
	     */
	    private String name;
	    /**
	     * 车型图标地址
	     */
	    private String picUrl;
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