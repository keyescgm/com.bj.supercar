package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：DomainDescEntity
 * Description：数据库中 t_domain_desc表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class DomainDescEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * domain关联的管理模型
	     */
	    private long manageModelId;
	    /**
	     * domainname
	     */
	    private String domainName;
	    /**
	     * 是否全加载，1：全加载，0不全加载
	     */
	    private int allLoad;
	    /**
	     * domain主key
	     */
	    private String mainKey;
	    /**
	     * domain key由哪几列构成 等所有相关信息，从远程datahub接口获取后json保存
	     */
	    private String domainKeys;
	    /**
	     * domain 相关的field，fieldmap以及extractor转换器，转换后json保存
	     */
	    private String fieldJson;
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