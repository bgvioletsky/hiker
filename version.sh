#!/bin/bash

# 检查存储版本号的文件是否存在，如果不存在则创建并初始化为0.0.0
if [ ! -f version.txt ]; then
    echo "0.0.0" > version.txt
fi

# 从version.txt文件中读取当前版本号
VERSION=$(cat version.txt)

# 以"."分割版本号，并将其放入数组中
IFS='.' read -r -a versionArray <<< "$VERSION"

# 递增最后一位数字
((versionArray[2]++))

# 如果最后一位数字达到了10，则将它设为0并递增前一位数字
if [ "${versionArray[2]}" -eq 20 ]; then
    versionArray[2]=0
    ((versionArray[1]++))

    # 如果第二位数字达到了10，则将它设为0并递增第一位数字
    if [ "${versionArray[1]}" -eq 20 ]; then
        versionArray[1]=0
        ((versionArray[0]++))
    fi
fi

# 将新版本号写回到version.txt文件中
echo "${versionArray[0]}.${versionArray[1]}.${versionArray[2]}" > version.txt

# 打印新版本号
echo "v${versionArray[0]}.${versionArray[1]}.${versionArray[2]}"
