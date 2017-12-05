#!/bin/bash
WAIT_SECONDS=30
k=1
echo "检查服务是否启动......"
if [ -z $TEST_URL ]; then
    echo "没有配置测试URL"
    exit 0
fi

for k in $(seq 1 $WAIT_SECONDS)
do
    sleep 1
    STATUS_CODE=`curl -o /dev/null -s -w %{http_code} $TEST_URL`
    if [ "$STATUS_CODE" = "200" ];then
        echo "测试URL:$TEST_URL succeeded!"
        echo "响应CODE:$STATUS_CODE"
        exit 0;
    else
        echo "测试URL:$TEST_URL failed!"
        echo "响应CODE: $STATUS_CODE"
        echo "尝试次数$k....."
    fi
    if [ $k -eq $WAIT_SECONDS ];then
        echo "测试失败"
        echo "服务没有启动"
        exit -1
    fi
done