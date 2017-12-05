package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：ManageModelEntity
 * Description：数据库中 t_manage_model表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class ManageModelEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * job name
	     */
	    private String modelName;
	    /**
	     * 模型对应的文件id信息
	     */
	    private String modelFileIds;
	    /**
	     * model类别：1:xgboost;2:lr 3:featuremap
	     */
	    private String modelType;
	    /**
	     * 所有者
	     */
	    private String owner;
	    /**
	     * 生效范围，机器信息
	     */
	    private String hosts;
	    /**
	     * 
	     */
	    private String domainIds;
	    /**
	     * 是否启用， 0是未启用 1启用
	     */
	    private int active;
	    /**
	     * 模型更新任务id，uuid
	     */
	    private String taskid;
	    /**
	     * 模型所属的appkeyid
	     */
	    private long appkeyId;
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