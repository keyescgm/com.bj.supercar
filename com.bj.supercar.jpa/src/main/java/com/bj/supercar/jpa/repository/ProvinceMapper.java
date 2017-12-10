package com.bj.supercar.jpa.repository;

import com.bj.supercar.jpa.dynamicsql.ProvinceSql;
import com.bj.supercar.jpa.entity.ProvinceEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.*;
/**
 * ClassName：ProvinceMapper
 * Description：数据库中 t_province表对应的实体类
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
public interface ProvinceMapper {
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
    @Insert("insert into t_province (name,enabled,insert_time,lastupdate_time,operator,describ)" +
    "values( #{name,jdbcType=VARCHAR} ,#{enabled,jdbcType=SMALLINT} ,#{insertTime,jdbcType=TIMESTAMP} ,#{lastupdateTime,jdbcType=TIMESTAMP} ,#{operator,jdbcType=VARCHAR} ,#{describ,jdbcType=VARCHAR} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(ProvinceEntity entity);

    /**
     * 根据已有数据的列插入数据
     * @param entity
     * @return
     */
    //int insertSelective(ProvinceEntity entity);

    /**
     * 根据主键id获取实体
     * @param id
     * @return
     */
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "name", column = "name"),
            @Result(property = "enabled", column = "enabled"),
            @Result(property = "insertTime", column = "insert_time"),
            @Result(property = "lastupdateTime", column = "lastupdate_time"),
            @Result(property = "operator", column = "operator"),
            @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_province WHERE id = #{id} limit 1")
    ProvinceEntity selectByPrimaryKey(Long id);

    /**
    * 分页获取数据集合
    * @param offset 记录开始值
    * @param size 数量
    * @return
    */
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "name", column = "name"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "insertTime", column = "insert_time"),
        @Result(property = "lastupdateTime", column = "lastupdate_time"),
        @Result(property = "operator", column = "operator"),
        @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_province  limit #{offset},#{size}")
    List<ProvinceEntity> findAllByPages(@Param("offset") int offset,@Param("size") int size);

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
                @Result(property = "name", column = "name"),
                @Result(property = "enabled", column = "enabled"),
                @Result(property = "insertTime", column = "insert_time"),
                @Result(property = "lastupdateTime", column = "lastupdate_time"),
                @Result(property = "operator", column = "operator"),
                @Result(property = "describ", column = "describ")    })
    @SelectProvider(type=ProvinceSql.class, method="getListByCondSql")
    List<ProvinceEntity> getListByCond(String columns,String where,String orderby,String limit);

    /**
     * 根据已有数据的列更新数据
     * @param entity
     * @return
     */
    //int updateByPrimaryKeySelective(ProvinceEntity entity);

    /**
     * 更新实体信息
     * @param entity
     * @return
     */
    @Update("update t_province set   name=#{name,jdbcType=VARCHAR} , enabled=#{enabled,jdbcType=SMALLINT} , insert_time=#{insertTime,jdbcType=TIMESTAMP} , lastupdate_time=#{lastupdateTime,jdbcType=TIMESTAMP} , operator=#{operator,jdbcType=VARCHAR} , describ=#{describ,jdbcType=VARCHAR}   where id=#{id}")
    int updateByPrimaryKey(ProvinceEntity entity);

    /**
    *根据条件查询count数量
    * @param where 查询条件 默认为空
    */
    @SelectProvider(type=ProvinceSql.class, method="getCountByCondSql")
    int getCountByCond(String where);
    /**
    *根据条件删除
    * @param where 查询条件 默认为空
    */
    @DeleteProvider(type=ProvinceSql.class, method="deleteByCondSql")
    int deleteByCond(String where);
    /**
    * 简单count查询
    * @return size
    */
    @Select("SELECT count(*) FROM t_province ")
    int getCount();

}