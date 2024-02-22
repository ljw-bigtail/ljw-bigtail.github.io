#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包 - 复制 子项目文件

# blog 
cd ../LeoBlog
npm run docs:build
cp -rf ./docs/.vuepress/dist/* ../ljw-bigtail.github.io/blog

# PicFactory
cd ../PicFactory
npm run build
cp -rf ./dist/* ../ljw-bigtail.github.io/

# 打包 - 复制 end

# 发布
cd ../ljw-bigtail.github.io
git add -A
git commit -m 'deploy'
git push origin main

# 打包
cd ../
mkdir www.inland.vip
cp -rf ./ljw-bigtail.github.io/ ./www.inland.vip/
zip -r -o www.inland.vip.zip ./www.inland.vip -x='.git/*' -x='deploy.sh' -x='.DS_Store' -x='README.md'
mv -f www.inland.vip.zip /Users/leo/Desktop