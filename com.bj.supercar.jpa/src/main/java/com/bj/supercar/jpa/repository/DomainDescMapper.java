package com.bj.supercar.jpa.repository;

import com.bj.supercar.jpa.dynamicsql.DomainDescSql;
import com.bj.supercar.jpa.entity.DomainDescEntity;
import java.util.List;

import org.apache.ibatis.annotations.*;
/**
 * ClassName：DomainDescMapper
 * Description：数据库中 t_domain_desc表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
public interface DomainDescMapper {
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
    @Insert("insert into t_domain_desc (manage_model_id,domain_name,all_load,main_key,domain_keys,field_json,insert_time,lastupdate_time,operator,describ)" +
    "values( #{manageModelId,jdbcType=BIGINT} ,#{domainName,jdbcType=VARCHAR} ,#{allLoad,jdbcType=SMALLINT} ,#{mainKey,jdbcType=VARCHAR} ,#{domainKeys,jdbcType=VARCHAR} ,#{fieldJson,jdbcType=VARCHAR} ,#{insertTime,jdbcType=TIMESTAMP} ,#{lastupdateTime,jdbcType=TIMESTAMP} ,#{operator,jdbcType=VARCHAR} ,#{describ,jdbcType=VARCHAR} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(DomainDescEntity entity);

    /**
     * 根据已有数据的列插入数据
     * @param entity
     * @return
     */
    //int insertSelective(DomainDescEntity entity);

    /**
     * 根据主键id获取实体
     * @param id
     * @return
     */
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "manageModelId", column = "manage_model_id"),
            @Result(property = "domainName", column = "domain_name"),
            @Result(property = "allLoad", column = "all_load"),
            @Result(property = "mainKey", column = "main_key"),
            @Result(property = "domainKeys", column = "domain_keys"),
            @Result(property = "fieldJson", column = "field_json"),
            @Result(property = "insertTime", column = "insert_time"),
            @Result(property = "lastupdateTime", column = "lastupdate_time"),
            @Result(property = "operator", column = "operator"),
            @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_domain_desc WHERE id = #{id} limit 1")
    DomainDescEntity selectByPrimaryKey(Long id);

    /**
    * 分页获取数据集合
    * @param offset 记录开始值
    * @param size 数量
    * @return
    */
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "manageModelId", column = "manage_model_id"),
        @Result(property = "domainName", column = "domain_name"),
        @Result(property = "allLoad", column = "all_load"),
        @Result(property = "mainKey", column = "main_key"),
        @Result(property = "domainKeys", column = "domain_keys"),
        @Result(property = "fieldJson", column = "field_json"),
        @Result(property = "insertTime", column = "insert_time"),
        @Result(property = "lastupdateTime", column = "lastupdate_time"),
        @Result(property = "operator", column = "operator"),
        @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_domain_desc  limit #{offset},#{size}")
    List<DomainDescEntity> findAllByPages(@Param("offset") int offset,@Param("size") int size);

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
                @Result(property = "domainName", column = "domain_name"),
                @Result(property = "allLoad", column = "all_load"),
                @Result(property = "mainKey", column = "main_key"),
                @Result(property = "domainKeys", column = "domain_keys"),
                @Result(property = "fieldJson", column = "field_json"),
                @Result(property = "insertTime", column = "insert_time"),
                @Result(property = "lastupdateTime", column = "lastupdate_time"),
                @Result(property = "operator", column = "operator"),
                @Result(property = "describ", column = "describ")    })
    @SelectProvider(type=DomainDescSql.class, method="getListByCondSql")
    List<DomainDescEntity> getListByCond(String columns,String where,String orderby,String limit);

    /**
     * 根据已有数据的列更新数据
     * @param entity
     * @return
     */
    //int updateByPrimaryKeySelective(DomainDescEntity entity);

    /**
     * 更新实体信息
     * @param entity
     * @return
     */
    @Update("update t_domain_desc set   manage_model_id=#{manageModelId,jdbcType=BIGINT} , domain_name=#{domainName,jdbcType=VARCHAR} , all_load=#{allLoad,jdbcType=SMALLINT} , main_key=#{mainKey,jdbcType=VARCHAR} , domain_keys=#{domainKeys,jdbcType=VARCHAR} , field_json=#{fieldJson,jdbcType=VARCHAR} , insert_time=#{insertTime,jdbcType=TIMESTAMP} , lastupdate_time=#{lastupdateTime,jdbcType=TIMESTAMP} , operator=#{operator,jdbcType=VARCHAR} , describ=#{describ,jdbcType=VARCHAR}   where id=#{id}")
    int updateByPrimaryKey(DomainDescEntity entity);

    /**
    *根据条件查询count数量
    * @param where 查询条件 默认为空
    */
    @SelectProvider(type=DomainDescSql.class, method="getCountByCondSql")
    int getCountByCond(String where);
    /**
    *根据条件删除
    * @param where 查询条件 默认为空
    */
    @DeleteProvider(type=DomainDescSql.class, method="deleteByCondSql")
    int deleteByCond(String where);
    /**
    * 简单count查询
    * @return size
    */
    @Select("SELECT count(*) FROM t_domain_desc ")
    int getCount();

}