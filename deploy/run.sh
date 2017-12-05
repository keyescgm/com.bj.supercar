#!/bin/bash

function init() {
    set -e

    #检查发布系统的环境变量是否设置成功
    if [ -z "$LOG_PATH" ]; then
        LOG_PATH="/opt/logs/apps/$APP_NAME"
        if [ ! -e $LOG_PATH ]; then
            mkdir -p $LOG_PATH
        fi
    fi

    if [ ! -e "$GC_LOG_PATH" ]; then
        mkdir -p $GC_LOG_PATH
    fi

    if [ ! -e "$START_LOG_PATH" ]; then
        mkdir -p $START_LOG_PATH
    fi

    touch $START_LOG

}

function run() {
    set -e
    #设置JDK,申请机器后务必查看线上机器的/usr/local下JDK路径是否如下
    JAVA_CMD=$JAVA_VERSION
    if [ -z "$JAVA_VERSION" ]; then
        JAVA_CMD="java"
    else
        JAVA_CMD="/usr/local/$JAVA_VERSION/bin/java"
    fi

    ip="$(ifconfig | grep -A 1 'eth0' | tail -1 | cut -d ':' -f 2 | cut -d ' ' -f 1)"

    EXEC_JAVA="exec ${JAVA_CMD} -jar -server"
    EXEC_JAVA=$EXEC_JAVA" -Dserver.port=8080 -Dss1=${APP_NAME} -Dfile.encoding=UTF-8 -Dapp.key=${APP_NAME} -Dapp.ip=${ip} -Dapp.host=${HOSTNAME} -Dsun.jnu.encoding=UTF-8 -Djava.io.tmpdir=/tmp -Djava.net.preferIPv6Addresses=false -Duser.timezone=GMT+08 -Djava.util.prefs.systemRoot=/home/sankuai/.java"

    #staging环境添加远程调试端口
    #if [ $ENV = "staging" ]; then
     #   EXEC_JAVA=$EXEC_JAVA" -Xdebug -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8415"
    #fi

    EXEC_JAVA=$EXEC_JAVA" -XX:-LoopUnswitching -XX:-OmitStackTraceInFastThrow -Xmx6g -Xms6g -Xmn3G -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=0 -XX:+UseCMSCompactAtFullCollection -XX:+ExplicitGCInvokesConcurrent -XX:CMSInitiatingOccupancyFraction=70 -XX:+UseCMSInitiatingOccupancyOnly -XX:SurvivorRatio=8 -XX:ReservedCodeCacheSize=64m -XX:InitialCodeCacheSize=64m -XX:+HeapDumpOnOutOfMemoryError -Xloggc:${GC_LOG_PATH}/${APP_NAME}.gc.log -verbose:gc -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=256M"
    EXEC_JAVA=$EXEC_JAVA" -DLog4jContextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector"
    EXEC_JAVA=$EXEC_JAVA" -agentlib:jdwp=transport=dt_socket,address=8412,server=y,suspend=n -jar ml-platform-console-1.0-SNAPSHOT.jar > ${START_LOG} 2>&1"

    echo $EXEC_JAVA
    $EXEC_JAVA
}

#工程启动和部署
set -e

export GC_LOG_PATH=/opt/logs/apps/$APP_NAME/gclogs
export START_LOG_PATH=/opt/logs/apps/$APP_NAME/startlogs
export START_LOG=$START_LOG_PATH"/daemontools.log"

init
run