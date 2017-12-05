package com.bj.supercar.jpa.repository;

import com.bj.supercar.jpa.dynamicsql.ModelHostSql;
import com.bj.supercar.jpa.entity.ModelHostEntity;
import java.util.List;

import org.apache.ibatis.annotations.*;
/**
 * ClassName：ModelHostMapper
 * Description：数据库中 t_model_host表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
public interface ModelHostMapper {
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
    @Insert("insert into t_model_host (manage_model_id,hostinfo,load_state,insert_time,lastupdate_time,operator,describ)" +
    "values( #{manageModelId,jdbcType=BIGINT} ,#{hostinfo,jdbcType=VARCHAR} ,#{loadState,jdbcType=SMALLINT} ,#{insertTime,jdbcType=TIMESTAMP} ,#{lastupdateTime,jdbcType=TIMESTAMP} ,#{operator,jdbcType=VARCHAR} ,#{describ,jdbcType=VARCHAR} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(ModelHostEntity entity);

    /**
     * 根据已有数据的列插入数据
     * @param entity
     * @return
     */
    //int insertSelective(ModelHostEntity entity);

    /**
     * 根据主键id获取实体
     * @param id
     * @return
     */
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "manageModelId", column = "manage_model_id"),
            @Result(property = "hostinfo", column = "hostinfo"),
            @Result(property = "loadState", column = "load_state"),
            @Result(property = "insertTime", column = "insert_time"),
            @Result(property = "lastupdateTime", column = "lastupdate_time"),
            @Result(property = "operator", column = "operator"),
            @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_model_host WHERE id = #{id} limit 1")
    ModelHostEntity selectByPrimaryKey(Long id);

    /**
    * 分页获取数据集合
    * @param offset 记录开始值
    * @param size 数量
    * @return
    */
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "manageModelId", column = "manage_model_id"),
        @Result(property = "hostinfo", column = "hostinfo"),
        @Result(property = "loadState", column = "load_state"),
        @Result(property = "insertTime", column = "insert_time"),
        @Result(property = "lastupdateTime", column = "lastupdate_time"),
        @Result(property = "operator", column = "operator"),
        @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_model_host  limit #{offset},#{size}")
    List<ModelHostEntity> findAllByPages(@Param("offset") int offset,@Param("size") int size);

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
                @Result(property = "manageModelId", column = "manage_model_id"),
                @Result(property = "hostinfo", column = "hostinfo"),
                @Result(property = "loadState", column = "load_state"),
                @Result(property = "insertTime", column = "insert_time"),
                @Result(property = "lastupdateTime", column = "lastupdate_time"),
                @Result(property = "operator", column = "operator"),
                @Result(property = "describ", column = "describ")    })
    @SelectProvider(type=ModelHostSql.class, method="getListByCondSql")
    List<ModelHostEntity> getListByCond(String columns,String where,String orderby,String limit);

    /**
     * 根据已有数据的列更新数据
     * @param entity
     * @return
     */
    //int updateByPrimaryKeySelective(ModelHostEntity entity);

    /**
     * 更新实体信息
     * @param entity
     * @return
     */
    @Update("update t_model_host set   manage_model_id=#{manageModelId,jdbcType=BIGINT} , hostinfo=#{hostinfo,jdbcType=VARCHAR} , load_state=#{loadState,jdbcType=SMALLINT} , insert_time=#{insertTime,jdbcType=TIMESTAMP} , lastupdate_time=#{lastupdateTime,jdbcType=TIMESTAMP} , operator=#{operator,jdbcType=VARCHAR} , describ=#{describ,jdbcType=VARCHAR}   where id=#{id}")
    int updateByPrimaryKey(ModelHostEntity entity);

    /**
    *根据条件查询count数量
    * @param where 查询条件 默认为空
    */
    @SelectProvider(type=ModelHostSql.class, method="getCountByCondSql")
    int getCountByCond(String where);
    /**
    *根据条件删除
    * @param where 查询条件 默认为空
    */
    @DeleteProvider(type=ModelHostSql.class, method="deleteByCondSql")
    int deleteByCond(String where);
    /**
    * 简单count查询
    * @return size
    */
    @Select("SELECT count(*) FROM t_model_host ")
    int getCount();

}