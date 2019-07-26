#! /bin/bash

port=8085
registry=127.0.0.1:5000
registry_version=v1.0
repository=case-backend
git_commit_id=`git rev-parse --short HEAD`
commit_time=`date +%Y%m%d%H%M%S`

export NODE_ENV=$1
if [ $1 == "prod" ];then
    docker build --build-arg PUBLISH_ENV=${NODE_ENV} -t ${registry}/${repository}:${registry_version}_${commit_time}_${git_commit_id} .
    echo ${registry}/${repository}:${registry_version}_${commit_time}_${git_commit_id}
    #上传docker服务器
    docker run -d -e NODE_ENV=prod -p ${port}:${port} ${registry}/${repository}:${registry_version}_${commit_time}_${git_commit_id}
fi
