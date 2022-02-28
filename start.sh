#!/bin/bash
if [ ! $@ ]; then
name='sg-container'
else
name=$@
fi
docker rmi `docker ps -aq -f name=$name`
set -a
source .env

docker run -d --rm \
-e NODE_ENV=$NODE_ENV \
-e PORT=$PORT \
-e CORS_ORIGIN=$CORS_ORIGIN \
--name $name sg-image
