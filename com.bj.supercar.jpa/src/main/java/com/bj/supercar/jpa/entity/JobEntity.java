package com.bj.supercar.jpa.entity;
import lombok.Data;
import java.util.Date;

/**
 * ClassName：JobEntity
 * Description：数据库中 t_job表对应的实体类
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@Data
public class JobEntity  {
    /**
	     * 
	     */
	    private long id;
	    /**
	     * job Application ID
	     */
	    private String applicationid;
	    /**
	     * job name
	     */
	    private String jobName;
	    /**
	     * job所有者
	     */
	    private String owner;
	    /**
	     * 状态信息,1:提交到数据库等待更新，2：mafka队列，3消费队列，4：正在执行生产数据，5：数据生成成功，等待模型训练job生成和提交，6：模型训练中，7模型训练
	     */
	    private int status;
	    /**
	     * job时间跨度
	     */
	    private int jobSpan;
	    /**
	     * 是否为定时任务，0：否；1：是
	     */
	    private int jobSchedule;
	    /**
	     * 如果是定时任务的时候crontab表达式
	     */
	    private String jobScheduleCron;
	    /**
	     * 生成数据类型信息（待完善）
	     */
	    private int genType;
	    /**
	     * 生成数据特征文件本地地址
	     */
	    private String genLocalfeaturePath;
	    /**
	     * 生成数据特征文件hadoop地址
	     */
	    private String genHdfsfeaturePath;
	    /**
	     * 生成数据地址信息
	     */
	    private String genDataRoot;
	    /**
	     * 输入训练地址信息
	     */
	    private String genInputTrain;
	    /**
	     * 输入测试地址信息
	     */
	    private String genInputTest;
	    /**
	     * 训练数据输出地址
	     */
	    private String genTrainOutputPath;
	    /**
	     * 生成数据运行mainClass
	     */
	    private String genMainclass;
	    /**
	     * 生成数据运行jar地址
	     */
	    private String genJarPath;
	    /**
	     * 生成数据基本配置信息json
	     */
	    private String genBasicConf;
	    /**
	     * 生成数据job配置conf信息json
	     */
	    private String genJobConf;
	    /**
	     * 生成数据job参数信息json
	     */
	    private String genJobParameter;
	    /**
	     * 训练类型信息（待完善）
	     */
	    private int trainType;
	    /**
	     * 训练基本配置信息json
	     */
	    private String trainBasicConf;
	    /**
	     * 训练job配置信息json
	     */
	    private String trainConf;
	    /**
	     * 训练job参数信息json
	     */
	    private String trainParameter;
	    /**
	     * 模型信息id
	     */
	    private long modelId;
	    /**
	     * 训练数据地址
	     */
	    private String trainDataPath;
	    /**
	     * 测试数据地址
	     */
	    private String testDataPath;
	    /**
	     * 训练特征文件
	     */
	    private String trainFeatureFile;
	    /**
	     * 训练数据切分百分比
	     */
	    private float dataSplitRatio;
	    /**
	     * 正负比例
	     */
	    private float posNegRatio;
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
	     * 
	     */
	    private String describ;
	
}