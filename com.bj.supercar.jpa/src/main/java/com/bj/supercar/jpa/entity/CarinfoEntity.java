package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：CarinfoEntity
 * Description：数据库中 t_carinfo表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class CarinfoEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * 标题
	     */
	    private String title;
	    /**
	     * 品牌类型id
	     */
	    private long brandId;
	    /**
	     * 车系id，可以没有
	     */
	    private long seriesId;
	    /**
	     * 所属城市名称
	     */
	    private long cityId;
	    /**
	     * 车型类型id
	     */
	    private long vehiclemodelId;
	    /**
	     * 变速箱类型，0：暂无，1：自动，2：手动，3：自动手动都有
	     */
	    private int speedType;
	    /**
	     * 驱动类型，0：暂无，1：一驱，2：二驱，3：三驱，4：四驱
	     */
	    private int driveType;
	    /**
	     * 排量 单位T
	     */
	    private float displacement;
	    /**
	     * 排放标准，0：暂无，1：国一，2：国二，3：国三，4：国四，5：国五
	     */
	    private int dispType;
	    /**
	     * 颜色类型id
	     */
	    private long colorId;
	    /**
	     * 车辆图片信息，多个用分号隔开
	     */
	    private String picUrls;
	    /**
	     * 车辆价格，单位万
	     */
	    private float price;
	    /**
	     * 详细信息，富文本
	     */
	    private String content;
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