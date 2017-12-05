package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：ModelEntity
 * Description：数据库中 t_model表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class ModelEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 模型名称
	     */
	    private String modelName;
	    /**
	     * 模型类别：bgtree、dart
	     */
	    private String modelType;
	    /**
	     * 例如：dmlc-online.sh，可能无用
	     */
	    private String sourceFile;
	    /**
	     * 模型所有者
	     */
	    private String owner;
	    /**
	     * model out信息
	     */
	    private String modelOut;
	    /**
	     * 是否启用 0：未启用，1：启用
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