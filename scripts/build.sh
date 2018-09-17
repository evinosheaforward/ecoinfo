#!/bin/bash

docker-compose down

sudo chown -R $USER:$USER . 

docker-compose build
