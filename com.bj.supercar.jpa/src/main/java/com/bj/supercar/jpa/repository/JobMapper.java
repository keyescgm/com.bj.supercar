package com.bj.supercar.jpa.repository;

import com.bj.supercar.jpa.dynamicsql.JobSql;
import com.bj.supercar.jpa.entity.JobEntity;
import java.util.List;

import org.apache.ibatis.annotations.*;
/**
 * ClassName：JobMapper
 * Description：数据库中 t_job表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
public interface JobMapper {
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
    @Insert("insert into t_job (applicationid,job_name,owner,status,job_span,job_schedule,job_schedule_cron,gen_type,gen_localfeature_path,gen_hdfsfeature_path,gen_data_root,gen_input_train,gen_input_test,gen_train_output_path,gen_mainclass,gen_jar_path,gen_basic_conf,gen_job_conf,gen_job_parameter,train_type,train_basic_conf,train_conf,train_parameter,model_id,train_data_path,test_data_path,train_feature_file,data_split_ratio,pos_neg_ratio,enabled,insert_time,lastupdate_time,operator,describ)" +
    "values( #{applicationid,jdbcType=VARCHAR} ,#{jobName,jdbcType=VARCHAR} ,#{owner,jdbcType=VARCHAR} ,#{status,jdbcType=SMALLINT} ,#{jobSpan,jdbcType=INTEGER} ,#{jobSchedule,jdbcType=SMALLINT} ,#{jobScheduleCron,jdbcType=VARCHAR} ,#{genType,jdbcType=INTEGER} ,#{genLocalfeaturePath,jdbcType=VARCHAR} ,#{genHdfsfeaturePath,jdbcType=VARCHAR} ,#{genDataRoot,jdbcType=VARCHAR} ,#{genInputTrain,jdbcType=VARCHAR} ,#{genInputTest,jdbcType=VARCHAR} ,#{genTrainOutputPath,jdbcType=VARCHAR} ,#{genMainclass,jdbcType=VARCHAR} ,#{genJarPath,jdbcType=VARCHAR} ,#{genBasicConf,jdbcType=VARCHAR} ,#{genJobConf,jdbcType=VARCHAR} ,#{genJobParameter,jdbcType=VARCHAR} ,#{trainType,jdbcType=INTEGER} ,#{trainBasicConf,jdbcType=VARCHAR} ,#{trainConf,jdbcType=VARCHAR} ,#{trainParameter,jdbcType=VARCHAR} ,#{modelId,jdbcType=BIGINT} ,#{trainDataPath,jdbcType=VARCHAR} ,#{testDataPath,jdbcType=VARCHAR} ,#{trainFeatureFile,jdbcType=VARCHAR} ,#{dataSplitRatio,jdbcType=FLOAT} ,#{posNegRatio,jdbcType=FLOAT} ,#{enabled,jdbcType=SMALLINT} ,#{insertTime,jdbcType=TIMESTAMP} ,#{lastupdateTime,jdbcType=TIMESTAMP} ,#{operator,jdbcType=VARCHAR} ,#{describ,jdbcType=VARCHAR} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(JobEntity entity);

    /**
     * 根据已有数据的列插入数据
     * @param entity
     * @return
     */
    //int insertSelective(JobEntity entity);

    /**
     * 根据主键id获取实体
     * @param id
     * @return
     */
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "applicationid", column = "applicationid"),
            @Result(property = "jobName", column = "job_name"),
            @Result(property = "owner", column = "owner"),
            @Result(property = "status", column = "status"),
            @Result(property = "jobSpan", column = "job_span"),
            @Result(property = "jobSchedule", column = "job_schedule"),
            @Result(property = "jobScheduleCron", column = "job_schedule_cron"),
            @Result(property = "genType", column = "gen_type"),
            @Result(property = "genLocalfeaturePath", column = "gen_localfeature_path"),
            @Result(property = "genHdfsfeaturePath", column = "gen_hdfsfeature_path"),
            @Result(property = "genDataRoot", column = "gen_data_root"),
            @Result(property = "genInputTrain", column = "gen_input_train"),
            @Result(property = "genInputTest", column = "gen_input_test"),
            @Result(property = "genTrainOutputPath", column = "gen_train_output_path"),
            @Result(property = "genMainclass", column = "gen_mainclass"),
            @Result(property = "genJarPath", column = "gen_jar_path"),
            @Result(property = "genBasicConf", column = "gen_basic_conf"),
            @Result(property = "genJobConf", column = "gen_job_conf"),
            @Result(property = "genJobParameter", column = "gen_job_parameter"),
            @Result(property = "trainType", column = "train_type"),
            @Result(property = "trainBasicConf", column = "train_basic_conf"),
            @Result(property = "trainConf", column = "train_conf"),
            @Result(property = "trainParameter", column = "train_parameter"),
            @Result(property = "modelId", column = "model_id"),
            @Result(property = "trainDataPath", column = "train_data_path"),
            @Result(property = "testDataPath", column = "test_data_path"),
            @Result(property = "trainFeatureFile", column = "train_feature_file"),
            @Result(property = "dataSplitRatio", column = "data_split_ratio"),
            @Result(property = "posNegRatio", column = "pos_neg_ratio"),
            @Result(property = "enabled", column = "enabled"),
            @Result(property = "insertTime", column = "insert_time"),
            @Result(property = "lastupdateTime", column = "lastupdate_time"),
            @Result(property = "operator", column = "operator"),
            @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_job WHERE id = #{id} limit 1")
    JobEntity selectByPrimaryKey(Long id);

    /**
    * 分页获取数据集合
    * @param offset 记录开始值
    * @param size 数量
    * @return
    */
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "applicationid", column = "applicationid"),
        @Result(property = "jobName", column = "job_name"),
        @Result(property = "owner", column = "owner"),
        @Result(property = "status", column = "status"),
        @Result(property = "jobSpan", column = "job_span"),
        @Result(property = "jobSchedule", column = "job_schedule"),
        @Result(property = "jobScheduleCron", column = "job_schedule_cron"),
        @Result(property = "genType", column = "gen_type"),
        @Result(property = "genLocalfeaturePath", column = "gen_localfeature_path"),
        @Result(property = "genHdfsfeaturePath", column = "gen_hdfsfeature_path"),
        @Result(property = "genDataRoot", column = "gen_data_root"),
        @Result(property = "genInputTrain", column = "gen_input_train"),
        @Result(property = "genInputTest", column = "gen_input_test"),
        @Result(property = "genTrainOutputPath", column = "gen_train_output_path"),
        @Result(property = "genMainclass", column = "gen_mainclass"),
        @Result(property = "genJarPath", column = "gen_jar_path"),
        @Result(property = "genBasicConf", column = "gen_basic_conf"),
        @Result(property = "genJobConf", column = "gen_job_conf"),
        @Result(property = "genJobParameter", column = "gen_job_parameter"),
        @Result(property = "trainType", column = "train_type"),
        @Result(property = "trainBasicConf", column = "train_basic_conf"),
        @Result(property = "trainConf", column = "train_conf"),
        @Result(property = "trainParameter", column = "train_parameter"),
        @Result(property = "modelId", column = "model_id"),
        @Result(property = "trainDataPath", column = "train_data_path"),
        @Result(property = "testDataPath", column = "test_data_path"),
        @Result(property = "trainFeatureFile", column = "train_feature_file"),
        @Result(property = "dataSplitRatio", column = "data_split_ratio"),
        @Result(property = "posNegRatio", column = "pos_neg_ratio"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "insertTime", column = "insert_time"),
        @Result(property = "lastupdateTime", column = "lastupdate_time"),
        @Result(property = "operator", column = "operator"),
        @Result(property = "describ", column = "describ")    })
    @Select("SELECT * FROM t_job  limit #{offset},#{size}")
    List<JobEntity> findAllByPages(@Param("offset") int offset,@Param("size") int size);

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
                @Result(property = "applicationid", column = "applicationid"),
                @Result(property = "jobName", column = "job_name"),
                @Result(property = "owner", column = "owner"),
                @Result(property = "status", column = "status"),
                @Result(property = "jobSpan", column = "job_span"),
                @Result(property = "jobSchedule", column = "job_schedule"),
                @Result(property = "jobScheduleCron", column = "job_schedule_cron"),
                @Result(property = "genType", column = "gen_type"),
                @Result(property = "genLocalfeaturePath", column = "gen_localfeature_path"),
                @Result(property = "genHdfsfeaturePath", column = "gen_hdfsfeature_path"),
                @Result(property = "genDataRoot", column = "gen_data_root"),
                @Result(property = "genInputTrain", column = "gen_input_train"),
                @Result(property = "genInputTest", column = "gen_input_test"),
                @Result(property = "genTrainOutputPath", column = "gen_train_output_path"),
                @Result(property = "genMainclass", column = "gen_mainclass"),
                @Result(property = "genJarPath", column = "gen_jar_path"),
                @Result(property = "genBasicConf", column = "gen_basic_conf"),
                @Result(property = "genJobConf", column = "gen_job_conf"),
                @Result(property = "genJobParameter", column = "gen_job_parameter"),
                @Result(property = "trainType", column = "train_type"),
                @Result(property = "trainBasicConf", column = "train_basic_conf"),
                @Result(property = "trainConf", column = "train_conf"),
                @Result(property = "trainParameter", column = "train_parameter"),
                @Result(property = "modelId", column = "model_id"),
                @Result(property = "trainDataPath", column = "train_data_path"),
                @Result(property = "testDataPath", column = "test_data_path"),
                @Result(property = "trainFeatureFile", column = "train_feature_file"),
                @Result(property = "dataSplitRatio", column = "data_split_ratio"),
                @Result(property = "posNegRatio", column = "pos_neg_ratio"),
                @Result(property = "enabled", column = "enabled"),
                @Result(property = "insertTime", column = "insert_time"),
                @Result(property = "lastupdateTime", column = "lastupdate_time"),
                @Result(property = "operator", column = "operator"),
                @Result(property = "describ", column = "describ")    })
    @SelectProvider(type=JobSql.class, method="getListByCondSql")
    List<JobEntity> getListByCond(String columns,String where,String orderby,String limit);

    /**
     * 根据已有数据的列更新数据
     * @param entity
     * @return
     */
    //int updateByPrimaryKeySelective(JobEntity entity);

    /**
     * 更新实体信息
     * @param entity
     * @return
     */
    @Update("update t_job set   applicationid=#{applicationid,jdbcType=VARCHAR} , job_name=#{jobName,jdbcType=VARCHAR} , owner=#{owner,jdbcType=VARCHAR} , status=#{status,jdbcType=SMALLINT} , job_span=#{jobSpan,jdbcType=INTEGER} , job_schedule=#{jobSchedule,jdbcType=SMALLINT} , job_schedule_cron=#{jobScheduleCron,jdbcType=VARCHAR} , gen_type=#{genType,jdbcType=INTEGER} , gen_localfeature_path=#{genLocalfeaturePath,jdbcType=VARCHAR} , gen_hdfsfeature_path=#{genHdfsfeaturePath,jdbcType=VARCHAR} , gen_data_root=#{genDataRoot,jdbcType=VARCHAR} , gen_input_train=#{genInputTrain,jdbcType=VARCHAR} , gen_input_test=#{genInputTest,jdbcType=VARCHAR} , gen_train_output_path=#{genTrainOutputPath,jdbcType=VARCHAR} , gen_mainclass=#{genMainclass,jdbcType=VARCHAR} , gen_jar_path=#{genJarPath,jdbcType=VARCHAR} , gen_basic_conf=#{genBasicConf,jdbcType=VARCHAR} , gen_job_conf=#{genJobConf,jdbcType=VARCHAR} , gen_job_parameter=#{genJobParameter,jdbcType=VARCHAR} , train_type=#{trainType,jdbcType=INTEGER} , train_basic_conf=#{trainBasicConf,jdbcType=VARCHAR} , train_conf=#{trainConf,jdbcType=VARCHAR} , train_parameter=#{trainParameter,jdbcType=VARCHAR} , model_id=#{modelId,jdbcType=BIGINT} , train_data_path=#{trainDataPath,jdbcType=VARCHAR} , test_data_path=#{testDataPath,jdbcType=VARCHAR} , train_feature_file=#{trainFeatureFile,jdbcType=VARCHAR} , data_split_ratio=#{dataSplitRatio,jdbcType=FLOAT} , pos_neg_ratio=#{posNegRatio,jdbcType=FLOAT} , enabled=#{enabled,jdbcType=SMALLINT} , insert_time=#{insertTime,jdbcType=TIMESTAMP} , lastupdate_time=#{lastupdateTime,jdbcType=TIMESTAMP} , operator=#{operator,jdbcType=VARCHAR} , describ=#{describ,jdbcType=VARCHAR}   where id=#{id}")
    int updateByPrimaryKey(JobEntity entity);

    /**
    *根据条件查询count数量
    * @param where 查询条件 默认为空
    */
    @SelectProvider(type=JobSql.class, method="getCountByCondSql")
    int getCountByCond(String where);
    /**
    *根据条件删除
    * @param where 查询条件 默认为空
    */
    @DeleteProvider(type=JobSql.class, method="deleteByCondSql")
    int deleteByCond(String where);
    /**
    * 简单count查询
    * @return size
    */
    @Select("SELECT count(*) FROM t_job ")
    int getCount();

}