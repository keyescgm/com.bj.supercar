package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：ModelHostEntity
 * Description：数据库中 t_model_host表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class ModelHostEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 模型id信息
	     */
	    private long manageModelId;
	    /**
	     * 模型加载完的host信息
	     */
	    private String hostinfo;
	    /**
	     * 是否加载成功，1：成功，0：失败
	     */
	    private int loadState;
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