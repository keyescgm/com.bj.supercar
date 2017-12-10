package com.bj.supercar.jpa.repository;

import com.bj.supercar.jpa.dynamicsql.CarinfoSql;
import com.bj.supercar.jpa.entity.CarinfoEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.*;
/**
 * ClassName：CarinfoMapper
 * Description：数据库中 t_carinfo表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
public interface CarinfoMapper {
    /**
     * 根据主键id删除数据
     * @param id
     * @return
     */
    @Delete("DELETE FROM table.dbtablename WHERE id = #{id}")
    int deleteByPrimaryKey(Long id);

    /**
     * 插入数据
     * @param entity
     * @return
     */
    @Insert("insert into t_carinfo (title,brand_id,series_id,city_id,vehiclemodel_id,speed_type,drive_type,displacement,disp_type,color_id,pic_urls,price,content,enabled,insert_time,lastupdate_time,operator,describ)" +
    "values( #{title,jdbcType=VARCHAR} ,#{brandId,jdbcType=BIGINT} ,#{seriesId,jdbcType=BIGINT} ,#{cityId,jdbcType=BIGINT} ,#{vehiclemodelId,jdbcType=BIGINT} ,#{speedType,jdbcType=SMALLINT} ,#{driveType,jdbcType=SMALLINT} ,#{displacement,jdbcType=FLOAT} ,#{dispType,jdbcType=SMALLINT} ,#{colorId,jdbcType=BIGINT} ,#{picUrls,jdbcType=VARCHAR} ,#{price,jdbcType=FLOAT} ,#{content,jdbcType=VARCHAR} ,#{enabled,jdbcType=SMALLINT} ,#{insertTime,jdbcType=TIMESTAMP} ,#{lastupdateTime,jdbcType=TIMESTAMP} ,#{operator,jdbcType=VARCHAR} ,#{describ,jdbcType=VARCHAR} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(CarinfoEntity entity);

    /**
     * 根据已有数据的列插入数据
     * @param entity
     * @return
     */
    //int insertSelective(CarinfoEntity entity);

    /**
     * 根据主键id获取实体
     * @param id
     * @return
     */
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "title", column = "title"),
            @Result(property = "brandId", column = "brand_id"),
            @Result(property = "seriesId", column = "series_id"),
            @Result(property = "cityId", column = "city_id"),
            @Result(property = "vehiclemodelId", column = "vehiclemodel_id"),
            @Result(property = "speedType", column = "speed_type"),
            @Result(property = "driveType", column = "drive_type"),
            @Result(property = "displacement", column = "displacement"),
            @Result(property = "dispType", column = "disp_type"),
            @Result(property = "colorId", column = "color_id"),
            @Result(property = "picUrls", column = "pic_urls"),
            @Result(property = "price", column = "price"),
            @Result(property = "content", column = "content"),
            @Result(property = "enabled", column = "enabled"),
            @Result(property = "insertTime", column = "insert_time"),
            @Result(property = "lastupdateTime", column = "lastupdate_time"),
            @Result(property = "operator", column = "operator"),
            @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_carinfo WHERE id = #{id} limit 1")
    CarinfoEntity selectByPrimaryKey(Long id);

    /**
    * 分页获取数据集合
    * @param offset 记录开始值
    * @param size 数量
    * @return
    */
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "title", column = "title"),
        @Result(property = "brandId", column = "brand_id"),
        @Result(property = "seriesId", column = "series_id"),
        @Result(property = "cityId", column = "city_id"),
        @Result(property = "vehiclemodelId", column = "vehiclemodel_id"),
        @Result(property = "speedType", column = "speed_type"),
        @Result(property = "driveType", column = "drive_type"),
        @Result(property = "displacement", column = "displacement"),
        @Result(property = "dispType", column = "disp_type"),
        @Result(property = "colorId", column = "color_id"),
        @Result(property = "picUrls", column = "pic_urls"),
        @Result(property = "price", column = "price"),
        @Result(property = "content", column = "content"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "insertTime", column = "insert_time"),
        @Result(property = "lastupdateTime", column = "lastupdate_time"),
        @Result(property = "operator", column = "operator"),
        @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_carinfo  limit #{offset},#{size}")
    List<CarinfoEntity> findAllByPages(@Param("offset") int offset,@Param("size") int size);

    /**
    * 根据条件进行查询，返回列表信息
    * @param columns 返回字段信息，默认返回所有
    * @param where 查询条件
    * @param orderby 排序条件，无则填""
    * @param limit 查询数量，如：0,1
    * @return
    */
    @Results({
            @Result(property = "id", column = "id"),
                @Result(property = "title", column = "title"),
                @Result(property = "brandId", column = "brand_id"),
                @Result(property = "seriesId", column = "series_id"),
                @Result(property = "cityId", column = "city_id"),
                @Result(property = "vehiclemodelId", column = "vehiclemodel_id"),
                @Result(property = "speedType", column = "speed_type"),
                @Result(property = "driveType", column = "drive_type"),
                @Result(property = "displacement", column = "displacement"),
                @Result(property = "dispType", column = "disp_type"),
                @Result(property = "colorId", column = "color_id"),
                @Result(property = "picUrls", column = "pic_urls"),
                @Result(property = "price", column = "price"),
                @Result(property = "content", column = "content"),
                @Result(property = "enabled", column = "enabled"),
                @Result(property = "insertTime", column = "insert_time"),
                @Result(property = "lastupdateTime", column = "lastupdate_time"),
                @Result(property = "operator", column = "operator"),
                @Result(property = "describ", column = "describ")    })
    @SelectProvider(type=CarinfoSql.class, method="getListByCondSql")
    List<CarinfoEntity> getListByCond(String columns,String where,String orderby,String limit);

    /**
     * 根据已有数据的列更新数据
     * @param entity
     * @return
     */
    //int updateByPrimaryKeySelective(CarinfoEntity entity);

    /**
     * 更新实体信息
     * @param entity
     * @return
     */
    @Update("update t_carinfo set   title=#{title,jdbcType=VARCHAR} , brand_id=#{brandId,jdbcType=BIGINT} , series_id=#{seriesId,jdbcType=BIGINT} , city_id=#{cityId,jdbcType=BIGINT} , vehiclemodel_id=#{vehiclemodelId,jdbcType=BIGINT} , speed_type=#{speedType,jdbcType=SMALLINT} , drive_type=#{driveType,jdbcType=SMALLINT} , displacement=#{displacement,jdbcType=FLOAT} , disp_type=#{dispType,jdbcType=SMALLINT} , color_id=#{colorId,jdbcType=BIGINT} , pic_urls=#{picUrls,jdbcType=VARCHAR} , price=#{price,jdbcType=FLOAT} , content=#{content,jdbcType=VARCHAR} , enabled=#{enabled,jdbcType=SMALLINT} , insert_time=#{insertTime,jdbcType=TIMESTAMP} , lastupdate_time=#{lastupdateTime,jdbcType=TIMESTAMP} , operator=#{operator,jdbcType=VARCHAR} , describ=#{describ,jdbcType=VARCHAR}   where id=#{id}")
    int updateByPrimaryKey(CarinfoEntity entity);

    /**
    *根据条件查询count数量
    * @param where 查询条件 默认为空
    */
    @SelectProvider(type=CarinfoSql.class, method="getCountByCondSql")
    int getCountByCond(String where);
    /**
    *根据条件删除
    * @param where 查询条件 默认为空
    */
    @DeleteProvider(type=CarinfoSql.class, method="deleteByCondSql")
    int deleteByCond(String where);
    /**
    * 简单count查询
    * @return size
    */
    @Select("SELECT count(*) FROM t_carinfo ")
    int getCount();

}