package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：StagestatusEntity
 * Description：数据库中 t_stagestatus表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class StagestatusEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * jobid信息
	     */
	    private long jobId;
	    /**
	     * 
	     */
	    private String stageName;
	    /**
	     * 状态信息
	     */
	    private String status;
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
	    /**
	     * 不同运行阶段的关键信息
	     */
	    private String stageInfo;
	
}