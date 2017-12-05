package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：ModelFileEntity
 * Description：数据库中 t_model_file表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class ModelFileEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 文件名称
	     */
	    private String fileName;
	    /**
	     * 文件类别：xgboost lr featuremap
	     */
	    private String fileType;
	    /**
	     * s3目录信息
	     */
	    private String fileBucketName;
	    /**
	     * s3文件名称
	     */
	    private String fileObjectName;
	    /**
	     * 文件md5信息
	     */
	    private String md5info;
	    /**
	     * 所有者
	     */
	    private String owner;
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