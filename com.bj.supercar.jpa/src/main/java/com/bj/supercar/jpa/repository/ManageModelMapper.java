package com.bj.supercar.jpa.repository;

import com.bj.supercar.jpa.dynamicsql.ManageModelSql;
import com.bj.supercar.jpa.entity.ManageModelEntity;
import java.util.List;

import org.apache.ibatis.annotations.*;
/**
 * ClassName：ManageModelMapper
 * Description：数据库中 t_manage_model表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
public interface ManageModelMapper {
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
    @Insert("insert into t_manage_model (model_name,model_file_ids,model_type,owner,hosts,domain_ids,active,taskid,appkey_id,enabled,insert_time,lastupdate_time,operator,describ)" +
    "values( #{modelName,jdbcType=VARCHAR} ,#{modelFileIds,jdbcType=VARCHAR} ,#{modelType,jdbcType=VARCHAR} ,#{owner,jdbcType=VARCHAR} ,#{hosts,jdbcType=VARCHAR} ,#{domainIds,jdbcType=VARCHAR} ,#{active,jdbcType=SMALLINT} ,#{taskid,jdbcType=VARCHAR} ,#{appkeyId,jdbcType=BIGINT} ,#{enabled,jdbcType=SMALLINT} ,#{insertTime,jdbcType=TIMESTAMP} ,#{lastupdateTime,jdbcType=TIMESTAMP} ,#{operator,jdbcType=VARCHAR} ,#{describ,jdbcType=VARCHAR} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(ManageModelEntity entity);

    /**
     * 根据已有数据的列插入数据
     * @param entity
     * @return
     */
    //int insertSelective(ManageModelEntity entity);

    /**
     * 根据主键id获取实体
     * @param id
     * @return
     */
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "modelName", column = "model_name"),
            @Result(property = "modelFileIds", column = "model_file_ids"),
            @Result(property = "modelType", column = "model_type"),
            @Result(property = "owner", column = "owner"),
            @Result(property = "hosts", column = "hosts"),
            @Result(property = "domainIds", column = "domain_ids"),
            @Result(property = "active", column = "active"),
            @Result(property = "taskid", column = "taskid"),
            @Result(property = "appkeyId", column = "appkey_id"),
            @Result(property = "enabled", column = "enabled"),
            @Result(property = "insertTime", column = "insert_time"),
            @Result(property = "lastupdateTime", column = "lastupdate_time"),
            @Result(property = "operator", column = "operator"),
            @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_manage_model WHERE id = #{id} limit 1")
    ManageModelEntity selectByPrimaryKey(Long id);

    /**
    * 分页获取数据集合
    * @param offset 记录开始值
    * @param size 数量
    * @return
    */
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "modelName", column = "model_name"),
        @Result(property = "modelFileIds", column = "model_file_ids"),
        @Result(property = "modelType", column = "model_type"),
        @Result(property = "owner", column = "owner"),
        @Result(property = "hosts", column = "hosts"),
        @Result(property = "domainIds", column = "domain_ids"),
        @Result(property = "active", column = "active"),
        @Result(property = "taskid", column = "taskid"),
        @Result(property = "appkeyId", column = "appkey_id"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "insertTime", column = "insert_time"),
        @Result(property = "lastupdateTime", column = "lastupdate_time"),
        @Result(property = "operator", column = "operator"),
        @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_manage_model  limit #{offset},#{size}")
    List<ManageModelEntity> findAllByPages(@Param("offset") int offset,@Param("size") int size);

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
                @Result(property = "modelName", column = "model_name"),
                @Result(property = "modelFileIds", column = "model_file_ids"),
                @Result(property = "modelType", column = "model_type"),
                @Result(property = "owner", column = "owner"),
                @Result(property = "hosts", column = "hosts"),
                @Result(property = "domainIds", column = "domain_ids"),
                @Result(property = "active", column = "active"),
                @Result(property = "taskid", column = "taskid"),
                @Result(property = "appkeyId", column = "appkey_id"),
                @Result(property = "enabled", column = "enabled"),
                @Result(property = "insertTime", column = "insert_time"),
                @Result(property = "lastupdateTime", column = "lastupdate_time"),
                @Result(property = "operator", column = "operator"),
                @Result(property = "describ", column = "describ")    })
    @SelectProvider(type=ManageModelSql.class, method="getListByCondSql")
    List<ManageModelEntity> getListByCond(String columns,String where,String orderby,String limit);

    /**
     * 根据已有数据的列更新数据
     * @param entity
     * @return
     */
    //int updateByPrimaryKeySelective(ManageModelEntity entity);

    /**
     * 更新实体信息
     * @param entity
     * @return
     */
    @Update("update t_manage_model set   model_name=#{modelName,jdbcType=VARCHAR} , model_file_ids=#{modelFileIds,jdbcType=VARCHAR} , model_type=#{modelType,jdbcType=VARCHAR} , owner=#{owner,jdbcType=VARCHAR} , hosts=#{hosts,jdbcType=VARCHAR} , domain_ids=#{domainIds,jdbcType=VARCHAR} , active=#{active,jdbcType=SMALLINT} , taskid=#{taskid,jdbcType=VARCHAR} , appkey_id=#{appkeyId,jdbcType=BIGINT} , enabled=#{enabled,jdbcType=SMALLINT} , insert_time=#{insertTime,jdbcType=TIMESTAMP} , lastupdate_time=#{lastupdateTime,jdbcType=TIMESTAMP} , operator=#{operator,jdbcType=VARCHAR} , describ=#{describ,jdbcType=VARCHAR}   where id=#{id}")
    int updateByPrimaryKey(ManageModelEntity entity);

    /**
    *根据条件查询count数量
    * @param where 查询条件 默认为空
    */
    @SelectProvider(type=ManageModelSql.class, method="getCountByCondSql")
    int getCountByCond(String where);
    /**
    *根据条件删除
    * @param where 查询条件 默认为空
    */
    @DeleteProvider(type=ManageModelSql.class, method="deleteByCondSql")
    int deleteByCond(String where);
    /**
    * 简单count查询
    * @return size
    */
    @Select("SELECT count(*) FROM t_manage_model ")
    int getCount();

}