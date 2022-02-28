#!/bin/bash
if [ ! $@ ]; then
name='sg-image'
else
name=$@
fi
docker build -t $name \
--build-arg USER_ID=$(id -u) \
--build-arg GROUP_ID=$(id -g) .