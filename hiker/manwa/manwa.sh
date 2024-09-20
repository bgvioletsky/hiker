#!/bin/bash

# 检查是否提供了正确的参数数量
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 filename"
    exit 1
fi

# 提取文件名（不带后缀）
filename_without_ext="${1%.*}"

# 定义前缀
prefix="海阔视界规则分享，当前分享的是：小程序，bgcode￥home_rule_v2￥base64://@漫蛙\n@"

# 读取文件并去除换行符和空格
content=$(cat "$1" | tr -d '\n' | tr -d ' ')

# Base64 编码
base64_encoded=$(echo -n "$content" | base64)

# 添加前缀
final_output="$prefix$base64_encoded"

# 输出结果
echo "$final_output" > "${filename_without_ext}.txt"